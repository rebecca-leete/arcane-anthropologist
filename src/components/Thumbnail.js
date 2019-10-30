import React from "react"

export default props => {
  return (
      <div class="c-thumbnail">
        <div class="c-thumbnail-content">
          <div>
            <img class="c-thumbnail-img" src={props.ImgSrc} alt={props.ImgAlt}></img>
            <h2>{props.Title}</h2>
            <p>{props.Text}</p>
          </div>
        </div>
    </div>
  )
}