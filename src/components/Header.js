import React from "react"
import { Link } from "gatsby"

import Menu from "../components/Menu"

/* CSS NEEDS REFACTORING */

export default () => {
  return (
    <div className="grid" id="header">
      <div>
        <img id="header-img" src="images/aa-logo.png" alt="logo"></img>
      </div>
      <Link to="/" className="title" id="header-title">
        <p>The</p>
        <div id="title"> Arcane Anthropologist</div>
      </Link>
      <div id="header-menu">
      <Menu />
      </div>
    </div>
  )
}