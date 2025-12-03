import React from "react"
import Layout from "../components/layout"
import SEOHead from "../components/head"

export default function ContactUsPage() {
  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        {/* MAIN FLEX WRAPPER */}
        <div
          className="contact-section"
          style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}
        >
          {/* LEFT COLUMN */}
          <div
            className="contact-info"
            style={{ flex: "1 1 55%", minWidth: "300px" }}
          >
            <ul
              className="fusion-checklist fusion-checklist-1 fusion-checklist-default type-icons"
              style={{ listStyle: "none", padding: 0 }}
            >
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "25px",
                  padding: "15px 20px",
                  marginTop: "-20px",
                }}
              >
                {/* LOCATION */}
                <li className="fusion-li-item">
                  <span className="icon-wrapper circle-no">
                    <i
                      className="fusion-li-icon icon-seo-map-marker-alt-solid"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <div className="fusion-li-item-content">
                    <h1
                      style={{
                        textAlign: "center",
                        color: "#000",
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 300,
                        marginTop: "-2px",
                      }}
                    >
                      Get in Touch
                    </h1>

                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      Need to get in touch with us? Either fill out the form
                      with your inquiry or find the email you'd like the contact
                      below.
                    </p>

                    <p>
                      <img
                        style={{ width: "40px", marginBottom: "2px" }}
                        src="https://flagcdn.com/w40/ca.png"
                        alt="Canada flag"
                      />
                    </p>

                    <p>
                      <strong>CANADA</strong>
                    </p>

                    <p style={{ color: "#202020" }}>
                      <strong>Deligence Technologies Inc.</strong>
                      <br />
                      1 King Street West
                      <br />
                      Suite 4800 – 274 Toronto, Ontario M5H 1A1, Canada
                    </p>
                  </div>
                </li>

                {/* PHONE */}
                <li className="fusion-li-item">
                  <span className="icon-wrapper circle-no">
                    <i
                      className="fusion-li-icon icon-seo-phone-solid"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <div className="fusion-li-item-content">
                    <p>
                      <a href="tel:+12897727883" style={{ color: "#000" }}>
                        +1 (289) 772-7883
                      </a>
                    </p>
                  </div>
                </li>

                {/* EMAIL */}
                <li className="fusion-li-item">
                  <span className="icon-wrapper circle-no">
                    <i
                      className="fusion-li-icon icon-seo-envelope-solid"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <div className="fusion-li-item-content">
                    <p>
                      <a
                        href="mailto:sales@deligence.com"
                        style={{ color: "#5d5f64" }}
                      >
                        sales@deligence.com
                      </a>
                    </p>
                  </div>
                </li>

                {/* CHAT */}
                <li className="fusion-li-item">
                  <span className="icon-wrapper circle-no">
                    <i
                      className="fusion-li-icon fa-rocketchat fab"
                      aria-hidden="true"
                    ></i>
                  </span>

                  <div className="fusion-li-item-content">
                    <p>
                      <a
                        href="https://teams.microsoft.com/l/chat/0/0?users="
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#5d5f64" }}
                      >
                        sanjay.deligence
                      </a>
                    </p>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div
            className="contact-form"
            style={{ flex: "1 1 35%", minWidth: "300px" }}
          >
            <div
              style={{
                backgroundColor: "#e8eaf0",
                borderRadius: "25px",
                padding: "15px",
                borderColor: "#004ca3",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <h1
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 300,
                  fontSize: "35px",
                  margin: 0,
                  color: "#202020",
                }}
              >
                How Can We Help?
              </h1>

              <div
                style={{
                  fontSize: "20px",
                  color: "#e28c2f",
                  marginTop: "8px",
                  marginBottom: "20px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 300,
                }}
              >
                Contact Us today for your EduTech, HealthTech, Custom Web App,
                Custom Mobile App, or AI Services.
              </div>

              {/* FORM */}
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                method="POST"
              >
                <input type="hidden" name="oid" value="00D5g000005H9ev" />
                <input
                  type="hidden"
                  name="retURL"
                  value="http://www.deligence.com/thank-you/"
                />
                <input
                  type="hidden"
                  name="captcha_settings"
                  value='{"keyname":"deligence","fallback":"true","orgId":"00D5g000005H9ev","ts":""}'
                />

                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  maxLength="40"
                  placeholder="First Name"
                  required
                />
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  maxLength="80"
                  placeholder="Last Name"
                  required
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength="80"
                  placeholder="Email"
                  required
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength="20"
                  placeholder="Phone"
                  required
                />

                <label
                  htmlFor="00N5g00000WltMz"
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: 300,
                    fontSize: "12px",
                  }}
                >
                  How can we help you?
                </label>

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

                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>

                <div
                  className="g-recaptcha"
                  data-sitekey="6LfFPhkbAAAAAAFeuRG0XGEZIFTuBHw-WjdKuoDk"
                ></div>

                <input type="submit" name="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div
          className="map-wrapper"
          style={{
            marginTop: "40px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-5HSUfoXzDakVlrO_ePYb36f-IgvgJUk&q=Deligence+Technologies+Inc.+1+King+Street+West,+Toronto,+ON+M5H+1A1,+Canada&zoom=14"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEOHead title="Contact Us" description="Contact Deligence Technologies" />
)
