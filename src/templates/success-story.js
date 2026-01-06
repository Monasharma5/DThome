/*import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function SuccessStory({ data }) {
  const story = data.allWpPortfolio

  if (!story) return null

  return (
    <Layout>
      <h1>{story.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: story.content }} />
    </Layout>
  )
}

export const query = graphql`
  query SuccessStoryById($id: String!) {
    allWpSuccessStories(id: { eq: $id }) {
      id
      title
      content
      uri
    }
  }
`
*/