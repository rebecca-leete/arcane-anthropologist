import React from "react"
import thumbnailStyles from "../styles/thumbnailStyles.module.css"


export default props => {
  return (
      <div className={thumbnailStyles.container}>
        <div className={thumbnailStyles.content}>
          <div>
            <img className={thumbnailStyles.image} src={props.ImgSrc} alt={props.ImgAlt}></img>
            <div className={thumbnailStyles.title}>{props.Title}</div>
            <p className={thumbnailStyles.text}>{props.Text}</p>
          </div>
        </div>
    </div>
  )
}