import React from "react"
import Layout from "../components/layout"
import AboutUs from "../components/about-us"
import SEOHead from "../components/head"

export default function AboutUsPage() {
  return (
    <Layout>
      <AboutUs />
    </Layout>
  )
}

export const Head = () => (
  <SEOHead title="About Us" description="About Deligence Technologies" />
)
