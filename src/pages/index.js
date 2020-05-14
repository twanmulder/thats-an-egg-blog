import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]}
      />
      <h1>That's an Egg</h1>
      <Bio />
      <div style={{ margin: `${rhythm(1.5)} 0 ${rhythm(3)}` }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link to={`blog${node.fields.slug}`} key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>{title}</h3>
              <p
                style={{ color: `var(--textNormal)` }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
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
