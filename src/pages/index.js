import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

import ArtDirectedFullBackground from '../components/FullBackground'

// const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
//   max-width: 800px;
// `

export default () => (
  <div>
    <Layout>
      <SEO title="Abstract Creative" />
      <ArtDirectedFullBackground>
        <Banner
          title="We design thoughtful digital experiences & beautiful brand aesthetics"
          info=""
        >
        </Banner>
      </ArtDirectedFullBackground>
      <About />
      <Services />
    </Layout>
  </div>
)
