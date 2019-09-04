import React from "react"
import MenuItem from "./menuItem"
import { Link } from "gatsby"

export default () => {
  return (
    <div style={{display:'flex', padding:'15px'}}>
      <Link to="/"><MenuItem MenuText="HOME" /></Link>
      <Link to="/about"><MenuItem MenuText="ABOUT" /></Link>
      <Link to="/anthblog"><MenuItem MenuText="ANTHRO BLOG" /></Link>
      <Link to="/arcblog"><MenuItem MenuText="ARCANE BLOG" /></Link>
    </div>
  )
}