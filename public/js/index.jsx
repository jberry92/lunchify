import Greeting from "./components/layout.jsx"
import Search from "./components/search.jsx"
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
<div>
  <Greeting />
  <Search />
</div>,
  document.getElementById('container')
)
