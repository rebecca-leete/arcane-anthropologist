import React from "react"
import { Link } from "gatsby"

import containerYellowStyles from "../../styles/containerYellowStyles.module.css"

export default props => {
  return (
    <div className={containerYellowStyles.container}>
      <div className={containerYellowStyles.content}>
        <Link to={props.Parent}>
        {props.Category}
        </Link> > {props.Title}
      </div>
    </div>
  )
}