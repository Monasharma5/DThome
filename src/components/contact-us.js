import React from "react"
import SEOHead from "../components/head"


export default function ContactUs() {
  return (

      <main className="page">
        <section className="contact-page">
          {/* LEFT SIDE — CONTACT INFO */}
          <article className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Need to contact us? Either fill out the form or use the contact
              details below.
            </p>

            <p>
              <strong>Deligence Technologies Inc.</strong>
              

              1 King Street West

              Suite 4800 – 274

              Toronto, Ontario M5H 1A1, Canada
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+12897727883">+1 (289) 772-7883</a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sales@deligence.com">sales@deligence.com</a>
            </p>

            <p>
              <strong>Microsoft Teams:</strong>{" "}
              <a
                href="https://teams.microsoft.com/l/chat/0/0?users="
                target="_blank"
                rel="noopener noreferrer"
              >
                sanjay.deligence
              </a>
            </p>
          </article>

          {/* RIGHT SIDE — CONTACT FORM */}
          <article>
            <form
              className="form contact-form"
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
            >
              {/* Required Salesforce Hidden Fields */}
              <input type="hidden" name="oid" value="00D5g000005H9ev" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.deligence.com/thank-you/"
              />

              {/* First Name */}
              <div className="form-row">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  maxLength="40"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-row">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  maxLength="80"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  maxLength="80"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  maxLength="20"
                  required
                />
              </div>

              {/* How can we help you? */}
              <div className="form-row">
                <label htmlFor="00N5g00000WltMz">How can we help you?</label>
                <select id="00N5g00000WltMz" name="00N5g00000WltMz">
                  <option value="">--None--</option>
                  <option value="AI Services">AI Services</option>
                  <option value="Mobile App Consultation">
                    Mobile App Consultation
                  </option>
                  <option value="Web App Consultation">
                    Web App Consultation
                  </option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="EduTech">EduTech</option>
                  <option value="Any Other Query">Any Other Query</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-row">
                <label htmlFor="description">Message</label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="form-row">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfFPhkbAAAAAAFeuRG0XGEZIFTuBHw-WjdKuoDk"
                ></div>
              </div>

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>

        {/* MAP */}
        <section style={{ marginTop: "40px" }}>
          <iframe
            title="Deligence Technologies Location"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-5HSUfoXzDakVlrO_ePYb36f-IgvgJUk&q=Deligence+Technologies+Inc.+1+King+Street+West,+Toronto,+ON+M5H+1A1,+Canada&zoom=14"
          ></iframe>
        </section>
      </main>
    
  )
}
