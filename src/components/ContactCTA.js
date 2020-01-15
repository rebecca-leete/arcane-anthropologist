import React from "react"
import contactCTAStyles from "../styles/contactCTAStyles.module.css"

export default () => {
  return (
    <div className={contactCTAStyles.container}>
      <div className={contactCTAStyles.containerFocal}>
        <div className={contactCTAStyles.content}>Have a question? A suggestion? A poem? Get in touch, I would love to hear any and everything from you!</div>
        <button className={contactCTAStyles.button}>What's up!</button>
      </div>
    </div>
  )
}