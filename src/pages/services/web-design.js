import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

class web extends Component {
  render() {
    return (
      <Layout>
        <div>
          hello from web<Link to="/">Home</Link>
        </div>
      </Layout>
    )
  }
}

export default web
