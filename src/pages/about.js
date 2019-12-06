import React from "react"
import Header from "../components/Header"
import FullWidthImage from "../components/containers/FullWidthImage"


export default () => {
  return (
    <div style={{backgroundColor:'#EFC83B', height:'500px'}}>
      <Header />
      <FullWidthImage ImgSrc="/images/charlie.jpg"
        Text="And thus we find ourselves in the midst of the end of a very ancient one who is to be that which is neither spoken nor said, and can be done." 
      />
      {/* <div id="me-img">
        <img style={{height:'300px'}} alt="It's me!" src="/images/charlie.jpg"/></div> */}
    </div>
  )
}