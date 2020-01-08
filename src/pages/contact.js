import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import Contact from "../components/Contact"

export default function contact() {
  return (
    <Layout>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Message
        <input type="text" name="message" />
      </label>
  </form>
    </Layout>
  )
}
