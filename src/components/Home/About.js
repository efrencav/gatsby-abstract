import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../../css/about.module.css"
// import img from "../../images/zoom-count-bg.jpg"

export const About = () => {

  const data = useStaticQuery(graphql`
  query {
    abstract: file(relativePath:{eq: "zoom-image-head-bg-white.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
    zoomCount: file(relativePath:{eq: "zoom-count-bg.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  return (
    <section className={styles.about}>

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainter}>
            <Img fluid={data.zoomCount.childImageSharp.fluid}/>
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
