import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//reference a node or instance of a component

class App extends React.Component {
  constructor() {
    super(); //gets context
    this.state = {value: 0}
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() { //right before fired into DOm
    console.log('componentWillMount')
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }

  componentDidMount() { //component is mounted to dom
      console.log('componentDidMount')
  }


  componentWillUnmount() { //component is mounted to dom
        console.log('componentWillUnmount')
      }
    }

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}


export default Wrapper
