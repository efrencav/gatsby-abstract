import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function blog() {
  return (
    <Layout>
      <div>
        hello from blog
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
