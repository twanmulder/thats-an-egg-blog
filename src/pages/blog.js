import React, { Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Send from "../../static/assets/icons/send.js"
import ThumbsUp from "../../static/assets/icons/thumbs-up.js"
import ArrowRight from "../../static/assets/icons/arrow-right.js"

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

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  right: -60px;
  bottom: -60px;
  background: var(--linkTitleHover);
  transform: scale(0);
  will-change: transform;
  transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
`

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: none;
  border-radius: 1rem;
  margin: ${rhythm(3 / 4)} 0;
  padding: ${rhythm(1 / 2)} 0 ${rhythm(1 / 2)} 0;

  :nth-child(2) {
    min-width: 100%;
    margin-top: 0;
    padding: ${rhythm(1.5)} ${rhythm(1)};
    border: 0.25rem solid var(--linkTitleHover);

    h2 {
      color: var(--linkTitleHover);
    }
  }

  :hover {
    box-shadow: none;

    h2 {
      color: var(--linkTitleHover);
    }

    svg {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${Circle} {
      transform: scale(1);
      transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: ${rhythm(1 / 4)};
    transition: color 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }

  .link-description {
    color: var(--textNormal);
    font-style: italic;
    opacity: 0.8;
    margin-bottom: ${rhythm(1 / 4)};
    max-width: 90%;
  }

  svg {
    position: absolute;
    right: 12px;
    bottom: 12px;
    color: var(--bg);

    opacity: 0;
    transform: translate3d(-${rhythm(1 / 4)}, 0, 0);
    transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
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

    + a {
      margin-top: ${rhythm(1)};
    }
  }

  .your-website-sucks {
    background: var(--websiteSucksBackground);
    color: #056ec5;
    box-shadow: 0 20px 15px -15px rgba(5, 110, 197, 0.2);

    :hover {
      box-shadow: 0px 10px 30px -5px rgba(5, 110, 197, 0.15);
    }

    h2 {
      color: #056ec5;
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
            <Circle />
            <ArrowRight />
          </StyledLink>
        )
      })}
    </Fragment>
  )
}

function Blog(props) {
  const title = "Blog - All articles"
  const subtitle = "You can find all my articles here!"

  const { data } = props
  const posts = data.allMdx.edges

  return (
    <StaticQuery
      query={blogPageQuery}
      render={data => {
        return (
          <Layout wrapperFormat="full" navStyle="hero">
            <SEO title="Articles making your developer life easier" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
            <Hero title={title} subtitle={subtitle} hideImage={true} />
            <StyledPostWrapper>
              <h4>Most recent article</h4>
              <BlogPosts posts={posts} />
            </StyledPostWrapper>
            <IndexLinks>
              <Link to="/your-website-sucks" className="your-website-sucks">
                <h2>Your website sucks</h2>
                <p>Get feedback on your product, portfolio, etc.</p>
                <ThumbsUp />
              </Link>
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

export default Blog

export const blogPageQuery = graphql`
  query blogPageQuery {
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
