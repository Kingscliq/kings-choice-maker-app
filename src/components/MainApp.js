import React, { Component } from 'react';
import Navbar from './Navbar';
import Decision from './Decision';
import Questions from './Questions';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      questions: '',
      options: ['', ''],
      questionsPop: [],
    };
  }

  // Process-Form
  mainProcess = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      questions: this.state.questions,
    });

    this.addQuestion();
  };

  // Go back to Previous Main Page
  back = () => {
    const { step, questions, options } = this.state;
    this.setState({
      step: step - 1,
      questions: '',
      options: ['', '', ''],

      questionsPop: this.state.questionsPop,
    });
  };

  handleQuestionChange = (e, index) => {
    this.setState({
      questions: e.target.value,
    });
  };

  handleOptionChange = (e, index) => {
    this.state.options[index] = e.target.value;
    this.setState({
      options: this.state.options,
    });
  };

  //Method to add new Item to the questions Array
  addOption = e => {
    this.setState({
      options: [...this.state.options, ''],
    });
  };
  addQuestion = e => {
    const { questions, questionsPop } = this.state;

    this.setState(questionsPop => ({
      questionsPop: [...this.state.questionsPop, questions],
    }));
  };
  ///Function to get random number

  // }
  getRandomValue = () => {
    let options = this.state.options;
    let randomValue = options[Math.floor(Math.random() * options.length)];

    return randomValue;
  };

  // Function to Remove Input Field
  removeInputField = index => {
    this.state.options.splice(index, 1);
    this.setState({
      options: this.state.options,
    });
  };

  render() {
    const { step, questions, options, questionsPop } = this.state;
    const randAns = this.getRandomValue(options);
    //evalute what component is to be rendered base on the steps state
    const componentEvaluator = () => {
      switch (step) {
        case 2:
          return (
            <Decision
              mainProcess={this.mainProcess}
              questions={questions}
              options={options}
              back={this.back}
              handleQuestionChange={this.handleQuestionChange}
              handleOptionChange={this.handleOptionChange}
              getRandomValue={this.getRandomValue.bind(this)}
              randAns={randAns}
              removeInputField={this.removeInputField}
              questionsPop={questionsPop}
              addQuestion={this.addQuestion}
            />
          );
        default:
          return (
            <Questions
              mainProcess={this.mainProcess}
              handleQuestionChange={this.handleQuestionChange}
              handleOptionChange={this.handleOptionChange}
              questions={questions}
              options={options}
              getRandomValue={this.getRandomValue()}
              addOption={this.addOption}
              removeInputField={this.removeInputField}
              addQuestion={this.addQuestion}
              questionsPop={questionsPop}
            />
          );
      }
    };
    return (
      <>
        <Navbar />
        {componentEvaluator()}
      </>
    );
  }
}

export default MainApp;
