import React from "react"

import featureTextImageStyles from "../../styles/featureTextImageStyles.module.css"


export default props => {
  return (
    <div className={featureTextImageStyles.container}>
      <img className={featureTextImageStyles.image} src={props.imgSrc} alt={props.imgAlt}/>
      <div className={featureTextImageStyles.content}>
        <div className={featureTextImageStyles.title}>{props.title}</div>
        <div className={featureTextImageStyles.text}>{props.text}

        </div>
        <button className={featureTextImageStyles.button}>{props.button}</button>
      </div>
    </div>
  )
}
