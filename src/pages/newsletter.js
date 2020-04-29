import React from "react"

import Layout from "../components/layout"
import NewsletterForm from "../components/newsletterform"

function Newsletter() {
  return (
    <Layout hideFooter="true">
      <h1>Newsletter</h1>
      <NewsletterForm />
    </Layout>
  )
}

export default Newsletter
