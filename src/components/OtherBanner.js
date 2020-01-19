import React from "react"
import styles from "../css/banner.module.css"


export const OtherBanner = ({ title, info, children }) => {

  return (
    <div className={styles.otherBanner}>
      <span className={styles.featured_counter__subtitle}>Featured project</span>
      <h3>{title}</h3>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default OtherBanner;
