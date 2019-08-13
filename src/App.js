import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update( e ) {
    this.setState({txt: e.target.value})
  }
  render() { //returns DOM reference
    return (
    <div>
    <input type="text"
    onChange = {this.update.bind(this)}/>
    <h1>{this.state.txt} - {this.state.cat}</h1>
    </div>
  )
}
}

App.propTypes = { //defining properties
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App
