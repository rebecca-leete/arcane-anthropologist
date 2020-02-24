import React from "react"

import Layout from "../components/Layout"
import FullWidthImage from "../components/containers/FullWidthImage"


export default ({ data }) => {
  return (
    <Layout style={{height:'500px'}}>
      <FullWidthImage ImgSrc="/images/AK5.jpg" ImgAlt="Cosmic Wolf"
        Text="And thus we find ourselves in the midst of the end of a very ancient one who is to be that which is neither spoken nor said, and can be done." 
      />
    </Layout>
  )
}

