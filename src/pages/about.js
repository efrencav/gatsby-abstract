import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ChooseUs from "../components/AboutUs/featuredSection"
import DescriptionSection from '../components/AboutUs/descptionSection'
import Banner from "../components/AboutUs/aboutBanner"
import AboutHero from '../components/AboutUs/aboutHero'
// import FaqSsection from "../components/AboutUs/FaqSection"

export default function about() {
  return (
    <Layout>
      <AboutHero>
        <Banner
          title="A digital studio crafting beautiful experiences and premium designs."
          info=""
        >
        </Banner>
      </AboutHero>
      <DescriptionSection />
      <ChooseUs />
    </Layout>
  )
}
