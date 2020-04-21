import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

export default function PrivacyPolicy() {
  return (
    <Layout hideFooter="true">
      <SEO
        title="Privacy Policy"
        keywords={[`Privacy`, `Policy`, `Statement`]}
      />
      <h1>Privacy Policy</h1>
      <hr />
      <p>
        "That's an Egg" takes your privacy seriously. To better protect your
        privacy I provide this privacy policy notice explaining the way your
        personal information is collected and used.
      </p>
      <h3>Collection of Routine Information</h3>
      <hr />
      <p>
        This website tracks basic information about its visitors. This
        information includes, but is not limited to, IP addresses, browser
        details, timestamps and referring pages. None of this information can
        personally identify specific the user to this website. The information
        is tracked for routine administration and maintenance purposes.
      </p>
      <h3>Cookies</h3>
      <hr />
      <p>
        Where necessary, this website uses cookies to store information about a
        visitor’s preferences and history in order to better serve the user
        and/or present the user with customized content.
      </p>
      <h3>Security</h3>
      <hr />
      <p>
        The security of your personal information is important to me, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While I strive to use commercially
        acceptable means to protect your personal information, I cannot
        guarantee its absolute security.
      </p>
      <h3>Changes To This Privacy Policy</h3>
      <hr />
      <p>
        This Privacy Policy is effective as of 20/04/2020 and will remain in
        effect except with respect to any changes in its provisions in the
        future, which will be in effect immediately after being posted on this
        page. I reserve the right to update or change my Privacy Policy at any
        time and you should check this Privacy Policy periodically. If I make
        any material changes to this Privacy Policy, I will notify you either
        through the email address you have provided me, or by placing a
        prominent notice on my website.
      </p>
      <h3>Contact Information</h3>
      <hr />
      <p>
        For any questions or concerns regarding the privacy policy, please send
        me a message <a href="https://twitter.com/toktoktwan">on Twitter</a>.
      </p>
      <Link to="/blog/">
        <Button>Back to Blog</Button>
      </Link>
    </Layout>
  )
}
