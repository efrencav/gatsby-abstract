import React from "react"
// import { Link } from "gatsby"
import Layout from "../../components/Layout"
import AboutHero from "../../components/Services/serviceHero"
import Banner from "../../components/servicesBanner"
import Services from "../../components/Home/Services"



export default () => (
  <div>
    <Layout>
      <AboutHero>
        <Banner
          title="Growing our customers brands with our supportive creative services."
          info=""
        >
        </Banner>
      </AboutHero>
      <Services />
    </Layout>
  </div>
)

