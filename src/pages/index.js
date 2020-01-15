import React from "react"
import Header from "../components/Header"
import FullWidthImage from "../components/containers/FullWidthImage"
import ContactCTA from "../components/ContactCTA"
import FeatureTextImage from "../components/containers/FeatureTextImage"
import ThumbnailRow from "../components/containers/ThumbnailRow"


export default () => 
<div>
  <Header />
  
    <FullWidthImage ImgSrc="/images/cosmic-wolf.jpg"
        Text="And thus we find ourselves in the midst of the end of a very ancient one who is to be that which is neither spoken nor said, and can be done." 
      />
  <div style={{backgroundColor:'#FCF6E2'}}>
    <ThumbnailRow />
  </div>
  
  <FeatureTextImage 
    imgSrc="/images/artemisme.jpg" imgAlt="artemisme"
    title="About the Me"
    text="This is some stuff about me and why I’m really cool and interesting and why you want to know more about me… For example I’m a badass forest fey and an alright stoner"
    button="Oooh how intriguing!"
  />
  <ContactCTA />
  <div style={{height:'100px', backgroundColor:'#72845E'}}>
    <h3 style={{textAlign:'center', paddingTop:'20px', margin:'0'}}>Footerrrrrrrrrrr</h3>
  </div>
</div>