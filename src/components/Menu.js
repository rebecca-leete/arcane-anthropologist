import React from "react"
import MenuItem from "./MenuItem"
import { Link } from "gatsby"

export default () => {
  return (
    <div style={{display:'flex', padding:'15px'}}>
      <Link to="/" className="menu-item"><MenuItem MenuText="Home" /></Link>
      <Link to="/about" className="menu-item"><MenuItem MenuText="About" /></Link>
      <Link to="/anthblog" className="menu-item"><MenuItem MenuText="Anthro" /></Link>
      <Link to="/arcblog" className="menu-item"><MenuItem MenuText="Arcane" /></Link>
    </div>
  )
}