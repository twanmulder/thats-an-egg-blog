import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsletterForm from "../components/newsletterform"
import JumpToTop from "../components/jumptotop"

import { rhythm, scale } from "../utils/typography"

const BlogPostBody = styled.article`
  .blog-date {
    display: block;
    margin-top: ${rhythm(-1)};
    margin-bottom: ${rhythm(1)};
  }
`

const StyledPostNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: ${rhythm(1.5)};
  padding: 0;
`

function BlogPostTemplate(props) {
  const post = props.data.mdx
  const { previous, next } = props.pageContext

  return (
    <Fragment>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPostBody>
          <h1>{post.frontmatter.title}</h1>
          <p
            className="blog-date"
            style={{
              ...scale(-1 / 5),
            }}
          >
            {post.frontmatter.date}
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr style={{ marginBottom: rhythm(1.5) }} />
        </BlogPostBody>
        <footer>
          <NewsletterForm />
          <h3 style={{ marginTop: rhythm(1.5) }}>
            <Link to="/" style={{ boxShadow: `none` }}>
              That's an Egg
            </Link>
          </h3>
          <Bio />
          <StyledPostNavigation>
            <li>
              {previous && (
                <Link to={`blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </StyledPostNavigation>
        </footer>
      </Layout>
      <JumpToTop />
    </Fragment>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
      }
    }
  }
`
