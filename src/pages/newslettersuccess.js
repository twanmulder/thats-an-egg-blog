import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"

function NewsletterSuccess() {
  return (
    <Layout hideFooter="true">
      <h1>You're in!</h1>
      <p>Thank you for subscribing to "That's an Egg"s updates.</p>

      <Link to="/">
        <Button>Read some articles</Button>
      </Link>
    </Layout>
  )
}

export default NewsletterSuccess
