import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/pages/blog.css.ts"

export default function BlogIndex({ data }) {
  const posts = data.allWpPost.nodes

  return (
    <Layout>
      <div className="blog-page">
        <h1 className="blog-heading">Blog</h1>
        <div className="blog-grid">
          {posts.map(post => (
            <a href={`/${post.slug}`} key={post.id} className="blog-card">
              {post.featuredImage?.node && (
                <GatsbyImage
                  image={post.featuredImage.node.gatsbyImageData}
                  alt={post.featuredImage.node.altText || post.title}
                  className="blog-card-image"
                />
              )}
              {post.categories?.nodes.length > 0 && (
                <span className="blog-card-category">
                  {post.categories.nodes.map(c => c.name).join(", ")}
                </span>
              )}
              <h3 className="blog-card-title">{post.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Blog</title>

export const query = graphql`
  query BlogIndexPage {
    allWpPost(sort: { date: DESC }) {
      nodes {
        id
        slug
        title
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
