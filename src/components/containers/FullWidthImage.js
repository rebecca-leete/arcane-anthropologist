import React from "react"
import Img from "gatsby-image"

import fullWidthImageStyles from "../../styles/fullWidthImageStyles.module.css"

export default props => {
  return (
    <div className={fullWidthImageStyles.container}> 
      <img className={fullWidthImageStyles.image} src={props.ImgSrc} alt={props.ImgAlt}></img>
      <div className={fullWidthImageStyles.content}>{props.Text}</div>
    </div>
  )
}