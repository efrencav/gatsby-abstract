import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

class graphic extends Component {
  render() {
    return (
      <Layout>
        <div>
          hello from graphic design<Link to="/">Home</Link>
        </div>
      </Layout>
    )
  }
}

export default graphic
