import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const StyledHeader = styled.h1`
  @media (min-width: 42rem) {
    display: flex !important;
    align-items: center;

    .gatsby-image-wrapper {
      margin: 0 ${rhythm(3 / 4)} 0 0;
    }
  }
`

const StyledAvatar = styled(Image)`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${rhythm(3 / 4)};
  border-radius: 100%;

  img {
    border-radius: 50%;
  }
`

function About() {
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
      <StyledHeader>
        <StaticQuery
          query={avatarQuery}
          render={data => {
            return (
              <StyledAvatar
                fixed={data.avatar.childImageSharp.fixed}
                alt="Twan Mulder"
                style={{ display: `block` }}
              />
            )
          }}
        />
        <span>Hey there, I'm Twan </span>
        <span role="img" aria-label="peace emoji">
          ✌️
        </span>
      </StyledHeader>
      <p>
        <strong>
          I'm a Creative Developer and Technical CRO Consultant from the
          Netherlands.
        </strong>
        <br />
        Currently, I've been employed at{" "}
        <a
          href="https://stormdigital.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storm Digital
        </a>{" "}
        for {diffDays} days.
      </p>
      <p>
        These days, web-development can be a very daunting task to learn for the
        developer who's just starting out. With things like JavaScript
        frameworks, server-side rendering, and REST/CRUD API's, it doesn't get a
        lot simpler either.
      </p>
      <p>However, it doesn't have to be this way!</p>
      <p>
        <strong>
          {" "}
          I love writing about making your (developer) life easier.{" "}
        </strong>
        From basic HTML & CSS, to more complicated subjects regarding
        web-development, I write about all of them.
      </p>
      <p>
        You might know the expression <em>"That's a piece of cake"</em>. In
        Dutch, we have a saying that goes likewise. Roughly translated back to
        English, it says <em>"That's an Egg"</em>. With my writing, I want to
        make you feel confident in your ability as a developer and think;
        "That's an Egg!".
      </p>
      <Link to="/">
        <Button>Start Reading</Button>
      </Link>
    </Layout>
  )
}

export default About
