import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ChevronRight from "../components/chevronright"

const StyledBioWrapper = styled.article`
  margin-top: ${rhythm(3)};

  h1 {
    margin-top: 0;

    span {
      background: #fec150;
      color: hsla(0, 0%, 0%, 0.9);
    }
  }
`

const StyledPostWrapper = styled.section`
  margin: ${rhythm(3)} 0;

  h4 {
    margin: 0;
    padding-left: 2rem;
    padding-bottom: 1rem;
    color: var(--linkTitleHover);
  }

  h4 + a {
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
