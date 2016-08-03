// // Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import SearchContainer from "./SearchContainer"

class Hello extends Component {
  render () {
    return (
      <div>
        <h1>OMDB React</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Hello
