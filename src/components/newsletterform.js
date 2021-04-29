import React from "react"

import "../utils/convertkit-form-styling.css"
import "./newsletterform.css"

function NewsletterForm() {
  return (
    <form action="https://app.convertkit.com/forms/1356313/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="1356313" data-uid="812b8a9345" data-version="5" min-width="400 500 600 700 800" autoComplete="off">
      <input autoComplete="off" name="hidden" type="text" style={{ display: `none` }}></input>
      <div data-style="full">
        <div data-element="column" className="formkit-background"></div>
        <div data-element="column" className="formkit-column">
          <div className="formkit-header" data-element="header">
            <h1>Receive updates from me!</h1>
          </div>
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" className="seva-fields formkit-fields">
            <div className="formkit-field">
              <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" required />
            </div>
            <div className="formkit-field">
              <input className="formkit-input" name="email_address" placeholder="Your email address" type="email" required />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit">
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <div className="formkit-disclaimer" data-element="disclaimer">
            <p>I respect your privacy. Unsubscribe at anytime. No spam.</p>
          </div>
          <a href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">
            Powered By ConvertKit
          </a>
        </div>
      </div>
    </form>
  )
}

export default NewsletterForm
