import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"


export default () => (
  <div>
    <Layout>
      <SimpleHero>
        <Banner
          title="We design thoughtful digital experiences & beautiful brand aesthetics"
          info=""
        >
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  </div>
)

// <Link to="/tours" className="btn-white">
// explore tours
// </Link>