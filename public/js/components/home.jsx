import React, {Component} from 'react'
import appDispatcher from '../dispatchers/appDispatcher.js'
import LocationStore from '../stores/locationStore.js'
import Constants from "../constants/constants.js"
import {Link} from "react-router";
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
    this.setState({results: result})
    console.log(this.state.results)
  }

  handleClick() {
    console.log("handling click")
    appDispatcher.dispatch(this.state)
  }

  handleFieldChange(event) {
    this.setState({location: event.target.value});

  }

  render() {

    return (
      <div className="container">

        <div className="row search">
          <form method="post">
            <row className="col l3" />
            <input type="text" onChange={this.handleFieldChange.bind(this)} placeholder="Enter your postcode.." className="col s8 l4"/>
            <input type="button" className="col s2 l2 waves-effect waves-light btn " value="Lunchify" onClick={this.handleClick.bind(this)}/>
          </form>
        </div>

        <Feed resturants={this.state.results}/>
      </div>

    );
  }
}

export default Search;
