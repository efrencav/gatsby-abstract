import React from "react"
import { Link } from "gatsby"
import Title from "./serviceTitle"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

export const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our services" subtitle="" />
      <span className={styles.hr_long}></span>
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <article key={index} className={styles.service}>
              <div className={styles.services__wrapper}>
                <div className={styles.service__wrapper_bordered}>
                  <div className={styles.service__list}>
                    <Link to={item.url} className={styles.service__item}>
                      <h4 className={styles.service__item_title}>{item.title}</h4>
                      <p className={styles.service__item_text}>{item.text}</p>
                      <span>{item.icon}</span><br />
                      <span className={styles.service__more}>more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
