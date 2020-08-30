import React, { Component } from 'react'
import './myStyle.css'

export class Questions extends Component {
    render() {
            const {handleQuestionChange, options, questions, handleOptionChange,mainProcess,addOption, removeInputField } = this.props;
        return (
            <div className ="myform">
                        
                    <form  onSubmit={mainProcess}>
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
                                { options.map((option, index) => {
                                    return(
                                        <>
                                        <input 
                                            type="text" 
                                            className=" form-control" 
                                            placeholder={`${index + 1} Enter option `}
                                            onChange={(e)=>handleOptionChange(e, index)}
                                            value ={option}

                        
                                    />
                                    <button className='btn' onClick={(e)=> {
                                            e.preventDefault()
                                            removeInputField(e)
                                    }}>x</button>
                                    </>
                                    )
            
                                })
                            }
                                {/* <input type="text" className="form-control" placeholder="A:" onChange={handleChange('option')}/>
                                <input type="text" className="form-control" placeholder="B:" onChange={handleChange('option')}/>
                                <input type="text" className="form-control" placeholder="C:" onChange={handleChange('option')}/> */}
                        </div>
                        <div className="btn-div">
                            <div>
                                <button className="btn btn-default" type="button" onClick={addOption}><i className="fas fa-plus"></i>Option</button></div>             
                            <div><button className="btn btn-success" type="submit">Answer</button></div>  
                    </div> 
                                     
                    </form>
                         
            </div>
           
        )
    }
}

export default Questions
