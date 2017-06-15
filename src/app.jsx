import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

const contentNode = document.getElementById('contents');
import Test from './Test.jsx';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello World URL Shortener
      <Test />
      </div>
    )
  }
}


ReactDOM.render(<Hello />, contentNode)
