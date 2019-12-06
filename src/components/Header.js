import React from "react"
import Menu from "../components/Menu"

export default () => {
  return (
    <div class="grid" id="header">
      <div>
        <img id="header-img" src="images/aa-logo.png" alt="logo"></img>
      </div>
      <div class="title" id="header-title">
        <p>The</p>
        <h1> Arcane Anthropologist</h1>
      </div>
      <div id="header-menu">
      <Menu />
      </div>
    </div>
  )
}