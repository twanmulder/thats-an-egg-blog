import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TableOfContents from "../components/tableofcontents"
import NewsletterForm from "../components/newsletterform"
import JumpToTop from "../components/jumptotop"

import { rhythm } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"

const Body = styled.article`
  max-width: calc(1100px - 350px);

  a {
    box-shadow: 0 1px 0 0 currentColor;

    :hover {
      box-shadow: none;
    }
  }

  p > img + em {
    margin-top: -1.75rem;
    text-align: center;
    font-size: 14px;
    opacity: 0.8;
    font-weight: normal;
    font-style: normal;
    font-family: Open Sans, sans-serif;
    display: block;
  }

  pre {
    position: relative;
    box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.5);

    ::before {
      content: attr(data-language);
      text-transform: uppercase;
      position: absolute;
      top: 0.25rem;
      right: 0.75rem;
      opacity: 0.5;
      font-style: italic;
      z-index: 9999;
      border-radius: 0.25rem 0.25rem 0 0;
    }
  }

  iframe {
    width: 100%;
  }

  h2 .anchor,
  h3 .anchor,
  h4 .anchor,
  h5 .anchor {
    display: none;
  }

  @media (min-width: 769px) {
    h2,
    h3,
    h4,
    h5 {
      scroll-margin-top: 128px;

      :hover .anchor {
        opacity: 0.75;
      }

      .anchor {
        color: inherit;
        display: block;
        position: absolute;
        left: 0px;
        transform: translateX(-125%) translateY(-2px);
        transition: opacity 250ms ease 0s;
        opacity: 0;
        box-shadow: none;

        svg {
          color: var(--textNormal);
        }
      }
    }
  }
`

const Title = styled.h1`
  margin-bottom: ${rhythm(1 / 4)};
`

const Details = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
  font-size: 14px;
  line-height: ${rhythm(1)};
`

const PostNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: ${rhythm(1.5)};
  padding: 0;
`

const CategoriesWrapper = styled.div`
  margin-bottom: ${rhythm(1 / 4)};
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    padding: ${rhythm(1 / 8)} ${rhythm(1 / 3)};
    border-radius: ${rhythm(1 / 4)};
    font-size: 0.75rem;
    background: var(--categoriesButtonBackground);
    color: var(--linkTitleHover);
  }

  div:not(:first-child) {
    margin-left: ${rhythm(1 / 2)};
  }
`

const Categories = props => {
  const { categories } = props

  return (
    <CategoriesWrapper>
      {categories.map(category => {
        return <div key={category}>{category}</div>
      })}
    </CategoriesWrapper>
  )
}

function BlogPostTemplate(props) {
  const post = props.data.mdx
  const categories = post.frontmatter.categories?.split(", ").sort()
  const tableOfContents = post.tableOfContents
  const { previous, next } = props.pageContext
  console.log(tableOfContents["items"])

  return (
    <Fragment>
      <Layout wrapperFormat="article">
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
        {typeof tableOfContents["items"] === "undefined" ? null : <TableOfContents table={tableOfContents} />}
        <Body>
          <Title>{post.frontmatter.title}</Title>
          {categories.length ? <Categories categories={categories} /> : null}
          <Details className="blog-details">
            {post.frontmatter.date}
            {` • ${formatReadingTime(post.timeToRead)}`}
          </Details>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr style={{ marginBottom: rhythm(1.5) }} />

          <article>
            <NewsletterForm />
            <h3 style={{ marginTop: rhythm(1.5) }}>
              <Link to="/" style={{ boxShadow: `none` }}>
                That's an Egg
              </Link>
            </h3>
            <Bio />
            <PostNavigation>
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </PostNavigation>
          </article>
        </Body>
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
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        categories
      }
    }
  }
`
