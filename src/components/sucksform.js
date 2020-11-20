import React, { Fragment } from "react"

import "../utils/convertkit-form-sucks-styling.css"
import "./sucksform.css"

export default function SucksForm() {
  return (
    <Fragment>
      <form
        action="https://app.convertkit.com/forms/1830651/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="1830651"
        data-uid="9cc131ddb2"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your submitted website.","redirect_url":"http://thatsanegg.com/your-website-sucks?submitted=true"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
            <div class="formkit-field">
              <input class="formkit-input" name="email_address" aria-label="Your email address" placeholder="Your email address" required type="email" />
            </div>
            <div class="formkit-field">
              <input class="formkit-input" aria-label="Your Website" name="fields[website]" required placeholder="Your Website" type="text" />
            </div>
            <button data-element="submit" class="formkit-submit formkit-submit">
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Get Feedback</span>
            </button>
          </div>
        </div>
        <p className="form-disclaimer">
          I'll also let you know when I launch another article or project like this, a couple times a year. <br />
          You can unsubscribe whenever you'd like.
        </p>
      </form>
    </Fragment>
  )
}
