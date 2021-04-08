import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/button"
import NewsletterFormShort from "../components/newsletterformshort"

const ContentWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const StyledHeader = styled.h1`
  margin-top: 0;

  @media (min-width: 42rem) {
    display: flex !important;
    align-items: center;

    .gatsby-image-wrapper {
      margin: 0 ${rhythm(3 / 4)} 0 0;
    }
  }
`

function About() {
  const daysInAYear = 365
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2021, 3, 5)
  const secondDate = new Date()
  const totalDiffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))

  const diffYears = Math.floor(totalDiffDays / daysInAYear)
  const diffDays = Math.floor(totalDiffDays % daysInAYear)
  const formattedDifference = diffYears > 1 ? `${diffYears} year${diffYears > 1 ? "s" : ""} and ${diffDays} day${diffDays > 1 ? "s" : ""}` : `${diffDays} days`

  return (
    <Layout wrapperFormat="full" navStyle="hero">
      <SEO title="About me, Twan Mulder" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
      <Hero />
      <ContentWrapper>
        <StyledHeader>
          <span>Hey there, I'm Twan </span>
          <span role="img" aria-label="peace emoji">
            ✌️
          </span>
        </StyledHeader>
        <p>
          <strong>I'm a Developer and Product Specialist from the Netherlands.</strong>
          <br />
          Currently, I've been employed at&nbsp;
          <a href="https://framer.com" target="_blank" rel="noopener noreferrer">
            Framer
          </a>
          &nbsp;as a Product Specialist for {formattedDifference}.
        </p>
        <p>
          Before that, I worked as a Developer & CRO Consultant at{" "}
          <a href="https://stormdigital.nl" target="_blank" rel="noopener noreferrer">
            Storm Digital, part of Accenture Interactive for 2 years
          </a>
          .
        </p>
        <p>These days, web-development can be a very daunting task to learn for the developer who's just starting out. With things like JavaScript frameworks, server-side rendering, and REST/CRUD API's, it doesn't get a lot simpler either.</p>
        <p>However, it doesn't have to be this way!</p>
        <p>
          <strong> I love writing about making your developer life easier. </strong>
          From basic HTML & CSS, to more complicated subjects regarding web-development, I write about all of them.
        </p>
        <p>
          You might know the expression <em>"That's a piece of cake"</em>. In Dutch, we have a saying that goes likewise. Roughly translated back to English, it says <em>"That's an Egg"</em>. With my writing, I want to make you feel confident in your ability as a developer and think; "That's an
          Egg!".
        </p>
        <Link to="/blog">
          <Button marginTop={rhythm(1)} marginBottom={rhythm(2)}>
            Start Reading
          </Button>
        </Link>
        <NewsletterFormShort />
      </ContentWrapper>
    </Layout>
  )
}

export default About
