import React from "react"
import Menu from "../components/Menu"
import { Link } from "gatsby"

/* CSS NEEDS REFACTORING */

export default () => {
  return (
    <div class="grid" id="header">
      <div>
        <img id="header-img" src="images/aa-logo.png" alt="logo"></img>
      </div>
      <Link to="/" class="title" id="header-title">
        <p>The</p>
        <div id="title"> Arcane Anthropologist</div>
      </Link>
      <div id="header-menu">
      <Menu />
      </div>
    </div>
  )
}