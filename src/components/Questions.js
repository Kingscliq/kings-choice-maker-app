import React, { Component } from 'react'
import './myStyle.css'

export class Questions extends Component {
    render() {
            const {handleQuestionChange, options, questions, handleOptionChange} = this.props
        return (
            <div>
                <label for="questions">Question</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Enter a Question" 
                    onChange={(e)=>handleQuestionChange(e)
                    
                }
                value={questions}
                />
                <br/>
                <label htmlFor="options">Options</label>
                    { options.map((option, index)=> {
                        return(
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder={`${index + 1} Enter option `}
                                onChange={(e)=>handleOptionChange(e, index)}
                                value ={option}
                        
                        />
                        )
            
                    })
                }
                    {/* <input type="text" className="form-control" placeholder="A:" onChange={handleChange('option')}/>
                    <input type="text" className="form-control" placeholder="B:" onChange={handleChange('option')}/>
                    <input type="text" className="form-control" placeholder="C:" onChange={handleChange('option')}/> */}
            </div>
        )
    }
}

export default Questions
