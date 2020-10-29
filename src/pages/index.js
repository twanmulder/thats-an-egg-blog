import React, { Fragment } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm, boldWeight } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChevronRight from "../components/chevronright"

const Hero = styled.section`
  position: relative;
  background: #fec150;
  margin-bottom: -7rem;

  > div {
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
    padding: 40px 40px 0 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    margin-bottom: -5.25rem;

    > div {
      padding: 20px 20px;
    }
  }

  @media (max-width: 1023px) {
    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`

const HeroSmallImageWrapper = styled.div`
  display: none;
  visibility: hidden;

  @media (max-width: 1023px) {
    display: block;
    visibility: visible;
    width: 160px;
    height: 160px;
    margin-bottom: 25px;

    > div {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`

const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #1a1103;
    margin: 0;
  }

  @media (max-width: 1023px) {
    h1 {
      padding-bottom: 60px;
    }
  }

  @media (max-width: 767px) {
    h1 {
      max-width: 290px;
      font-size: 25px;
      padding-bottom: 10px;
    }
  }
`

const HeroImageWrapper = styled.div`
  margin-right: -160px;
  width: 420px;
  height: 420px;
  display: flex;

  img {
    max-width: 100%;
    margin-bottom: 0;
  }

  @media (max-width: 1023px) {
    display: none;
    visibility: hidden;
  }
`

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
            <Layout wrapperFormat="full">
              <SEO title="Articles making your developer life easier" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />

              <Hero>
                <div>
                  <HeroSmallImageWrapper>
                    <Image
                      fixed={data.avatarSmall.childImageSharp.fixed}
                      className="hero-small-image"
                      style={{
                        borderRadius: `100%`,
                      }}
                      imgStyle={{
                        borderRadius: `50%`,
                      }}
                    ></Image>
                  </HeroSmallImageWrapper>

                  <HeroTitleWrapper>
                    <h1>Hi, I'm Twan Mulder. I help make your developer life easier.</h1>
                  </HeroTitleWrapper>
                  <HeroImageWrapper>
                    <Image fixed={data.avatarLarge.childImageSharp.fixed}></Image>
                  </HeroImageWrapper>
                </div>
              </Hero>

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
    avatarLarge: file(absolutePath: { regex: "/twan_transparent.png/" }) {
      childImageSharp {
        fixed(width: 420, height: 420, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatarSmall: file(absolutePath: { regex: "/twan_transparent.png/" }) {
      childImageSharp {
        fixed(width: 160, height: 160, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
