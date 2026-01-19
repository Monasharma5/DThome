import * as React from "react"
import SEOHead from "../components/head"
import TestimonialSlider from "../components/testimonial-slider"
import * as styles from "../styles/pages/generativeai.css"
import { Section, Container, Heading, Text, FlexList, Box } from "../components/ui"
import{ 
    heroSection,
    heroImageImg,
  heroGrid,
  heroContent,
  heroTitle,
  heroText,
  heroImage,
  trustSection,
  trustGrid,
  clientsSection,
  sectionTitle,
  clientsGrid,
 heroButton,
 heroButtonWrapper,
 aiSolutionsSection,
 aiCard,
 aiSolutionsTitle,
 aiSolutionsGrid,
 aboutSection,
 aboutContainer,
 aboutTitle,
 aboutText,
 aboutButton,
 technologiesSection,
  technologiesHeading,
  technologiesGrid,
  technologyCard,
  technologyImage,
  technologyLabel,
  contactHeading,
} from "../styles/pages/generativeai.css"

export default function GenerativeAIPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className={heroSection}>
        <div className={heroGrid}>
          <div className={heroContent}>
            <h1 className={heroTitle}>
              Generative AI Development Services
            </h1>

            <p className={heroText}>
             <p><i>Transforming Businesses with Technology Since 2014</i></p> 

             <p>We build AI chatbots, smart agents, and custom AI automation tools to make your business faster and smarter. Transforming Businesses with Technology Since 2014</p> 

<p>We offer generative AI development services to help your business grow. We build powerful tools like AI agent, automated systems, and ChatGPT integrations that save time and improve customer service.</p>
            </p>
            <div className={heroButtonWrapper}>
  <a
    href="/contact-us/"
    className={heroButton}
  >
    Get Free Consultation
  </a>
</div>

          </div>

         <div className={heroImage}>
  <img
    src="https://www.deligence.com/wp-content/uploads/2024/08/Deligence-Technology.webp"
    alt="Generative AI Development"
    className={heroImageImg}
  />
</div>

        </div>
      </section>

      {/* TRUST BADGES */}
      <section className={trustSection}>
        <div className={trustGrid}>
          <img src="https://www.deligence.com/wp-content/uploads/2022/10/upwork-1.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/clutch-logo.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/clutch-TOP-1000-COMPANIES.webp"/>
          <img src="https://www.deligence.com/wp-content/uploads/2022/08/rcv.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/02/Zoho-partners.webp" />
        </div>
      </section>

      {/* FEATURED CLIENTS */}
      <section className={clientsSection}>
        <h2 className={sectionTitle}>Featured Clients</h2>
        <p>Some of the organizations that we have worked with</p>

        <div className={clientsGrid}>
          <img src="https://www.deligence.com/wp-content/uploads/2025/08/crewai.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/03/cada-dia.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/Quick-Pay-Logo-2-scaled.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/University_of_Delhi.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/Digital-Onee-scaled.webp" />
          <img src="https://www.deligence.com/wp-content/uploads/2024/09/factile-logo-green.webp" />
        </div>
      </section>

      {/* OUR AI SOLUTIONS */}
