import {Link} from "react-router";
import React, { Component } from 'react'

class Layout extends Component {
  render () {
    return(
      <nav>

        <Link to='/'><h1 className="center-align title">Lunchify</h1></Link>

      </nav>

    );
  }
}


export default Layout;
