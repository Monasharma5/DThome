import * as React from "react"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import BrandLogo from "./brand-logo"

const data = {
  navItems: [
    {
      id: 0,
      navItemType: "Link",
      href: "/ai-services",
      text: "AI Services",
      children: [
        { href: "/ai-agent-development", text: "AI Agent Development" },
        { href: "/ai-automation-services", text: "AI Automation Services" },
        { href: "/ai-integration-services", text: "AI Integration Services" },
        { href: "/ai-services/ai-chatbot-development-services", text: "AI Chatbot Development"},
        { href: "/ai-services/chatgpt-integration", text: "Chatbot Integration"}
      ],
    },
    {
      id: 1,
      navItemType: "Link",
      href: "#!",
      text: "Services",
      children: [
        { href: "/web-development", text: "Web Development" },
        { href: "/mobile-app", text: "Mobile App" }
      ]
    },
    {
      id: 2,
      navItemType: "Link",
      href: "#!",
      text: "Industries",
      children: [
        { href: "/healthcare", text: "Healthcare" },
        { href: "/finance", text: "Finance" }
      ]
    },
    {
      id: 3,
      navItemType: "Link",
      href: "/portfolio",
      text: "Portfolio",
      
    },
    {
      id: 4,
      navItemType: "Link",
      href: "#!",
      text: "Technologies",
      children: [
        { href: "/langchain", text: "LangChain" },
        { href: "/flutter", text: "Flutter" }
      ]
    },
  
    {
      id: 5,
      navItemType: "Link",
      href: "/contact-us",
      text: "Contact Us",
    },
    {
      id: 6,
      navItemType: "Link",
      href: "/about-us",
      text: "About Us",
    },
  ],
  cta: {
    href: "/contact",
    text: "Contact",
  },
}

export default function Header() {
  const { navItems, cta } = data
  const [isOpen, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <header>
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <nav>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    <NavLink to={navItem.href}>{navItem.text}</NavLink>
                  </li>
                ))}
            </FlexList>
          </nav>
          <div>{cta && <Button to={cta.href}>{cta.text}</Button>}</div>
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />
            <div>
              {cta && (
                <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                  {cta.text}
                </Button>
              )}
            </div>
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  <NavLink to={navItem.href} className={mobileNavLink}>
                    {navItem.text}
                  </NavLink>
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