<section className={aiSolutionsSection}>
  <h2 className={aiSolutionsTitle}>Our AI Solutions</h2>
  <p>Some of the organizations that we have worked with</p>

  <div className={aiSolutionsGrid}>
    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Chatbot-Development-400x284.webp" alt="AI Chatbots" />
      <h3>AI Chatbot Development</h3>
      <p><b>Smart Chatbots That Talk, Help, and Learn</b></p>
      <p>
        We build custom AI chatbots using advanced technology like GPT-4. These chatbots can answer customer questions, guide users, help students learn, or assist shoppers online. Whether for a website, app, or messaging platform, our chatbots are designed to improve customer support, save time, and give users a better experience—all day, every day.
      </p>
    </div>

    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Integration-Services-400x284.webp" alt="AI Agents" />
      <h3>AI Agent Development</h3>
      <p><b>Connect AI Tools to Your Business Systems</b></p>
      <p>
        Our AI integration services help you plug smart AI features into the systems you already use—like CRMs, websites, apps, or internal tools. We make it easy to bring in language models, automation, and data processing tools, so your team can work faster without changing everything you already have in place.
      </p>
    </div>

    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Automation-Services-400x284.webp" alt="AI Automation" />
      <h3>AI Automation Services</h3>
      <p><b>Let AI Handle Repetitive Work</b></p>
      <p>
         Tired of doing the same tasks over and over? Our AI automation services help businesses save time by using smart systems to do routine jobs—like answering emails, filling out forms, updating records, or sending reports. These automated tools are built to work fast, reduce human errors, and help your team focus on more important work.
      </p>
    </div>

    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Agent-Development.webp" alt="AI Voice Agents" />
      <h3>AI Agents Developement</h3>
      <p><b>Create AI Agents That Think and Act on Their Own</b></p>
      <p>
         We build powerful AI agents that can take actions, make decisions, and complete tasks without needing constant input from a human. These agents can do things like qualify leads, manage schedules, find information, or even respond to support tickets. Think of them as digital workers that help your business run more smoothly.
      </p>
    </div>

    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Integration-Services.webp" alt="Custom AI Solutions" />
      <h3>Chatgpt Integration Services</h3>
      <p><b>Smarter Conversations with GPT-4</b></p>
      <p>
        We help you add ChatGPT to your apps, websites, or internal platforms so users can get fast, accurate answers in a natural, human-like way. From virtual assistants to customer support bots, our ChatGPT integration services are customized to your needs. It’s the easiest way to make your tools smarter and your users happier.
      </p>
    </div>
  </div>
</section>

{/* ABOUT US */}
<section className={aboutSection}>
  <div className={aboutContainer}>
    <h2 className={aboutTitle}>About Deligence Technologies</h2>

    <p className={aboutText}>
      Deligence Technologies is a global technology solutions provider helping
      businesses transform through AI, automation, and modern software
      development. Since 2014, we have been empowering startups and enterprises
      across North America with scalable, intelligent digital solutions.
    </p>

    <p className={aboutText}>
      With expertise in Generative AI, AI agents, chatbots, and custom automation,
      we focus on building future-ready products that improve efficiency, reduce
      costs, and drive measurable growth.
    </p>

    <a href="/about-us" className={aboutButton}>
      Learn More About Us
    </a>
  </div>
</section>

 {/* OUR AI SOLUTIONS */}
<section className={aiSolutionsSection}>
  <h2 className={aiSolutionsTitle}>Our Core Services</h2>
  <p>Tailored solutions to drive your business forward</p>

  <div className={aiSolutionsGrid}>
    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Chatbot-Development-400x284.webp" alt="AI Chatbots" />
      <h3>Custom Mobile App Development</h3>
      <p>
        In mobile app development since 2014, Deligence Technologies helps businesses design and build custom mobile applications that are efficient, affordable, and performance-oriented.
      </p>
    </div>

    <div className={aiCard}>
      <img src="https://www.deligence.com/wp-content/uploads/2025/06/AI-Integration-Services-400x284.webp" alt="AI Agents" />
      <h3>Custom Web App Development</h3>
      <p><b>Connect AI Tools to Your Business Systems</b></p>
      <p>
        Our web application development solutions meet your complex as well as simple requirements. We have expertise in technologies like NodeJS, and ReactJS to deliver top-performing web applications.
      </p>
    </div>
  </div>
</section>

<TestimonialSlider />

