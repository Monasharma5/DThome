/*import * as React from "react"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

const data = {
  links: [
    {
      id: 0,
      href: "#!",
      text: "Products",
    },
    {
      id: 1,
      href: "#!",
      text: "Pricing",
    },
    {
      id: 2,
      href: "#!",
      text: "About",
    },
    {
      id: 3,
      href: "#!",
      text: "Blog",
    },
  ],
  meta: [
    {
      id: 0,
      href: "/terms",
      text: "Terms",
    },
    {
      id: 1,
      href: "/privacy",
      text: "Privacy Policy",
    },
  ],
  socialLinks: [
    {
      service: "TWITTER",
      username: "gatsbyjs",
    },
    {
      service: "INSTAGRAM",
      username: "gatsbyjs",
    },
    {
      service: "GITHUB",
      username: "gatsbyjs",
    },
    {
      service: "FACEBOOK",
      username: "gatsbyjs",
    },
    {
      service: "YOUTUBE",
      username: "gatsbyjs",
    },
    {
      service: "TWITCH",
      username: "gatsbyjs",
    },
  ],
  copyright: "© 2022 Gatsby Inc. All rights reserved",
}

export default function Footer(props) {
  const { links, meta, socialLinks, copyright } = data

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
*/
import * as React from "react"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
} from "./ui"

// ---- React Icons (works for SSR + has YouTube + Teams) ----
import { FaGithub, FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa"
import { SiMicrosoftteams } from "react-icons/si"
import { MdEmail } from "react-icons/md"

// ---- Social Definitions ----
const socialMedia = {
  GITHUB: {
    url: "https://github.com/DeligenceTechnologies/",
    name: "GitHub",
    icon: <FaGithub size={20} />,
  },
  INSTAGRAM: {
    url: "https://www.instagram.com/deligencetechnologies/",
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },
  TWITTER: {
    url: "https://twitter.com/DeligenceTech",
    name: "Twitter",
    icon: <FaTwitter size={20} />,
  },
  YOUTUBE: {
    url: "https://www.youtube.com/c/DeligenceTechnologies",
    name: "YouTube",
    icon: <FaYoutube size={20} />,
  },
  FACEBOOK: {
    url: "https://www.facebook.com/deligencetechnologies/",
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },
  LINKEDIN: {
    url: "https://in.linkedin.com/company/deligencetechnologies",
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
  },
  TEAMS: {
    url: "https://teams.microsoft.com/l/chat/0/0?users=sanjay@deligence.com",
    name: "Microsoft Teams",
    icon: <SiMicrosoftteams size={20} />,
  },
  EMAIL: {
    url: "mailto:sales@deligence.com",
    name: "Email",
    icon: <MdEmail size={20} />,
  },
}

const getSocialURL = ({ service }) => socialMedia[service]?.url
const getSocialIcon = ({ service }) => socialMedia[service]?.icon
const getSocialName = ({ service }) => socialMedia[service]?.name

// ---- Footer Navigation ----
const data = {
  follow: [
    { service: "GITHUB" },
    { service: "INSTAGRAM" },
    { service: "TWITTER" },
    { service: "YOUTUBE" },
    { service: "FACEBOOK" },
    { service: "LINKEDIN" },
    { service: "TEAMS" },
    { service: "EMAIL" },
  ],

  artificial: [
    { text: "AI Services", href: "/ai-services" },
    { text: "LangChain Services", href: "/langchain" },
    { text: "ChatGPT Integration Services", href: "/chatgpt-integration" },
    { text: "AI Chatbot Development", href: "/chatbot-development" },
  ],

  appdev: [
    { text: "Mobile Apps", href: "/mobile-apps" },
    { text: "Web Apps", href: "/web-apps" },
    { text: "IT Outsourcing", href: "/it-outsourcing" },
  ],

  resources: [
    { text: "Contact Us", href: "/contact-us" },
    { text: "About Us", href: "/about-us" },
    { text: "Success Stories", href: "/success-stories" },
    { text: "Partnerships", href: "/partnerships" },
    { text: "Client Reviews", href: "/client-reviews" },
  ],

  copyright: "© Copyright 2014–2025 | Deligence Technologies Inc. | All rights reserved.",
}

export default function Footer() {
  return (
    <Box
      as="footer"
      paddingY={6}
      style={{ background: "#4e88c7", color: "#fff" }}
    >
      <Container>

        {/* GRID - 4 COLUMN FOOTER */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
            alignItems: "start",
          }}
        >

          {/* FOLLOW US */}
          <div>
            <Text variant="bold">FOLLOW US</Text>
            <Space size={3} />

            <Flex gap={3} style={{ flexWrap: "wrap" }}>
              {data.follow.map((item, i) => (
                <IconLink
                  key={i}
                  to={getSocialURL(item)}
                  aria-label={getSocialName(item)}
                  style={{ color: "#fff" }}
                >
                  {getSocialIcon(item)}
                </IconLink>
              ))}
            </Flex>
          </div>

          {/* ARTIFICIAL INTELLIGENCE */}
          <div>
            <Text variant="bold">ARTIFICIAL INTELLIGENCE</Text>
            <Space size={3} />
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {data.artificial.map((item, i) => (
                <NavLink key={i} to={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>

          {/* APP DEVELOPMENT */}
          <div>
            <Text variant="bold">APP DEVELOPMENT</Text>
            <Space size={3} />
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {data.appdev.map((item, i) => (
                <NavLink key={i} to={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <Text variant="bold">RESOURCES</Text>
            <Space size={3} />
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {data.resources.map((item, i) => (
                <NavLink key={i} to={item.href}>
                  {item.text}
                </NavLink>
              ))}
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <Space size={4} />
        <Flex variant="center">
          <Text variant="small">{data.copyright}</Text>
        </Flex>

      </Container>
    </Box>
  )
}
