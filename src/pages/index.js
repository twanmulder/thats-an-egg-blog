import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Twan Mulder Personal Website"

    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2019, 3, 1)
    const secondDate = new Date()
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`developer`, `portfolio`, `javascript`, `react`]}
        />
        <h1>
          Hey there, I'm Twan{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          <strong>
            I'm a Creative Developer and Technical CRO Consultant from the
            Netherlands.
          </strong>
          <br />
          Currently, I've been employed at{" "}
          <a href="www.stormdigital.nl" target="_blank">
            Storm Digital
          </a>{" "}
          for {diffDays} days.
        </p>
        <p></p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
