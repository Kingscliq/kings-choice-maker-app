import React, { Component } from 'react';
import './myStyle.css';

export class Questions extends Component {
  render() {
    const {
      handleQuestionChange,
      options,
      questions,
      handleOptionChange,
      mainProcess,
      addOption,
      removeInputField,
      addQuestion,
    } = this.props;
    return (
      <div className="myform">
        <form onSubmit={mainProcess}>
          <div>
            <label for="questions">Question</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter a Question"
              onChange={e => handleQuestionChange(e)}
              value={questions}
            />
            <hr />
            <br />
            {this.renderH1()}
            <label htmlFor="options">Options</label>
            {options.map((option, index) => {
              return (
                <div className="input">
                  <div>
                    <input
                      type="text"
                      className=" form-control"
                      placeholder={`${index + 1} Enter option `}
                      onChange={e => handleOptionChange(e, index)}
                      value={option}
                    />
                  </div>
                  <div>
                    <button
                      className="btn-danger"
                      onClick={e => {
                        e.preventDefault();
                        removeInputField();
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-div">
            <div>
              <button
                className="btn btn-default"
                type="button"
                onClick={() => {
                  addOption();
                }}
              >
                <i className="fas fa-plus"></i>Add Option
              </button>
            </div>
            <div>
              <button className="btn btn-success" type="submit">
                Answer
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Questions;
