import * as React from "react"
import Layout from "../components/layout"
import SEOHead from "../components/head"

import AboutHero from "../components/about-hero"
import AboutLogoList from "../components/about-logo-list"
import AboutLeadership from "../components/about-leadership"
import AccordionCard from "../components/accordion-card"

import { Section, Container, Heading, Text, FlexList, Box } from "../components/ui"
import * as styles from "../styles/pages/about-us.css"

export default function AboutUsPage() {
  const [openIndex, setOpenIndex] = React.useState(-1)
  return (
    <Layout>
      <main className={styles.page}>

        {/* HERO */}
        <AboutHero
          heading="About Deligence Technologies"
          text="Welcome to Deligence Technologies! We are a technology solutions provider with a global presence, including Deligence Technologies Inc., headquartered in Toronto, Canada (founded in May 2021), and Deligence Technologies Pvt. Ltd., our development office in New Delhi, India. With a track record of serving North American clients since 2014, we have grown to a team of 40 full-time employees.

Our core mission is to empower businesses, especially Small and Medium-sized Enterprises (SMEs) in North America, to thrive by using cutting-edge technology, with a significant focus on Artificial Intelligence."
          ctaText="Schedule a Free Consultation"
          ctaLink="/contact-us"

        />
{/* AI SOLUTIONS CARDS */}
         <Section>
  <Container>
    <div className={styles.twoColumn}>

      <AccordionCard
        title="AI-Powered Solutions & Expert Development"
        isOpen={openIndex === 0}
        onToggle={() =>
          setOpenIndex(prev => (prev === 0 ? -1 : 0))
        }
      >
        <p><strong>AI Agent Development</strong></p>
        <p>Crafting intelligent agents to automate tasks...</p>

        <p><strong>AI Chatbot Development</strong></p>
        <p>Building smart chatbots...</p>

        <p><strong>AI Voice Calling Agents</strong></p>
        <p>Developing AI-powered voice agents...</p>
      </AccordionCard>

      <AccordionCard
        title="Comprehensive Digital Solutions"
        isOpen={openIndex === 1}
        onToggle={() =>
          setOpenIndex(prev => (prev === 1 ? -1 : 1))
        }
      >
        <p><strong>Web & Mobile App Development</strong></p>
        <p>Creating robust applications...</p>

        <p><strong>Digital Marketing</strong></p>
        <p>Optimization for ChatGPT, Gemini...</p>

        <p><strong>UI/UX Design</strong></p>
        <p>Designing intuitive experiences...</p>
      </AccordionCard>

    </div>
  </Container>
</Section>


        {/* AI SOLUTIONS CARDS 
        <Section>
  <Container>
    <div className={styles.twoColumn}>
      <div className={styles.card}>
        <h3>AI-Powered Business & Expert Development</h3>
        <p>
        <strong>AI Agent Development</strong></p>
        <p>Crafting intelligent agents to automate tasks and enhance productivity. We work with technologies like N8N, CrewAI, LangGraph, and Kaiban JS.</p>

        <p><strong>AI Chatbot Development</strong></p>
       <p>Building smart chatbots for enhanced customer engagement and support.</p>

        <p><strong>AI Voice Calling Agents</strong></p>
       <p>Developing AI-powered voice agents using platforms like Vapi, Retell AI, and Synthflow.</p>

      </div>

      <div className={styles.card}>
        <h3>Comprehensive Digital Solutions</h3>
        <p>
        <strong>Web App & Mobile App Development</strong></p>
       <p> Creating robust and user-friendly applications using front-end technologies like React.js and Flutter, and back-end frameworks including Node.js, Next.js, Django/FastAPI, and Python.</p>

        <p><strong>Digital Marketing</strong></p>
        <p>Offering strategies that include Optimization for ChatGPT, Gemini, and other LLMs to boost your online presence.</p>

       <p><strong>UI/UX Design</strong></p>
        <p>Designing intuitive and engaging user experiences.</p>

        <p><strong>Database and Automation</strong></p>
        <p>We have experience with various databases like MongoDB, MySQL/PostgreSQL, Airtable, and Firebase, and cloud platforms including AWS, Azure, and GCP. We also work with automation platforms like Zapier and Make.com.</p>
        
      </div>
    </div>
  </Container>
</Section>*/}

<Section className="about-logo-list">
        {/* PARTNERS */}
        <AboutLogoList
          heading="Our Partners"
          logos={[
             {
      id: "monday",
      alt: "Monday.com",
      src: "https://www.deligence.com/wp-content/uploads/2025/06/Monday_logo.svg-200x36.webp",
    },
            { id: "2", alt: "Make", src: "https://www.deligence.com/wp-content/uploads/2025/06/Make-Logo-200x41.webp", },
            { id: "3", alt: "Retail AI", src: "https://www.deligence.com/wp-content/uploads/2025/06/retailai-1-200x41.webp", },
            { id: "4", alt: "Freshworks", src: "https://www.deligence.com/wp-content/uploads/2022/09/mangodb-200x81.jpg", },
            { id: "5", alt: "Salesforce", src: "https://www.deligence.com/wp-content/uploads/2024/03/Salesforce.com_logo.svg-200x140.webp", },
            { id: "6", alt: "Zapier", src: "https://www.deligence.com/wp-content/uploads/2025/06/zapier-2-200x54.webp", },
            { id: "7", alt: "Zoho", src: "https://www.deligence.com/wp-content/uploads/2023/12/Zoho-Partner-200x96.webp", },
          ]}
        />
        </Section>

        {/* INDUSTRIES */}
         <Section>
  <Container>
    <Heading align="center">Industries We Serve</Heading>
    <div className={styles.twoColumn}>
      <div className={styles.card}>
        <Text>✔ E-Learning & EdTech</Text>
              <Text>✔ Healthcare, including Medical Tourism</Text>
              <Text>✔ Construction, including Roofing</Text>
              <Text>✔ Mortgage Banking</Text>
      </div>

      <div className={styles.card}>
        
        <Text>✔ Real Estate</Text>
              <Text>✔ Transportation & Logistics</Text>
              <Text>✔ Travel & Tourism</Text>
              <Text>✔ Health & Wellness, including Meditation Apps</Text>

      </div>
    </div>
  </Container>
</Section>
    
        {/* WHY PARTNER */}
        <Section className={styles.why}>
          <Container>
            <Heading>Why Partner With Deligence Technologies?</Heading>

            <Box className={styles.whyItem}>
              <h3>Proven Expertise & Track Record</h3>
              <Text>With experience serving clients since 2014, we have a demonstrated history of delivering successful projects. Our work on platforms like PlayFactile, used by over 2 million users, showcases our capability in development, UI/UX, and digital marketing, leading to significant client growth.</Text>
            </Box>

            <Box className={styles.whyItem}>
              <h3>Client Success Is Our Priority</h3>
              <Text>We are deeply committed to your success. We focus on understanding your vision, objectives, and goals to ensure that the solutions we provide help you win. Our development of a smart chatbot for Latte Art Factory enhanced their customer support and streamlined CRM processes.</Text>
            </Box>

            <Box className={styles.whyItem}>
              <h3>Innovation & Continuous Learning</h3>
              <Text>We stay at the forefront of technology, continuously learning and adopting new tools and techniques, especially in the rapidly evolving field of AI. This ensures we deliver modern and effective solutions, such as leveraging OpenAI/ChatGPT for features like AutoGen in PlayFactile and developing AI Sales Call Agents.</Text>
            </Box>

            <Box className={styles.whyItem}>
              <h3>Attention To Detail</h3>
              <Text>We believe in thoroughness and precision. Our teams work diligently to address challenges and ensure that every project meets high standards, leading to client satisfaction.</Text>
            </Box>

            <Box className={styles.whyItem}>
              <h3>Global Team, Local Expertise</h3>
              <Text>Our Toronto headquarters and New Delhi development office work in synergy to provide top-tier services with a focus on the North American market.</Text>
                </Box>
          </Container>
        </Section>

        {/* VISION */}
        <Section>
          <Container center>
            <Heading>Our Vision</Heading>
            <Text center>Health, Wealth, and Happiness for all.</Text>
          </Container>
        </Section>

        {/* VALUES */}
        <Section className={styles.values}>
          <Container>
            <Heading align="center">Our Values</Heading>
            <div className={styles.twoColumn}>
      <div className={styles.card1}>
        <h3>Equality</h3>
        <p>We provide equal opportunity to all. Every team member has the right to raise their voice.</p>
      </div>

      <div className={styles.card1}>
        <h3>Customer Success</h3>
        <p>We’re committed to our client’s success. We focus on the client’s vision, objectives, and goals. We ensure that our client is winning.</p>
      </div>
    
    <div className={styles.card1}>
        <h3>Continuous Learning & Growth</h3>
        <p>We learn new technologies and changes in our existing technologies. We keep ourselves up to date to ensure that we are serving ourselves & our clients with the help of the latest tools & technologies..</p>
      </div>

      <div className={styles.card1}>
        <h3>Attention to details</h3>
        <p>We put our attention on details. We work thoroughly to ensure we find a way to fix all the challenges/issues. Our Managers ensure that they and their team members are satisfied with their work, and everyone is working with full enthusiasm.</p>
      </div>
    </div>

          </Container>
        </Section>

        {/* FOUNDER */}
         <div className={styles.twoColumn}>
      <div className={styles.founder}>
        <h3>Meet Our Person Behind Deligence</h3>
        <h4><b>Sanjay Kumar</b></h4>
        <p>Under the leadership of Founder & CEO, Mr. Sanjay Kumar, Deligence Technologies thrives. Mr. Kumar brings over 21 years of IT experience, with educational qualifications including an MCA and an MBA in Finance. His expertise is further underscored by his Salesforce Sales Cloud and Service Cloud Consultant certifications, which inform the company’s strategic direction. He has also been pivotal in establishing key partnerships with Monday.com, Retell AI, Make.com, MongoDB, Salesforce, and Zoho.</p>
 { /*      <AboutLeadership
          kicker="Founder"
          heading="Meet Our Person Behind Deligence"
          content={[
            {
              id: "1",
              name: "Sanjay Kumar",
              jobTitle: "Founder & CEO",
              image: null,
            },
          ]}
        />*/}
      </div>

      <div className={styles.founder}>
         <img
      src="https://www.deligence.com/wp-content/uploads/2025/06/Sanjay-Kumar-800x533.webp"
      alt="Sanjay Kumar"
    />
      </div>
    </div>

 {/* Solutions */}
<Section className={styles.sol}>
          <Container>
<h2>See Our Solutions in Action</h2>
<p>Discover how we’ve helped businesses transform and achieve their goals. We invite you to explore our diverse portfolio of successful projects, including innovative educational platforms, AI-driven customer support chatbots, and automated business solutions for various industries.</p>
<ul>
<li>We’ve helped Factile grow with features like AutoGen, which uses OpenAI to automatically generate quiz content: <b><a href="http://playfactile.com/">Factile</a></b></li>
<li>Our AI Sales Call Agent revolutionizes lead management by automatically calling and engaging leads: <b><a href="https://youtu.be/T_ed67MpW0Y">Live Demo</a></b></li>
<li>We’ve also developed AI agents to automate social media content creation and posting: <b><a href="https://www.youtube.com/watch?v=bc-mL9rcMuM">Live Demo</a></b></li>
</ul>
            </Container>
            </Section>
        {/* LIFE AT DELIGENCE */}
        <Section className={styles.gallery}>
          <Container>
            <Heading align="center">Life At Deligence</Heading>
            <Text align="center">
              A glimpse into our culture, celebrations, and teamwork.
            </Text>
            <Box className={styles.galleryGrid} />
          </Container>
        </Section>

        {/* CTA */}
        <Section className={styles.cta}>
          <Container center>
            <h2>Let’s Build The Future Together</h2>
            <p align="center">
              Ready to discuss how our AI expertise and custom development services can elevate your business? Contact us today for a consultation, and let’s explore the possibilities.
            </p>
            <a color="#fff" align="center" href="/contact-us" className={styles.ctaButton}>Contact Us</a>
            
          </Container>
        </Section>

      </main>
    </Layout>
  )
}

export const Head = () => (
  <SEOHead
    title="About Us | Deligence Technologies"
    description="Learn about Deligence Technologies, our vision, values, leadership, and why global businesses trust us."
  />
)
