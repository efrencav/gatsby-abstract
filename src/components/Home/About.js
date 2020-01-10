import React from "react"
// import Title from "./Title"
import styles from "../../css/about.module.css"
import img from "../../images/zoom-count-bg.jpg"

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainter}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <span className={styles.zoom_counter__subtitle_primary}>Abstract</span>
          <h2>Crafting beautiful experiences</h2>
          <span className={styles.hr_short}></span>
          <p>
            We are idea-driven, working with a strong focus on design and user experience. We love crafting beautiful, smart and inspired work that focuses on a business’ goals and our customers. We do this across multiple touch points to help organizations achieve their goals.
          </p>
          <button type="button" className="btn-primary">
            About Us
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
