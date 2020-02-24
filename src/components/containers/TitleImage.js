import React from "react"
import titleImageStyles from "../../styles/titleImageStyles.module.css"

export default props => {
  return (
    <div className={titleImageStyles.container}> 
      <img className={titleImageStyles.image} src={props.ImgSrc} alt={props.ImgAlt}></img>
      <div className={titleImageStyles.content}>{props.Text}</div>
    </div>
  )
}