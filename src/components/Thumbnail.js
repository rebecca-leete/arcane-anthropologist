import React from "react"
import thumbnailStyles from "../styles/thumbnailStyles.module.css"


export default props => {
  return (
      <div className={thumbnailStyles.container}>
        <div className={thumbnailStyles.content}>
          <div>
            <img className={thumbnailStyles.image} src={props.ImgSrc} alt={props.ImgAlt}></img>
            <h2>{props.Title}</h2>
            <p>{props.Text}</p>
          </div>
        </div>
    </div>
  )
}