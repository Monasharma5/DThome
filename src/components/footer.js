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
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
  Mail,
  Linkedin
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

const socialMedia = {
  GITHUB: { url: "https://github.com", name: "GitHub", icon: <GitHub /> },
  INSTAGRAM: { url: "https://instagram.com", name: "Instagram", icon: <Instagram /> },
  TWITTER: { url: "https://twitter.com", name: "Twitter", icon: <Twitter /> },
  YOUTUBE: { url: "https://youtube.com", name: "YouTube", icon: <Youtube /> },
  FACEBOOK: { url: "https://facebook.com", name: "Facebook", icon: <Facebook /> },
  LINKEDIN: { url: "https://linkedin.com", name: "LinkedIn", icon: <Linkedin /> },
  EMAIL: { url: "mailto:contact@example.com", name: "Email", icon: <Mail /> },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return username ? `${domain}/${username}` : domain
}

const getSocialIcon = ({ service }) => socialMedia[service]?.icon
const getSocialName = ({ service }) => socialMedia[service]?.name

// NEW FOOTER DATA
const data = {
  follow: [
    { service: "GITHUB" },
    { service: "INSTAGRAM" },
    { service: "TWITTER" },
    { service: "YOUTUBE" },
    { service: "FACEBOOK" },
    { service: "LINKEDIN" },
    { service: "EMAIL" },
  ],

  artificial: [
    { text: "AI Services", href: "/ai-services" },
    { text: "LangChain Services", href: "/langchain" },
    { text: "Chatgpt Integration Services", href: "/chatgpt-integration" },
    { text: "AI Chatbot Development", href: "/chatbot-development" },
  ],

  appdev: [
    { text: "Mobile Apps", href: "/mobile-apps" },
    { text: "Web Apps", href: "/web-apps" },
    { text: "IT Outsourcing", href: "/it-outsourcing" },
  ],

  resources: [
    { text: "Contact Us", href: "/contact" },
    { text: "About Us", href: "/about" },
    { text: "Success Stories", href: "/success-stories" },
    { text: "Partnerships", href: "/partnerships" },
    { text: "Client Reviews", href: "/client-reviews" },
  ],

  copyright: "© 2022 Gatsby Inc. All rights reserved",
}

export default function Footer() {
  return (
    <Box as="footer" paddingY={6}>
      <Container>

        <Flex responsive variant="start" gap={5}>

          {/* FOLLOW US */}
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="bold">FOLLOW US</Text>
            <Space size={3} />

            <Flex direction="row" gap={3}>
              {data.follow.map((item, i) => {
                const url = getSocialURL(item)
                return (
                  <IconLink key={i} to={url}>
                    <VisuallyHidden>{getSocialName(item)}</VisuallyHidden>
                    {getSocialIcon(item)}
                  </IconLink>
                )
              })}
            </Flex>
          </Box>

          {/* ARTIFICIAL INTELLIGENCE */}
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="bold">ARTIFICIAL INTELLIGENCE</Text>
            <Space size={3} />
            <Flex direction="column" gap={2}>
              {data.artificial.map((item, i) => (
                <NavLink key={i} to={item.href}>{item.text}</NavLink>
              ))}
            </Flex>
          </Box>

          {/* APP DEVELOPMENT */}
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="bold">APP DEVELOPMENT</Text>
            <Space size={3} />
            <Flex direction="column" gap={2}>
              {data.appdev.map((item, i) => (
                <NavLink key={i} to={item.href}>{item.text}</NavLink>
              ))}
            </Flex>
          </Box>

          {/* RESOURCES */}
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Text variant="bold">RESOURCES</Text>
            <Space size={3} />
            <Flex direction="column" gap={2}>
              {data.resources.map((item, i) => (
                <NavLink key={i} to={item.href}>{item.text}</NavLink>
              ))}
            </Flex>
          </Box>

        </Flex>

        <Flex variant="center" paddingTop={4}>
          <Text variant="small">
            © Copyright 2014-2025 | Deligence Technologies Inc. | All rights reserved.
          </Text>
        </Flex>

      </Container>
    </Box>
  )
}

