import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
} from "../components/ui"
import SEOHead from "../components/head"

export default function BlogPost({ data }) {
  const post = data.wpPost

  if (!post) return null

  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          {/* Title */}
          <Heading as="h1" center>
         {/*  {post.title} */} 
          </Heading>

          <Space size={3} />

          {/* Author */}
          {post.author?.node && (
            <Box center>
              <Flex>
                {post.author.node.avatar?.url && (
                  <Avatar
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                  />
                )}
              {/* <Text variant="bold">{post.author.node.name}</Text> */}  
              </Flex>
            </Box>
          )}

          <Space size={2} />

          {/* Date */}
         {/* <Text center>{post.date}</Text> */} 

          <Space size={4} />

          {/* Featured Image */}
          {post.featuredImage?.node?.gatsbyImageData && (
            <GatsbyImage
              image={post.featuredImage.node.gatsbyImageData}
              alt={post.featuredImage.node.altText || post.title}
            />
          )}

          <Space size={5} />

          {/* Content */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

/* ---------------- SEO ---------------- */

export const Head = ({ data }) => (
  <SEOHead
    title={data.wpPost.title}
    description={data.wpPost.excerpt}
  />
)

/* ---------------- QUERY ---------------- */

export const query = graphql`
  query BlogPostById($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      date
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          altText
          gatsbyImageData(width: 600, height: 400)
        }
      }
    }
  }
`
