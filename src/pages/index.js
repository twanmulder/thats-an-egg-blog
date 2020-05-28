import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import chevronRight from "../../static/assets/icons/chevron-right.svg"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledBioWrapper = styled.article`
  border: 1px solid;
  margin-top: ${rhythm(3)};
  padding: 1rem;
  box-shadow: 2px 2px;
  border-radius: 0.25rem;

  h1 {
    margin-top: 0;

    span {
      padding: 0 0.5rem;
      background: #fec150;
      color: hsla(0, 0%, 0%, 0.9);
    }
  }
`

function IndexPage(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO
        title="Articles making your developer life easier"
        keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]}
      />
      <StyledBioWrapper>
        <h1>
          <span>That's an Egg</span>
        </h1>
        <Bio />
      </StyledBioWrapper>
      <div style={{ margin: `${rhythm(3)} 0` }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={`blog${node.fields.slug}`} key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>{title}</h3>
              <p
                style={{
                  color: `var(--textNormal)`,
                  marginBottom: rhythm(1 / 4),
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              <p
                style={{
                  display: "flex",
                  marginBottom: rhythm(1.5),
                  fontWeight: boldWeight,
                }}
              >
                Read more
                <img src={chevronRight} style={{ marginLeft: "0.125rem" }} />
              </p>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
