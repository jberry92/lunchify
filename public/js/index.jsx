import Layout from "./components/layout.jsx"
import Home from "./components/home.jsx"
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
<div>
  <Layout/>
  <Home/>
</div>,
  document.getElementById('container')
)
