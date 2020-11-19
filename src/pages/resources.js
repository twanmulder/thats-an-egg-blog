import React, { Fragment } from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import resources from "../utils/resources.json"

import ExternalLink from "../../static/assets/icons/external-link.js"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import NewsletterFormShort from "../components/newsletterformshort"

const ResourcesWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);

  h2 {
    display: inline-block;
    background: #fec150;
    color: #1a1103;

    :first-child {
      margin-top: 0;
    }
  }

  h3 {
    margin: 0 0 1rem 0;

    span {
      text-decoration: underline;
      text-decoration-color: #fec150;
    }
  }

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const CategoryItem = styled.article`
  margin-bottom: 3.5rem;

  h4 {
    margin: 0 0 1rem 0;
  }

  > div {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      opacity: 0.8;
    }

    > a {
      margin: -1rem 0 0 0;
      padding: 1rem;
      border-radius: 0.25rem;
      opacity: 0.5;
      transition: opacity 0.2s ease;

      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        box-shadow: none;
        opacity: 1;
      }
    }
  }
`

const NewsletterSection = styled.section`
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px 40px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);
`

const CategoryItems = props => {
  const { categoryItems } = props
  return (
    <Fragment>
      {categoryItems.map(item => {
        const { name, copy, link } = item
        return (
          <CategoryItem key={name}>
            <h4>{name}</h4>
            <div>
              <p dangerouslySetInnerHTML={{ __html: copy }}></p>
              <a href={`${link}?href=thatsanegg`}>
                <ExternalLink />
              </a>
            </div>
          </CategoryItem>
        )
      })}
    </Fragment>
  )
}

const Categories = props => {
  const { categories } = props
  return (
    <Fragment>
      {categories.map(category => {
        const { categoryName, categoryEmoji, categoryItems } = category
        return (
          <Fragment key={categoryName}>
            <h3>
              {categoryEmoji} <span>{categoryName}</span>
            </h3>
            <CategoryItems categoryItems={categoryItems} />
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export default function Resources() {
  const title = "That's an Egg Resources"
  const subtitle = "An overview of useful resources - Ready to use, ready to roll."

  return (
    <Layout wrapperFormat="full" navStyle="hero">
      <SEO title="An overview of useful resources" keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`]} />
      <Hero title={title} subtitle={subtitle} hideImage={true} />
      <ResourcesWrapper>
        {resources.map(subject => {
          const title = subject.subjectTitle
          return (
            <Fragment key={title}>
              <h2>{title}</h2>
              <Categories categories={subject.categories} />
            </Fragment>
          )
        })}
      </ResourcesWrapper>
      <NewsletterSection>
        <NewsletterFormShort />
      </NewsletterSection>
    </Layout>
  )
}
