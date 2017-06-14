const contentNode = document.getElementById('contents');

class Hello extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Hello World URL Shortener'
    );
  }
}
ReactDOM.render(React.createElement(Hello, null), contentNode);