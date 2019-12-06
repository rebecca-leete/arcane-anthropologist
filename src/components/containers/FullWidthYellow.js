import React from "react"
import containerYellowStyles from "../../styles/containerYellowStyles.module.css"

export default props => {
  return (
    <div className={containerYellowStyles.container}>
      <div className={containerYellowStyles.content}>{props.Text}</div>
    </div>
  )
}