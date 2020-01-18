import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/symbol.png"

import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="abstract logo" className={styles.paddingBottom} />
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank" rel="noopener roreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Abstract Creative, LLC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
