const contentNode = document.getElementById('contents');

class Hello extends React.Component {
  render() {
    return (
      <div>Hello World URL Shortener</div>
    )
  }
}
ReactDOM.render(<Hello />, contentNode)
