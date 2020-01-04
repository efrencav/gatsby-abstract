import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

class packaging extends Component {
  render() {
    return (
      <Layout>
        <div>
          hello from packaging<Link to="/">Home</Link>
        </div>
      </Layout>
    )
  }
}

export default packaging
