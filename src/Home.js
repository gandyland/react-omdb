// // Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import Search from "./Search"

class Hello extends Component {
  render () {
    return (
      <div>
        <h1>OMDB React</h1>
        <Search />
      </div>
    );
  }
}

export default Hello
