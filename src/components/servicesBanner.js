import React from "react"
import styles from "../css/banner.module.css"
// import Underline from "../images/underline.svg"


export const aboutBanner = ({ title, info, children }) => {

  return (
    <div className={styles.banner}>
      <span className={styles.zoom_counter__subtitle}>What we do</span>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default aboutBanner;
