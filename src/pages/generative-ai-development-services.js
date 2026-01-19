import * as React from "react"
import Layout from "../components/layout"
import GenerativeAIPage from "../components/generativeai"
import SEOHead from "../components/head"

export default function generativeai() {
  return (
    <Layout>
      <GenerativeAIPage />
    </Layout>
  )
}

export const Head = () => (
  <SEOHead 
    title="Generative AI | Deligence Technologies" 
    description="Learn about Generative AI Development." 
  />
)
