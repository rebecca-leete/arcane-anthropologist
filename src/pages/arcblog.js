import React from "react"
import Header from "../components/Header"
import FullWidthYellow from "../components/containers/FullWidthYellow"

export default () => {
  return (
    <div style={{backgroundColor:'#7C627C', height:'500px'}}>
      <Header />
      <div class="container">
        <FullWidthYellow Text="Come wander with meeee"/>
      </div>
    </div>
  )
}