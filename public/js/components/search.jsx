import React, {Component} from 'react'
import appDispatcher from '../dispatchers/appDispatcher.js'
import LocationStore from '../stores/locationStore.js'
import Constants from "../constants/constants.js"
var Feed = require('./feed.jsx')

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      action: "search",
      location: "",
      results: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {

    LocationStore.on("update", this.handleUpdate)

  }

  handleUpdate(result) {
    var result = LocationStore.getLocation();
    console.log("Handling update")
    this.setState({
        results: result
      })
    console.log(this.state.results)
  }

  handleClick() {
    console.log("handling click")
    appDispatcher.dispatch(this.state)
  }

  handleFieldChange(event) {
    this.setState({
        location: event.target.value
    });

  }

  render() {

    return (
      <div>

        <form method="post">
          <input type="text" onChange={this.handleFieldChange.bind(this)}/>
          <input type="button" value="Lunchify" onClick={this.handleClick.bind(this)}/>
        </form>

      <Feed resturants={this.state.results} />
      </div>



    );
  }
}

export default Search;
