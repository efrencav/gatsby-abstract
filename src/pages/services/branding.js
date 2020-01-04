import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

class branding extends Component {
  render() {
    return (
      <Layout>
        <div>
          hello from branding<Link to="/">Home</Link>
        </div>
      </Layout>
    )
  }
}

export default branding
