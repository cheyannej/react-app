import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return <Title text="The Text"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>


Title.propTypes = {
  text(props, propName, component) {
    //validation
    if(!(propName in props)) { //propName not provided
      return new Error('missing ${propName}')
    }
    if(props[propName].length < 6) {
      return new Error ('${propName} was too short')
    }
  }
}

export default App
