import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buttons = [
  {
    id:'delete',
    className: 'box gray',
    name: 'DEL'
  },
  {
    id:'grand',
    className: 'box gray',
    name: 'GT'
  },
  {
    id:'clear',
    className: 'box gray ac',
    name: 'AC'
  },
  {
    id:'divide',
    className: 'box gray',
    name: '/'
  },
  {
    id:'seven',
    className: 'box',
    name: '7',
  },
  {
    id:'eight',
    className: 'box',
    name: '8'
  },
  {
    id:'nine',
    className: 'box',
    name: '9'
  },
  {
    id:'multiply',
    className: 'box gray',
    name: '*'
  },
  {
    id:'four',
    className: 'box',
    name: '4'
  },
  {
    id:'five',
    className: 'box',
    name: '5'
  },
  {
    id:'six',
    className: 'box',
    name: '6'
  },
  {
    id:'subtract',
    className: 'box gray',
    name: '-'
  },
  {
    id:'one',
    className: 'box',
    name: '1'
  },
  {
    id:'two',
    className: 'box',
    name: '2'
  },
  {
    id:'three',
    className: 'box',
    name: '3'
  },
  {
    id:'add',
    className: 'box gray',
    name: '+'
  },
  {
    id:'zero',
    className: 'box',
    name: '0',
  },
  {
    id:'decimal',
    className: 'box',
    name: '.'
  },
  {
    id:'equals',
    className: 'wide blue',
    name: '='
  },

]

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: "0",
      operator: false,
      decimal: false
    }
  }

  handleClick = (e) => {
    let current = this.state.current
    let operator = this.state.operator
    switch (true) {
      case /[/*\-+]/.test(e.target.name):
        if (!this.state.operator) {
          current += e.target.name
          operator = true
          this.setState({decimal: false})
        }
        else {
          const modified = current.slice(0, current.length - 1)
          current = modified
          current += e.target.name
        }
        break
      case /\d/.test(e.target.name):
        if (this.state.current !== "0") {
          current += e.target.name
        }
        else {
          current = e.target.name
        }
        operator = false
        break
      case /\bclear\b/.test(e.target.id):
        current = "0"
        operator = false
        this.setState({decimal: false})
        break
      case /[=]/.test(e.target.name):
        current = eval(current)
        break
      case /\./.test(e.target.name):
        if (!this.state.decimal) {
          current += "."
          this.setState({decimal: true})
        }
        break
      case /\bdelete\b/.test(e.target.id):
        if (current.length > 1) {
          current = current.substring(0, current.length - 1)
        }
        else {
          current = "0"
        }
    }
    this.setState({
      current: current,
      operator: operator
    })
  }

  render() {
    return (
      <div id="calculator">
        <div id="topDisplay"><span>CASIO</span>MJ-120D Plus</div>
        <div id="display">
          <p>{this.state.current}</p>
        </div>
        <div id="container">
          {buttons.map((item, i) => {
            return <button id={item.id} className={item.className} key={i} name={item.name} onClick={this.handleClick}>{item.name}</button>
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
