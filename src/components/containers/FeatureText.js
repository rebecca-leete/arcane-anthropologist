import React from "react"
import FeatureTextStyles from "../../styles/featureTextStyles.module.css"

export default props => {
  return (
    <div className={FeatureTextStyles.container}>
      <div className={FeatureTextStyles.title}>{props.Title}</div>
      <div className={FeatureTextStyles.content}>{props.Content}</div>
    </div>
  )
} 