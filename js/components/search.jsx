import React, {Component} from 'react'
import appDispatcher from '../dispatchers/appDispatcher.js'
import LocationStore from '../stores/locationStore.js'
import Constants from "../constants/constants.js"

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      action: "search",
      location: ""

    }
  }

  componentDidMount() {
    LocationStore.on("update", this.handleUpdate)
  }

  handleUpdate() {
    const longitude = LocationStore.getLocation();
    console.log(longitude);
  }

  handleClick() {

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

      </div>

    );
  }
}

export default Search;
