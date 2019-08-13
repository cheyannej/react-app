import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
    }
  }
  update( e ) {
    this.setState({txt: e.target.value})
  }
  render() { //returns DOM reference
    return (
    <div>
    <h1>{this.state.txt}</h1>
    //child component updating parent component
    <Widget update={this.update.bind(this)} />
    <Widget update={this.update.bind(this)} />
    <Widget update={this.update.bind(this)} />
    </div>
  )
}
}

const Widget = (props) =>
<input type="text" onChange={props.update}/>

export default App
