import React, {Component} from "react"

class Search extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     query: ''
  //   }
  // }
  // handleSearchInput (e) {
  //   this.setState({
  //     query: e.target.value
  //   })
  // }
  // submitQuery(evt){
  //   evt.preventDefault();
  //   console.log(this.state.query)
  // }

  render(){
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => handleSubmitQuery(evt)}>
          <input
            onChange={(evt) => handleSearchInput(evt)}
            value={query}
            type="text"
            placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
