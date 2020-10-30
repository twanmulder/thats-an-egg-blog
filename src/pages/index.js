import React, { Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ChevronRight from "../components/chevronright"

const StyledPostWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 40px 80px 60px 80px;
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
