import React from "react"
import Header from "../components/Header"
import FullWidthImage from "../components/containers/FullWidthImage"
import ContactCTA from "../components/ContactCTA"


export default () => {
  return (
    <div style={{height:'500px'}}>
      <Header />
      <FullWidthImage ImgSrc="/images/AK5.jpg"
        Text="And thus we find ourselves in the midst of the end of a very ancient one who is to be that which is neither spoken nor said, and can be done." 
      />
      <ContactCTA />
    </div>
  )
}