









import React, { Component } from 'react'
    
const divStyle ={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '500px',
    margin: '20px auto',
    height: '450px',
    padding: '35px',
    background: 'rgb(245, 243, 243)',
    boxShadow: '-4px -1px 34px 0px rgba(168,153,168,1)',
    gridColumnGap: '20px'
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

export class Decision extends Component {
   constructor(props){
        super(props)
        this.state = {
            ans: props.randAns
        }
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
        const { back, answer, getRandomNumber,options, questions, } = this.props
        let val = this.props.getRandomValue(options);
        let randomAnswer = this.state.ans
        
    
        return (
            <div style={divStyle}>
                <div>
                    <h1 style={heading}>Heres Your Random Answer</h1>
                    <h3>{questions}</h3>
                    <h4>Decision: &nbsp;{
                    
                        randomAnswer
                ////////////////////// i want to display the random value here///////////////////////////
                
                        }</h4>
                        <ul style={ul}>
                            
                           {/* {options.map(option, index) => } */}
                                
                                {options.map((option, index) => <li style={li}>{option}</li>)}
                            <br/>
                        </ul>
                </div>
                <div>
                    <button style={mainBtn} onClick={()=> {
                        this.props.getRandomValue()
                        console.log('Button CLicked')
                    }}>
                        <i className="fas fa-redo"></i>Check Again?</button>
                    <button style={buttonDiv} onClick={back}> Ask Another Random Question<i style={icon} className="fas fa-arrow-alt-circle-right"></i>&nbsp;</button>
                    <button style={buttonDiv} onClick={this.handleRandomAns}>Get Another Random Answer<i style={icon} className="fas fa-arrow-alt-circle-right"></i>&nbsp;</button>
                </div>
                <div>
                    this is where the quetion popularity will show
                </div>
            </div>
        )
        
    }
    
}

export default Decision
