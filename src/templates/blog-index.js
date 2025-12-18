import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"


import {
  Container,
  FlexList,
  Box,
  Space,
  BlockLink,
  Heading,
  Subhead,
  Kicker,
  Text,
} from "../components/ui"
import SEOHead from "../components/head"

function PostCard({ slug, image, title, excerpt, author, category }) {
  return (
    <BlockLink
      to={`/${slug}`}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        height: "100%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform .2s ease, box-shadow .2s ease",
      }}
    >
      {image && (
        <>
          <GatsbyImage
            alt={image.altText || title}
            image={image.gatsbyImageData}
            style={{ borderRadius: "12px" }}
          />
          <Space size={3} />
        </>
      )}

      {category && <Kicker>{category}</Kicker>}

      <Subhead as="h3" variant="large">{title}</Subhead>

      <Text as="p">{excerpt}</Text>

      {author?.name && (
        <Text variant="bold" style={{ marginTop: "auto" }}>
          By {author.name}
        </Text>
      )}
    </BlockLink>
  )
}


function PostCardSmall({ slug, image, title, category, ...props }) {
  return (
    <BlockLink {...props} to={`/${slug}`}>

      {image && (
        <>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
    </BlockLink>
  )

}

export default function BlogIndex({ data }) {
  const posts = data.allWpPost.nodes

  const featuredPosts = posts.filter(post =>
  post.categories?.nodes.some(c => c.name === "Featured")
)

const regularPosts = posts.filter(post =>
  !post.categories?.nodes.some(c => c.name === "Featured")
)


  return (
    <Layout>
      <Container>
        <Box paddingY={6}>
          <Heading as="h1" center>
            Blog
          </Heading>

          <Space size={5} />

          <FlexList
            as="ul"
            responsive
            wrap
            gap={0}
            gutter={4}
            variant="start"
          >
            {posts.map(post => (
              <Box
                as="li"
                key={post.id}
                width="third"
                padding={3}
              >
                <PostCard
                  slug={post.slug}
                  image={post.featuredImage?.node}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.categories?.nodes[0]?.name}
                  author={post.author?.node}
                />
              </Box>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="Blog" />
}
export const query = graphql`
  query BlogIndexPage {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        slug
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            gatsbyImageData(width: 600)
          }
        }
        
      }
    }
  }
`
