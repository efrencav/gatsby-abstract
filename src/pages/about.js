import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ChooseUs from "../components/AboutUs/featuredSection"
import DescriptionSection from '../components/AboutUs/descptionSection'
import AboutHero from '../components/AboutUs/aboutHero'
// import FaqSsection from "../components/AboutUs/FaqSection"

export default function about() {
  return (
    <Layout>
      <AboutHero>
        <div>
          hello from about us
        <Link to="/">Home</Link>
        </div>
      </AboutHero>
      <DescriptionSection />
      <ChooseUs />
    </Layout>
  )
}
