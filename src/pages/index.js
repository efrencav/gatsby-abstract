import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import Banner from "../components/Banner"
import OtherBanner from "../components/OtherBanner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Section from "../components/ImageSection"
import Slider from "../components/SliderSection"


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
      <Section>
        <About />
      </Section>
      <Slider>
        <OtherBanner
          title="Muscle Rehab"
          info="Findout more about this project." />
        {/* <Link to="/">Click here</Link> */}
      </Slider>
      <Services />
    </Layout>
  </div>
)
