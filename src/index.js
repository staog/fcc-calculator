import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: "0"
    }
  }

  handleClick = (buttonName) => {
    let currentNumber = this.state.currentNumber
    console.log(buttonName);
    switch (true) {
      case buttonName === "0" ||
           buttonName === "1" ||
           buttonName === "2" ||
           buttonName === "3" ||
           buttonName === "4" ||
           buttonName === "5" ||
           buttonName === "6" ||
           buttonName === "7" ||
           buttonName === "8" ||
           buttonName === "9" :
      if (this.state.currentNumber !== "0") {
        currentNumber += buttonName
      }
      else {
        currentNumber = buttonName
      }
      this.setState({currentNumber})
      break
    }
  }

  render() {
    return(
      <div id="calculator">
        <div id="topDisplay"><span>CASIO</span>MJ-120D Plus</div>
        <Display currentNumber={this.state.currentNumber} />
        <div id="container">
          <Button id="par1" name="(" handleClick={this.handleClick} />
          <Button id="par2" name=")" handleClick={this.handleClick} />
          <Button id="clear" name="AC" handleClick={this.handleClick} />
          <Button id="clear" name="C" handleClick={this.handleClick} />
          <Button id="seven" name="7" handleClick={this.handleClick} />
          <Button id="eight" name="8" handleClick={this.handleClick} />
          <Button id="nine" name="9" handleClick={this.handleClick} />
          <Button id="Buttonide" name="/" handleClick={this.handleClick} />
          <Button id="four" name="4" handleClick={this.handleClick} />
          <Button id="five" name="5" handleClick={this.handleClick} />
          <Button id="six" name="6" handleClick={this.handleClick} />
          <Button id="multiply" name="*" handleClick={this.handleClick} />
          <Button id="one" name="1" handleClick={this.handleClick} />
          <Button id="two" name="2" handleClick={this.handleClick} />
          <Button id="three" name="3" handleClick={this.handleClick} />
          <Button id="subtract" name="-" handleClick={this.handleClick} />
          <Button id="zero" name="0" handleClick={this.handleClick} />
          <Button id="decimal" name="." handleClick={this.handleClick} />
          <Button id="equals" name="=" handleClick={this.handleClick} />
          <Button id="add" name="+" handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

class Display extends React.Component {
  render() {
    return(
      <div id="display">
        {this.props.currentNumber}
      </div>
    )
  }
}

class Button extends React.Component {
  runHandleClick = () => {
    this.props.handleClick(this.props.name)
  }
  render() {
    return(
      <div id={this.props.id} className="box click" onClick={this.props.runHandleClick}>{this.props.name}</div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
