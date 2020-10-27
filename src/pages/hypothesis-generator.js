import React, { Fragment, useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const GeneratorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const Hypothesis = styled.section`
  background: var(--navBackground);
  box-shadow: var(--navBoxShadow);
  padding: 2rem 1rem;
  border-radius: 1rem;
  border: var(--inputBorder);

  @media (min-width: 768px) {
    width: 80%;
    position: sticky;
    top: 2rem;
    padding: 1.5rem 1rem;
    margin: 3.5rem 1rem 1rem 2rem;
  }

  h3 {
    margin: 0;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:first-child {
      margin-top: 1.75rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  color: var(--textNormal);
  background-color: var(--navBackground);
  width: 100%;
  border: var(--inputBorder);
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 0.4rem 0.8rem;
  transition: var(--theme-transition);
  box-shadow: var(--navBoxShadow);

  ::placeholder {
    opacity: 0.25;
  }

  :focus {
    outline: none;
    box-shadow: var(--inputFocusBoxShadow);
    border-color: var(--inputFocusBorderColor);
  }
`

function HypothesisGenerator(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  const [formData, updateForm] = useState({
    weObserved: "",
    observationBy: "",
    weWishTo: "",
    forSegment: "",
    leadTo: "",
    measuredBy: "",
  })
  const hasFormAtLeastOneEntry = Object.values(formData).some(x => x !== null && x !== "")

  const handleInputChange = event => {
    const inputName = event.target.name
    const inputValue = event.target.value
    updateForm({ ...formData, [inputName]: inputValue })
  }

  const handleButtonClick = () => {
    let stringToCopy = document.querySelector(".result-text-wrapper").innerText

    const el = document.createElement("textarea")
    el.value = stringToCopy
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  return (
    <Layout location={props.location} title={siteTitle} wrapperFormat="wide">
      <SEO title="Tools - Hypothesis Generator" />
      <GeneratorWrapper>
        <section>
          <h1>Hypothesis Generator</h1>
          <p>
            Setting up your A/B testing hypothesis can be hard.
            <br />
            Use this A/B testing hypothesis generator to instantly frame credible, feasible hypotheses that get you big learning, and bigger conversion lifts.
          </p>
          <form autoComplete="off">
            <h2>Observation</h2>
            <Label htmlFor="weObserved">Since we have observed that</Label>
            <Input type="text" name="weObserved" id="weObserved" placeholder="description of problem" value={formData.weObserved} onChange={handleInputChange} />
            <Label htmlFor="observationBy">by</Label>
            <Input type="text" name="observationBy" id="observationBy" placeholder="observation method" value={formData.observationBy} onChange={handleInputChange} />

            <h2>Execution</h2>
            <Label htmlFor="weWishTo">We wish to</Label>
            <Input type="text" name="weWishTo" id="weWishTo" placeholder="make this change" value={formData.weWishTo} onChange={handleInputChange} />
            <Label htmlFor="forSegment">for</Label>
            <Input type="text" name="forSegment" id="forSegment" placeholder="this segment/user profile" value={formData.forSegment} onChange={handleInputChange} />

            <h2>Outcome</h2>
            <Label htmlFor="leadTo">Which should lead to</Label>
            <Input type="text" name="leadTo" id="leadTo" placeholder="desired change in behaviour" value={formData.leadTo} onChange={handleInputChange} />
            <Label htmlFor="measuredBy">measured by</Label>
            <Input type="text" name="measuredBy" id="measuredBy" placeholder="KPI's or metrics that will change" value={formData.measuredBy} onChange={handleInputChange} />
          </form>
        </section>

        <Hypothesis>
          <h3>Your Hypothesis</h3>
          {hasFormAtLeastOneEntry && (
            <Fragment>
              <div className="result-text-wrapper">
                <p>
                  {formData.weObserved && (
                    <span>
                      <b>Since we have observed that </b>
                      {formData.weObserved}
                    </span>
                  )}

                  {formData.observationBy && (
                    <span>
                      <b> by </b>
                      {formData.observationBy}.
                    </span>
                  )}
                </p>
                <p>
                  {formData.weWishTo && (
                    <span>
                      <b> We wish to </b>
                      {formData.weWishTo}
                    </span>
                  )}

                  {formData.forSegment && (
                    <span>
                      <b> for the segment </b>
                      {formData.forSegment}.
                    </span>
                  )}
                </p>
                <p>
                  {formData.leadTo && (
                    <span>
                      <b> This will lead to </b>
                      {formData.leadTo}
                    </span>
                  )}
                  {formData.measuredBy && (
                    <span>
                      <b> measured by </b>
                      {formData.measuredBy}.
                    </span>
                  )}
                </p>
              </div>
              <div onClick={handleButtonClick}>
                <Button marginBottom="0">Copy hypothesis</Button>
              </div>
            </Fragment>
          )}
        </Hypothesis>
      </GeneratorWrapper>
    </Layout>
  )
}

export default HypothesisGenerator

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
