import Greeting from "./components/layout.jsx"
import Search from "./components/search.jsx"
import React, { Component } from 'react'

ReactDOM.render(
<div>
  <Greeting />
  <Search />
</div>,
  document.getElementById('container')
)
