import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"

/* Page-specific styles */
import * as contactStyles from "../styles/pages/contact-us.css"
import * as blogStyles from "../styles/pages/blog.css"
import * as aboutStyles from "../styles/pages/about-us.css"
import * as automationStyles from "../styles/pages/ai-automation.css"

//export default function Page({ data }) {
 // const { page } = data

 export default function Page({ data }) {
  if (!data?.page) {
    return null // or a fallback UI
  }

  const { page } = data

  const isContactUs = page.slug === "contact-us"
  const isBlog = page.slug === "blog"
  const isAboutUs = page.slug === "about-us"
  const isAiAutomation = page.slug === "ai-automation-services"

  return (
    <Layout>
      {/* BLOG PAGE */}
      {isBlog && (
        <main className={blogStyles.page}>
          <header className={blogStyles.header}>
           {/* <Heading as="h1">{page.title}</Heading> */} 
            {page.description && <p>{page.description}</p>}
          </header>
<section className={blogStyles.blogContent}>
  <div dangerouslySetInnerHTML={{ __html: page.html }} />
</section>

        </main>
      )}

      {/* CONTACT PAGE */}
    
      {isContactUs && (
        <main className={contactStyles.page}>
          <header className={contactStyles.header}>
            {page.description && <p>{page.description}</p>}
          </header>

          <section className={contactStyles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.html,
              }}
            />
          </section>
        </main>
      )}

      {/* ABOUT PAGE */}
      {isAboutUs && (
        <main className={aboutStyles.page}>
          <header className={aboutStyles.header}>
            {page.description && <p>{page.description}</p>}
          </header>

          <section className={aboutStyles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.html,
              }}
            />
          </section>
        </main>
      )}
 
{/* aiautomation PAGE */} 

      {isAiAutomation && (
        <main className={automationStyles.page}>
          <header className={automationStyles.header}>
            {page.description && <p>{page.description}</p>}
          </header>

          <section className={automationStyles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: page.html,
              }}
            />
          </section>
        </main>
      )}


      {!isBlog && !isContactUs && !isAboutUs && !isAiAutomation &&(
                <main>
          <Box paddingY={5}>
            <Container width="narrow">
             {/*  <Heading as="h1">{page.title}</Heading>*/}
              <div
                dangerouslySetInnerHTML={{
                  __html: page.html,
                }}
              />
            </Container>
          </Box>
        </main>
      )}

{/*

{!isBlog && !isContactUs && !isAboutUs && (
  <main className={automationStyles.page}>
    <div className="wp-page-content">
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  </main>
)}
*/}
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { page } = data
  return <SEOHead {...page} />
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
