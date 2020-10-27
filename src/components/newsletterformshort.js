import React from "react"

import "../utils/convertkit-form-short-styling.css"
import "./newsletterformshort.css"

export default function NewsletterFormShort() {
  return (
    <form
      action="https://app.convertkit.com/forms/1773762/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1773762"
      data-uid="f32c5f2d07"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://thatsanegg.com/newsletterconfirm"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
    >
      <div data-style="clean">
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" required />
          </div>
          <div className="formkit-field">
            <input className="formkit-input" name="email_address" aria-label="Your email address" placeholder="Your email address" required="" type="email" required />
          </div>
          <button data-element="submit" className="formkit-submit formkit-submit">
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span className="">Subscribe</span>
          </button>
        </div>
      </div>
    </form>
  )
}
