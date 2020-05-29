import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import chevronRight from "../../static/assets/icons/chevron-right.svg"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

const StyledLink = styled(Link)`
  :hover {
    h3 {
      color: var(--linkTitleHover);
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
    margin-bottom: ${rhythm(1.5)};
    font-weight: ${boldWeight};

    :hover img {
      opacity: 1;
    }

    img {
      margin-left: ${rhythm(1 / 4)};
      opacity: 0;
      transition: 0.2s opacity ease-in-out;
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
                <img src={chevronRight} alt="" />
              </p>
            </StyledLink>
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
