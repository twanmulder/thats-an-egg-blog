import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <p>
              Personal blog by <Link to="/about">{author}</Link>
              .
              <br />
              Making your developer life easier, one article at a time.
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/twan_transparent.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  .gatsby-image-wrapper {
    margin: 0 ${rhythm(1 / 2)} 0;
    background: #fec150;
    border-radius: 100%;
  }

  p {
    margin: 0;
  }
`

export default Bio