{/* WHY CHOOSE US */}
<section className={styles.whySection}>
  <h2 className={styles.whyTitle}>Why Choose Us</h2>

  <p className={styles.whyText}>
    We have 10+ years of experience helping businesses change with technology.
    We develop mobile apps, web apps, AI agents, AI automation and ChatGPT
    integration to make sure our clients succeed in the digital world.
    We’ve worked with many different kinds of companies and have a proven
    track record of making things work better and coming up with new ideas.
  </p>

  <div className={styles.statsGrid}>
    <div className={styles.statItem}>
      <span className={styles.statNumber}>50+</span>
      <span className={styles.statLabel}>Developers</span>
    </div>

    <div className={styles.statItem}>
      <span className={styles.statNumber}>200+</span>
      <span className={styles.statLabel}>Project Delivered</span>
    </div>

    <div className={styles.statItem}>
      <span className={styles.statNumber}>20+</span>
      <span className={styles.statLabel}>Turnkey Applications</span>
    </div>

    <div className={styles.statItem}>
      <span className={styles.statNumber}>10+</span>
      <span className={styles.statLabel}>Years of Experience</span>
    </div>
  </div>
</section>

{/* TECHNOLOGIES SECTION */}
<section className={technologiesSection}>
  <h2 className={technologiesHeading}>
    Technologies We Are Working On
  </h2>

  <div className={technologiesGrid}>
    {[
      {
        name: "MeteorJS",
        img: "https://www.deligence.com/wp-content/uploads/2024/03/meteor-js-icon.webp",
      },
      {
        name: "Flutter",
        img: "https://www.deligence.com/wp-content/uploads/2024/03/Flutter_logo.svg.webp",
      },
      {
        name: "AWS",
        img: "https://www.deligence.com/wp-content/uploads/2025/06/AWS-200x120.webp",
      },
      {
        name: "Python",
        img: "https://www.deligence.com/wp-content/uploads/2025/06/Python-scaled.webp",
      },
      {
        name: "Make",
        img: "https://www.deligence.com/wp-content/uploads/2025/06/Make-Logo.webp",
      },
      {
        name: "LangChain",
        img: "https://www.deligence.com/wp-content/uploads/2024/03/1684267676484.webp",
      },
      {
        name: "MernStack",
        img: "https://www.deligence.com/wp-content/uploads/2024/03/MERN-logo.webp",
      },
      {
        name: "ChatGPT",
        img: "https://www.deligence.com/wp-content/uploads/2024/03/ChatGPT.png",
      },
      {
        name: "Open AI",
        img: "https://www.deligence.com/wp-content/uploads/2025/06/OpenAI.webp",
      },
      {
        name: "Retell AI",
        img: "https://www.deligence.com/wp-content/uploads/2025/06/retailai-1.webp",
      },
    ].map(({ name, img }) => (
      <div className={technologyCard} key={name}>
        <img
          src={img}
          alt={name}
          className={technologyImage}
          loading="lazy"
        />
        <span className={technologyLabel}>{name}</span>
      </div>
    ))}
  </div>
</section>
<section>
  <h2 className={contactHeading}>
    Get In Touch
  </h2>
          {/* CONTACT FORM */}
          <article>
            <form
              className="form contact-form"
              action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              method="POST"
            >
              {/* Required Salesforce Hidden Fields */}
              <input type="hidden" name="oid" value="00D5g000005H9ev" />
              <input
                type="hidden"
                name="retURL"
                value="https://www.deligence.com/thank-you/"
              />

              {/* First Name */}
              <div className="form-row">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  maxLength="40"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-row">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  maxLength="80"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  maxLength="80"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  maxLength="20"
                  required
                />
              </div>

              {/* How can we help you? */}
              <div className="form-row">
                <label htmlFor="00N5g00000WltMz">How can we help you?</label>
                <select id="00N5g00000WltMz" name="00N5g00000WltMz">
                  <option value="">--None--</option>
                  <option value="AI Services">AI Services</option>
                  <option value="Mobile App Consultation">
                    Mobile App Consultation
                  </option>
                  <option value="Web App Consultation">
                    Web App Consultation
                  </option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="EduTech">EduTech</option>
                  <option value="Any Other Query">Any Other Query</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-row">
                <label htmlFor="description">Message</label>
                <textarea
                  name="description"
                  id="description"
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="form-row">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LfFPhkbAAAAAAFeuRG0XGEZIFTuBHw-WjdKuoDk"
                ></div>
              </div>

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>

    </main>
  )
}
