import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

class tours extends Component {
  render() {
    return (
      <Layout>
        <div>
          hello from class<Link to="/">Home</Link>
        </div>
      </Layout>
    )
  }
}

export default tours
