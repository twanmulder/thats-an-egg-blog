import React, { Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import Twitter from "../../static/assets/icons/twitter.js"
import Send from "../../static/assets/icons/send.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ChevronRight from "../components/chevronright"

const StyledPostWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;

  h4 {
    margin: 0;
    padding-left: 2rem;
    padding-bottom: 1rem;
    color: var(--linkTitleHover);
  }

  h4 + a {
    min-width: 100%;
    display: inline-block;
    padding: 0 2rem;
    border: 0.25rem solid var(--linkTitleHover);
    border-radius: 1rem;

    h3 {
      color: var(--linkTitleHover);
    }
  }

  h4 + a + a {
    h3 {
      margin-top: ${rhythm(3)};
    }
  }

  a {
    box-shadow: none;
  }

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 20px;
  }
`

const StyledLink = styled(Link)`
  :hover {
    h3 {
      color: var(--linkTitleHover);
    }
    svg polyline:nth-child(1) {
      opacity: 1;
    }
  }

  h3 {
    margin-bottom: ${rhythm(1 / 4)};
  }

  .link-description {
    color: var(--textNormal);
    font-style: italic;
    oapcity: 0.8;
    margin-bottom: ${rhythm(1 / 4)};
  }

  .link-read-more {
    display: flex;
    align-items: center;
    margin-bottom: ${rhythm(1.5)};
    font-weight: ${boldWeight};

    :hover svg polyline:nth-child(2),
    :hover svg polyline:nth-child(3) {
      opacity: 1;
    }

    svg {
      margin-left: ${rhythm(1 / 6)};

      polyline {
        opacity: 0;
        transition: 0.2s opacity ease-in-out;
      }

      polyline:nth-child(3) {
        transition-delay: 0.08s;
      }
    }
  }
`

const IndexLinks = styled.section`
  margin: ${rhythm(3)} auto;
  padding: 0 20px;
  max-width: 800px;

  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  a {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 20px;
    transition: all 0.3s ease-in-out 0s;

    :hover {
      transform: scale(1.03);
      opacity: 0.9;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px -5px;
    }
  }

  p {
    flex: 1 1;
    margin: 0;
    font-size: 1.25rem;
  }

  .twitter-link {
    background: #1da1f2;
    color: #fff;
  }

  .newsletter-link {
    background: #fec150;
    color: #1a1103;
  }

  svg {
    flex: 1 1;
    margin: 2rem 0 0 auto;
    width: 32px;
    height: 32px;
    opacity: 0.5;
  }
`

function IndexPage(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return (
          <Fragment>
            <Layout wrapperFormat="full" navStyle="hero">
              <SEO title="Articles making your developer life easier" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
              <Hero />
              <StyledPostWrapper>
                <h4>Most recent article</h4>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <StyledLink to={`blog${node.fields.slug}`} key={node.fields.slug}>
                      <h3>{title}</h3>
                      <p
                        className="link-description"
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <p className="link-read-more">
                        Read more
                        <ChevronRight />
                      </p>
                    </StyledLink>
                  )
                })}
              </StyledPostWrapper>
              <IndexLinks>
                <a href="https://twitter.com/toktoktwan" target="_blank" rel="noopener noreferrer" className="twitter-link">
                  <p>Follow me on Twitter</p>
                  <Twitter />
                </a>
                <Link to="/newsletter" className="newsletter-link">
                  <p>Join the Newsletter</p>
                  <Send />
                </Link>
              </IndexLinks>
            </Layout>
          </Fragment>
        )
      }}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
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
