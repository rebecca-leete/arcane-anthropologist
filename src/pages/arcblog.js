import React from "react"
import Header from "../components/Header"
import FullWidthYellow from "../components/containers/FullWidthYellow"
import ContactCTA from "../components/ContactCTA"
import { Link } from "gatsby"

export default () => {
  return (
    <div style={{backgroundColor:'#7C627C', height:'500px'}}>
      <Header />
      <div class="container">
        <FullWidthYellow Text="Come wander with meeee"/>
      </div>
      <div class="c-feature">
        <Link to="/blogpost" class="c-feature-content">Sample blog post here</Link>
      </div>
      <ContactCTA />
    </div>
  )
}