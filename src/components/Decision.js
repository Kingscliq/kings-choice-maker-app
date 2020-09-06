









import React, { Component } from 'react'
    
const divStyle ={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '760px',
    margin: '20px auto',
    height: '450px',
    padding: '35px',
    background: 'rgb(245, 243, 243)',
    boxShadow: '-4px -1px 34px 0px rgba(168,153,168,1)',
    gridColumnGap: '20px',
    borderRadius: '30px'
}
const ul = {
    listStyleType : 'none',

}
const li = {
    fontSize: '1.1rem',
    fontFamily: '"Quicksand", sans-serif',
    margin: '10px'
}
const mainBtn={
    backgroundColor: '#0f51df',
    fontWeight: 'bolder',
    color: '#ccc',
    width:'100%',
    padding: ' auto',
    border: 'none',
    fontSize: '1.3rem',
    cursor: 'pointer',
    height:'70px',
    margin: '10px',
    borderRadius:'5px',
}
const buttonDiv={
    width:'100%',
    padding: ' auto',
    border: 'none',
    fontSize: '.8rem',
    cursor: 'pointer',
    height:'40px',
    background: '#cdcdcd',
    margin: '10px'
}
const heading={
    fontSize: '1.5rem',
    color: '#07689f !important'
}
const icon={
    marginLeft: '10px',
    fontSize: '1rem'
}
const heading_3 = {
    color: '#93b8f5',

}

export class Decision extends Component {
   constructor(props){
        super(props)
        this.state = {
            ans: props.randAns,
            
        }
   }   
   getMostFrequentQuestion = () => {
       const {questionsPop} = this.props
    //     return questionsPop.sort((x,y) =>
    //           questionsPop.filter(w => w===x).length
    //         - questionsPop.filter(w => w===y).length
    //     ).pop();
    // const {questionsPop} = this.props

    // questionsPop.forEach((quest) => {
    //     return quest;
    // });

    // // questionsPop.map((question) => console.log(question))

    // return arr.reduce((acc, elem) =>{

    // return (val === elem ? acc + 1  : acc)}, 0);

    // var cats = ['Tom','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
    // var counts = {};
    // var compare = 0;
    // var mostFrequent;
    // (function(array){
    // for(var i = 0, len = array.length; i < len; i++){
    //     var word = array[i];
        
    //     if(counts[word] === undefined){
    //         counts[word] = 1;
    //     }else{
    //         counts[word] = counts[word] + 1;
    //     }
    //     if(counts[word] > compare){
    //             compare = counts[word];
    //             mostFrequent = cats[i];
    //     }
    //     }
    // return mostFrequent;
    // })(questionsPop);

    questionsPop.forEach((quest, index) => {
        
        var popquest = questionsPop.includes(quest);
        
        
        if(quest.questions === popquest){
           this.setState({
               count: this.state.count + 1
           })
        }
    })



    questionsPop.map((quest, index) =>{
        let maxValue = quest.count
        console.log(maxValue)
    })

    // var max = arr.reduce(function(a, b) {
    //     return Math.max(a, b);
    // });


    }

   handleRandomAns = ()=> {
    let options,randomValue;
    options = this.props.options
    randomValue = options[Math.floor(Math.random() * options.length)]        
       this.setState({
           ans: randomValue
       })
   }
    render() {
        
        const { back, options, questions, questionsPop } = this.props
    
        let randomAnswer = this.state.ans

        // const popularQuestion = this.getMostFrequentQuestion(questionsPop)
        console.log(this)
        this.getMostFrequentQuestion()
    
        return (
            <div style={divStyle}>
                <div>
                    <h1 style={heading}><strong>Question: </strong>{questions}</h1>
                    <h3 style={heading_3}>Decision: <span style={{color:'#4287f5', fontFamily: '"Raleway", sans-serif'}}>{randomAnswer}</span></h3>
                    <h4>&nbsp;Other Options</h4>
                        <ul style={ul}>

                                
                                {options.map((option, index) => <li style={li}>{option}</li>)}
                            <br/>
                        </ul>
                </div>
                <div>
                    <button style={mainBtn} onClick={this.handleRandomAns} >
                        <i className="fas fa-redo"></i>&nbsp; &nbsp; Get Another Choice</button>
                    
                    <button style={buttonDiv} onClick= {back}>Ask Another Question<i style={icon} className="fas fa-arrow-alt-circle-right"></i>&nbsp;</button>
                </div>
                <div>
                    <p>
                        <h3>The most popular Question is:</h3>
                        
                       <small>
                           
                        
                            
                            
                       </small>


                    

                    </p>
                </div>
            </div>
        )
        
    }
    
}

export default Decision
