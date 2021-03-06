import React from "react"
import Layout from "../components/Layout"
import FullWidthImage from "../components/containers/FullWidthImage"
import FeatureTextImage from "../components/containers/FeatureTextImage"
import ThumbnailRow from "../components/containers/ThumbnailRow"


export default () => 
<Layout>
  
    <FullWidthImage ImgSrc="/images/cosmic-wolf.jpg" ImgAlt="Cosmic Wolf"
        Text="And thus we find ourselves in the midst of the end of a very ancient one who is to be that which is neither spoken nor said, and can be done." 
      />
  <div style={{backgroundColor:'#FCF6E2'}}>
  <h1 style={{textAlign:'center'}}>Stuff that's interesting to reeead:</h1>
    <ThumbnailRow />
  </div>
  
  <FeatureTextImage 
    imgSrc="/images/artemisme.jpg" imgAlt="artemisme"
    title="About the Me"
    text="This is some stuff about me and why I’m really cool and interesting and why you want to know more about me… For example I’m a badass forest fey and an alright stoner"
    button="Oooh how intriguing!"
  />
</Layout>

//explore elements of childImageSharp
//trial gatsbyimg with fullwidthimg component
//transfer image directory completely to src
//restyle thumbnailrow under 960px