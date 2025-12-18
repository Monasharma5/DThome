import React from "react"
import Layout from "../components/layout"
import ContactUs from "../components/contact-us"
import SEOHead from "../components/head"

export default function ContactUsPage() {
  return (
    <Layout>
      <ContactUs />
    </Layout>
  )
}

export const Head = () => (
  <SEOHead title="Contact Us" description="Contact Deligence Technologies" />
)
