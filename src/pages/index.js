import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2019, 3, 1)
    const secondDate = new Date()
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]}
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
        <p>
          These days, web-development can be a very daunting task to learn for
          the developer who's just starting out. With things like JavaScript
          frameworks, server-side rendering, and REST/CRUD API's, it doesn't get
          a lot simpler either.
        </p>
        <p>
          <strong>However, it doesn't have to be this way!</strong> I love
          writing about making your (developer) life easier. From basic HTML &
          CSS, to more complicated subjects regarding web-development, I write
          about all of them.
        </p>
        <p>
          You might know the expression "That's a piece of cake". In Dutch, we
          have a saying that goes likewise. Roughly translated back to English,
          it says <strong>"That's an Egg"</strong>. With my writing, I want to
          make you feel confident in your ability as a developer and think;
          "That's an Egg!".
        </p>
        <Link to="/blog/">
          <Button>That's an Egg Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
