import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const HeroWrapper = styled.section`
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

  &.--hide-image {
    > div {
      padding: 80px 40px 60px 80px;
    }

    h1 {
      padding-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: -5.25rem;

    > div {
      padding: 20px;
    }

    &.--hide-image {
      > div {
        padding: 20px;
      }
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

  h2 {
    margin: ${rhythm(1 / 2)} 0 0 0;
    font-size: 1rem;
    font-style: italic;
    color: #474747;
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

export default function Hero(props) {
  const { hideImage } = props
  const title = props.title || "Hi, I'm Twan Mulder. I help make your developer life easier."
  const subtitle = props.subtitle || false

  return (
    <StaticQuery
      query={heroQuery}
      render={data => {
        return (
          <HeroWrapper className={hideImage ? "--hide-image" : ""}>
            <div>
              {hideImage ? null : (
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
              )}
              <HeroTitleWrapper>
                <h1>{title}</h1>
                {subtitle ? <h2>{subtitle}</h2> : null}
              </HeroTitleWrapper>
              {hideImage ? null : (
                <HeroImageWrapper>
                  <Image fixed={data.avatarLarge.childImageSharp.fixed}></Image>
                </HeroImageWrapper>
              )}
            </div>
          </HeroWrapper>
        )
      }}
    />
  )
}

export const heroQuery = graphql`
  query HeroQuery {
    avatarLarge: file(absolutePath: { regex: "/twan_transparent.png/" }) {
      childImageSharp {
        fixed(width: 420, height: 420, quality: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatarSmall: file(absolutePath: { regex: "/twan_transparent.png/" }) {
      childImageSharp {
        fixed(width: 160, height: 160, quality: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
