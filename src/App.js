import React from 'react';


class App extends React.Component {
  render(){
    return (
      <Parent>
      <div className="childA"></div>
      <div className="childB"></div>
      </Parent>
    )
  }
}
//iterate over children of components

class Parent extends React.Component {
  render() {
    let items = React.Children.map(this.props.children, child => child)
//OR
    //React.Children.toArray(this.props.children)
//OR
    //React.Children.forEach(this.props.children, child => child)
//OR
    //let items = React.Children.only(this.props.children)
    console.log(items)
    return null

  }
}

export default App
