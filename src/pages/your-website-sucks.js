import React, { Fragment } from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import SucksForm from "../components/sucksform"

const ContentWrapper = styled.section`
  position: relative;
  background: var(--navBackground);
  border-radius: 1rem;
  padding: 60px 80px;
  margin: ${rhythm(3)} auto;
  max-width: 800px;
  box-shadow: 0 20px 15px -15px rgba(40, 45, 51, 0.05);

  h2:first-child {
    margin-top: 0;
  }

  iframe {
    width: 100%;
    max-width: 550px;
    margin: 0 auto 1.75rem;
    display: block;
    height: 400px;
    border: 1px solid rgb(204, 214, 221);
    border-radius: 12px;
  }

  blockquote {
    display: none;
  }

  .twitter-tweet.twitter-tweet-rendered {
    margin: 0 auto !important;

    iframe {
      border: none;
    }
  }

  @media (max-width: 767px) {
    border-radius: 0;
    padding: 40px 20px 20px 20px;
  }
`

const Notification = styled.div`
  background: #fec150;
  color: hsla(0, 0%, 0%, 0.9);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
  padding: ${rhythm(1 / 2)} 20px;
  transform: translateY(100%);
  animation: move-up 0.4s 1.5s ease forwards;

  @keyframes move-up {
    100% {
      transform: translateY(0%);
    }
  }
`

const SubmittedNotification = () => {
  return <Notification>Thanks for submitting your website. Check your email to confirm it!</Notification>
}

export default function YourWebsiteSucks() {
  const title = "Your website sucks and I'll tell you why"
  const subtitle = "Get feedback on your product, portfolio, anything!"
  const hasSubmittedForm = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("submitted")

  return (
    <Fragment>
      <Layout wrapperFormat="full" navStyle="hero">
        <SEO
          title="I'll tell you why your website sucks"
          description="Get feedback on your product, portfolio, anything! I will personally give you advice on how to improve your website."
          image="meta-image-website-sucks.png"
          socImage="twitter-social-website-sucks.png"
          keywords={[`developer`, `portfolio`, `javascript`, `react`, `blog`, `feedback`, `improve`, `website`]}
        />
        <Hero title={title} subtitle={subtitle} />
        <ContentWrapper>
          <h2>Hey, your website sucks!</h2>
          <p>As a developer and CRO Specialist, I have a lot of experience creating and reviewing websites.</p>
          <p>Even though there are a TON of great working, good looking websites out there, not any single one of them is perfect.</p>
          <p>Thay why I'd love to help you improve yours!</p>
          <p>Send me a link to your website and I'll provide you with at least 1 point of improvement.</p>
          <p>This can be in terms of usability, performance, accessibility, etc.</p>

          <SucksForm />

          <h2>Not convinced yet?</h2>
          <p>I've already "roasted" quite a couple of websites before.</p>
          <p>Below you can find a links to some of them on Twitter and Dev.to:</p>
          <h3>The tweet that started it</h3>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              Your website sucks! And I&#39;ll tell you why{" "}
              <span role="img" aria-label="lightning bolt">
                ⚡️
              </span>
              <br />
              <br />
              As a CRO Consultant, I have a lot of experience in improving our client&#39;s products.
              <br />
              <br />
              So show me your website, and I&#39;ll give you at least one point to improve! 😄 <a href="https://t.co/9RG1PrbVvy">pic.twitter.com/9RG1PrbVvy</a>
            </p>
            &mdash; Twan Mulder (@toktoktwan) <a href="https://twitter.com/toktoktwan/status/1290712060154843138?ref_src=twsrc%5Etfw">August 4, 2020</a>
          </blockquote>

          <h3>The first post to dev.to</h3>
          <iframe src="https://dev.to/toktoktwan/your-website-sucks-and-i-ll-tell-you-why-4mpb" title="Link to dev.to, showing the post'Your website sucks and I'll tell you why'"></iframe>

          <h3>Another roast session</h3>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              I&#39;m roasting your websites again!
              <br />
              <br />
              Your website sucks, and I&#39;ll tell you why ⚡️⚡️
              <br />
              <br />
              Submit a link to your website over here:<a href="https://t.co/2ER3Hgh6wn">https://t.co/2ER3Hgh6wn</a> <a href="https://t.co/EZs1vYMDHV">pic.twitter.com/EZs1vYMDHV</a>
            </p>
            &mdash; Twan Mulder (@toktoktwan) <a href="https://twitter.com/toktoktwan/status/1325059265938255873?ref_src=twsrc%5Etfw">November 7, 2020</a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

          <h2>What have people said?</h2>
          <img src="../../assets/review-1.png" alt="Review by Bugsy Sailor: Thanks! This is nice to get critical feedback as mostly I only hear back from friends/family who aren't involved in ux/ui/dev/design." />
          <img src="../../assets/review-2.png" alt="Review by Alex: Thank you!" />
          <img src="../../assets/review-3.png" alt="Review by Sara Miteva: Thank you so much, Twan! Really appreciate it." />
          <img src="../../assets/review-4.png" alt="Review by Adrian Bece: Awesome, thanks for the suggestions!" />
          <img src="../../assets/review-5.png" alt="Review by Paul: Thanks a million, it totally makes sense, I will look into it." />
          <h2>Get your feedback now</h2>
          <p>Submit your website now and I'll provide you with at least 1 point of improvement. </p>
          <SucksForm />
        </ContentWrapper>
      </Layout>
      {hasSubmittedForm ? <SubmittedNotification /> : null}
    </Fragment>
  )
}
