import React, { Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Send from "../../static/assets/icons/send.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const StyledPostWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);

  h4 {
    margin: 0;
    padding-left: 2rem;
    padding-bottom: 1rem;
    color: var(--linkTitleHover);
  }

  h4 + a {
    min-width: 100%;
    display: inline-block;
    margin-top: 0;
    padding: ${rhythm(1.5)} ${rhythm(1)};
    border: 0.25rem solid var(--linkTitleHover);
    border-radius: 1rem;

    h2 {
      color: var(--linkTitleHover);
    }
  }

  h4 + a + a {
    margin-top: ${rhythm(1)};
  }

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  box-shadow: none;
  margin: ${rhythm(3 / 4)} 0;
  padding: ${rhythm(1 / 2)} 0 ${rhythm(1 / 2)} 0;

  :hover {
    box-shadow: none;

    h2 {
      color: var(--linkTitleHover);
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: ${rhythm(1 / 4)};
  }

  .link-description {
    color: var(--textNormal);
    font-style: italic;
    opacity: 0.8;
    margin-bottom: ${rhythm(1 / 4)};
  }
`

const IndexLinks = styled.section`
  margin: ${rhythm(3)} auto;
  padding: 0 10px;
  max-width: 800px;

  a {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 20px;
    background: #fec150;
    color: #1a1103;
    box-shadow: 0 20px 15px -15px rgba(254, 192, 77, 0.7);
    transition: all 0.3s ease-in-out 0s;

    :hover {
      transform: scale(1.03);
      opacity: 0.9;
      box-shadow: 0px 10px 30px -5px rgba(254, 192, 77, 0.5);

      svg {
        opacity: 0.5;
      }
    }
  }

  h2 {
    margin: 0;
    color: #1a1103;
  }

  p {
    font-style: italic;
    flex: 1 1;
    margin: 0;
    font-size: 1.25rem;
  }

  svg {
    margin: 0 0 0 auto;
    width: 50px;
    height: 50px;
    opacity: 0.25;
    transition: all 0.3s ease-in-out 0s;
  }
`

const CategoriesWrapper = styled.div`
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

const BlogPosts = props => {
  const { posts } = props

  return (
    <Fragment>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const categories = node.frontmatter.categories
        const categoriesArray = categories.split(", ").sort()

        return (
          <StyledLink to={`/blog${node.fields.slug}`} key={node.fields.slug}>
            <h2>{title}</h2>
            <p
              className="link-description"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            {categoriesArray.length ? <Categories categories={categoriesArray} /> : null}
          </StyledLink>
        )
      })}
    </Fragment>
  )
}

function IndexPage(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return (
          <Layout wrapperFormat="full" navStyle="hero">
            <SEO title="Articles making your developer life easier" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
            <Hero />
            <StyledPostWrapper>
              <h4>Most recent article</h4>
              <BlogPosts posts={posts} />
            </StyledPostWrapper>
            <IndexLinks>
              <Link to="/newsletter">
                <h2>Join the Newsletter</h2>
                <p>Stay up-to-date</p>
                <Send />
              </Link>
            </IndexLinks>
          </Layout>
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
            categories
          }
        }
      }
    }
  }
`
