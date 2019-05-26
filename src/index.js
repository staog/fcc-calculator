import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const buttons = [
  {
    id:'par1',
    className: 'box gray click',
    val: '('
  },
  {
    id:'par2',
    className: 'box gray click',
    val: ')'
  },
  {
    id:'clear',
    className: 'box gray ac',
    val: 'AC'
  },
  {
    id:'delete',
    className: 'box gray ce',
    val: 'CE'
  },
  {
    id:'seven',
    className: 'box click',
    val: '7'
  },
  {
    id:'eight',
    className: 'box click',
    val: '8'
  },
  {
    id:'nine',
    className: 'box click',
    val: '9'
  },
  {
    id:'divide',
    className: 'box gray click',
    val: '/'
  },
  {
    id:'four',
    className: 'box click',
    val: '4'
  },
  {
    id:'five',
    className: 'box click',
    val: '5'
  },
  {
    id:'six',
    className: 'box click',
    val: '6'
  },
  {
    id:'multiply',
    className: 'box gray click',
    val: '*'
  },
  {
    id:'one',
    className: 'box click',
    val: '1'
  },
  {
    id:'two',
    className: 'box click',
    val: '2'
  },
  {
    id:'three',
    className: 'box click',
    val: '3'
  },
  {
    id:'subtract',
    className: 'box gray click',
    val: '-'
  },
  {
    id:'zero',
    className: 'box click',
    val: '0'
  },
  {
    id:'decimal',
    className: 'box click',
    val: '.'
  },
  {
   id:'equals',
   className: 'box blue',
   val: '='
  },
  {
   id:'add',
   className: 'box gray click',
   val: '+'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "0",
    }
    // this.inputMade = this.inputMade.bind(this)
    // this.showResult = this.showResult.bind(this)
    // this.clearAll = this.clearAll.bind(this)
    // this.removeLast = this.removeLast.bind(this)
  }

  // inputMade = e => {
  //   for (var i = 0; i < buttons.length; i++) {
  //     if (e.target.id = buttons[i].id) {
  //       let button = document.getElementById(buttons[i]
  //     }
  //   }
  // }

  render() {
    return (
      <div id="calculator">
        <div id="topDisplay"></div>
        <div id="mainDisplay"></div>
        <div id="container">
          {buttons.map((item) => {
            return <button id={item.id} className={item.className}>{item.val}</button>
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
