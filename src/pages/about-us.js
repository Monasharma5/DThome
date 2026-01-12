import * as React from "react"
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
  <SEOHead 
    title="About Us | Deligence Technologies" 
    description="Learn about Deligence Technologies, our vision, values, leadership, and why global businesses trust us." 
  />
)
