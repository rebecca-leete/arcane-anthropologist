import React from "react"
import Menu from "../components/menu"

export default () => {
  return (
    <div style={{backgroundColor:'#7C627C', height:'500px'}}>
      <div id="title">
        <h1 style={{color:'#FDFAED'}}>Arcane Blog</h1>
      </div>
      <Menu />
    </div>
  )
}