import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function about() {
  return (
    <Layout>
      <div>
        hello from about us
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
