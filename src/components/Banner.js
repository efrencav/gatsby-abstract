import React from "react"
import styles from "../css/banner.module.css"
import Underline from "../images/underline.svg"


export const Banner = ({ title, info, children }) => {

  const today = new Date();
  const hourNow = today.getHours();
  let greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }


  return (
    <div className={styles.banner}>
      <span className={styles.zoom_counter__subtitle}>{greeting}</span>
      <h1>{title}</h1>
      <img src={Underline} className={styles.underline} />
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner;
