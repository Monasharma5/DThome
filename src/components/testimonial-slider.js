import * as React from "react"
import * as styles from "../styles/pages/testimonial-slider.css"

const testimonials = [
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-1.webp",
      headline: "They delivered what we needed and more.", 
    quote:
      "After implementing the AI feature, the client noticed an 85%  increases in the accuracy of filling job post. The team manifested their professionalism by always adhering to distinguished them from other providers.",
    name: "Michael Maloney",
    role: "CEO & Founder, Fero (Scottsdale, Arizona)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
      headline: "They were easy to work with and always explained things simply.",
    quote:
      "Deligence Technologies Inc. delivered a functional solution on time, enabling the client to create social media posts in under 30 minutes. The team was easy to work with, highly responsive, and attentive to feedback. Their deep understanding of the client's industry was key to the project's success.",
    name: "Robert Ritchie",
    role: "Founder & CEO, American Integrity Insurance Company (Tampa, Florida)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
      headline: "They always  made sure we understand what was going on.",
    quote:
      "Deligence Technologies Inc. helped that client quality leads faster, allowing the sales team to focus on real buyers. the team quickly send weekly updates, fixed issues, and delivered on time. Moreover, their ability to understand  the client s needs and provide a more  human-like call flow stood out.",
    name: "Scott Lowman",
    role: "Product Marketing Director, Ariane Systems (France)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
    quote:
      "Traffic to the website has doubled, and the number of contracts through the website has quadrupled. Although the quality of their work could be improved in",
    name: "Michael Zetterlund",
    role: "CTO, SaaS Company",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
      headline: "Mobile App Dev & Branding for Startup",
    quote:
      "Additionally, they’ve helped us build the app’s gifting functionality, which is a huge differentiator for our company. Deligence Technologies Inc. has delivered an app that looks, feels, and functions according to the client’s requirements. The client is impressed with the team’s dedication to delivering solid results. They’ve used Upwork, GitHub, and Google Workspace to manage tasks and communicate openly.",
    name: "Kirk Kimerer",
    role: "Chief Information Officer, Cuddi (Phoenix, Arizona)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
    quote:
      "In seeking offshore help I gave 3 companies the exact same 2-week test task. Deligence achieved the highest quality when the code was reviewed by our senior developer",
    name: "Shane Schieffer",
    role: "Founder & CEO, Gusto Technologies, Inc. (USA)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
    quote:
      "I consider them part of my website team, and know I can count on them for fast, high-quality work. Deligence Technologies Pvt. Ltd. substantially decreased the website’s bounce rate. Attentive communication and prompt delivery make them a reliable partner.",
    name: "Theresa Jorgensen",
    role: "Owner, SixSuitcaseTravel (USA)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
    quote:
      "The finished platform performed reliably and demonstrated excellent fine-tuning of the original vision. Deligence Technologies’ clear communication.",
    name: "Bill Quimby",
    role: "President, Tollfreenumbers.com (USA)",
  },
  {
    image:
      "https://www.deligence.com/wp-content/uploads/2023/01/testimonial-2.webp",
    quote:
      "Word for Windows / Office 365 JavaScript API Add-On Deligence Technologie's team member joined the team partially through the project and quickly proved his high level of talent and dedication by quickly meeting our goals and making additional contributions that exceeded our expectations. I highly recommend him, and will be looking forward to working with him again in the future.",
    name: "Stephen O'Brien",
    role: "Founder, Doqumi Inc (Australia)",
  },
]

export default function TestimonialSlider() {
  const [active, setActive] = React.useState(0)

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>What Our Clients Say</h2>

      <img
        src={testimonials[active].image}
        alt={testimonials[active].name}
        className={styles.avatar}
      />

      <p className={styles.headline}>
        “{testimonials[active].headline}”
      </p>

      <p className={styles.quote}>
        “{testimonials[active].quote}”
      </p>

      <p className={styles.author}>
        <strong>{testimonials[active].name}</strong>,{" "}
        {testimonials[active].role}
      </p>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === active ? styles.activeDot : ""
            }`}
            onClick={() => setActive(index)}
            aria-label="testimonial navigation"
          />
        ))}
      </div>
    </section>
  )
}
