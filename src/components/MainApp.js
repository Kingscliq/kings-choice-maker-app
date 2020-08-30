






import React, { Component } from 'react'
import Navbar from './Navbar'
import Decision from './Decision'
import Questions from './Questions'

export class MainApp extends Component {
    constructor(props) {
        super(props)
        // var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
        this.state = {
            step: 1,
            questions:'',
            options: [],
            questionsPop: ['How are you', 'where are u']
           
            
        }
    }
    
    // Process-Form
    mainProcess = () =>{
        const {step, questions, questionsPop} = this.state;
        this.setState({
            step: step + 1,
            questions: questions,
            questionsPop: questionsPop.push(questions)
           
        })

        console.log(questionsPop)
        
    }
    

    // Go back to Previous Main Page
    back = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    } 
    handleQuestionChange = (e, index) => {
        this.state.questions = e.target.value
        this.setState({
            questions: this.state.questions
        })
    }

    handleOptionChange = (e, index) =>{
        this.state.options[index] = e.target.value
        this.setState({
           options: this.state.options
        })
    }
    

    //Method to add new Item to the questions Array
    addOption = (e) =>{
        this.setState({
            options: [...this.state.options, ''],
            
        })

    }

    addQuestion = (e) => {
        this.setState({
            questionsPop: [...this.state.questionsPop]
        })
    }

    

    ///Function to get random number
        
    // }
    getRandomValue(){
        let options = this.state.options
         let randomValue = options[Math.floor(Math.random() * options.length)]
        
        return randomValue

        
    }



    

        // const options = this.state.options
        // const index = Math.floor(Math.round() * options.length - 1)
        // let choice = options[index]
        // // 
        // console.log(options)
     
        // return choice;
        
    

    
    

    render() {
        const {step} = this.state;
        const {questions, options} = this.state;
        

        switch (step) {
            case 1:
                return(
                    <div>
                        <Navbar/>
                    <div className ="myform">
                        
                        <form  onSubmit={this.mainProcess}>

                            <Questions
                                mainProcess ={this.mainProcess}
                                handleQuestionChange = {this.handleQuestionChange}
                                handleOptionChange={this.handleOptionChange}
                                questions={questions}
                                options={options}
                                getRandomValue={this.getRandomValue.bind(this)}
                            />
                            <div className="btn-div">
                                <div>
                                    <button className="btn btn-default" onClick={(e)=>{
                                        e.preventDefault()
                                        this.addOption()
                                        this.addQuestion()
                                }}
                                    
                                    ><i className="fas fa-plus"></i>Option</button></div>             
                                <div><button className="btn btn-success" type="submit">Answer</button></div>  
                        </div> 
                                     
                        </form>
                         
                </div>
                </div>
                    
                )

            case 2:
                return(
                    <Decision
                        mainProcess = {this.mainProcess}
                        questions={questions}
                        options={options}
                        back ={this.back}
                        handleQuestionChange ={this.handleQuestionChange}
                        handleOptionChange ={this.handleOptionChange}
                        getRandomValue = {this.getRandomValue.bind(this)}
                       
                    />
                )

            
        
            
        }
    
    }
}

export default MainApp
