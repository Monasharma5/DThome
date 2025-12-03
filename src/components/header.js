/*import * as React from "react"
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
    href: "/contact-us",
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
             //     <li key={navItem.id}>
             //       <NavLink to={navItem.href}>{navItem.text}</NavLink>
            //   </li>
            <li key={navItem.id} className="relative group">
  <NavLink to={navItem.href}>
    {navItem.text}
  </NavLink>

  //{ ▼ DROPDOWN MENU }
  {navItem.children && (
    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50 min-w-[180px]">
      {navItem.children.map((child, index) => (
        <li key={index}>
          <NavLink
            to={child.href}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {child.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )}
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
              //  <li key={navItem.id}>
              //   <NavLink to={navItem.href} className={mobileNavLink}>
              //     {navItem.text}
              //    </NavLink>
              //  </li>
              <li key={navItem.id}>
  <div
    className={`${mobileNavLink} flex justify-between items-center`}
    onClick={() => setOpenDropdown(openDropdown === navItem.id ? null : navItem.id)}
  >
    {navItem.text}
    {navItem.children && <span>{openDropdown === navItem.id ? "▲" : "▼"}</span>}
  </div>

 // { MOBILE SUBMENU }
  {navItem.children && openDropdown === navItem.id && (
    <ul className="ml-4 mt-1">
      {navItem.children.map((child, index) => (
        <li key={index}>
          <NavLink to={child.href} className={mobileNavLink}>
            {child.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )}
</li>

              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
*/
import React from "react"
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
  desktopHeaderOuter,
  desktopHeaderInner,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
  mobileNavOverlay,
  mobileNavLink,
  dropdownWrapper,
  dropdownMenu,
  dropdownItem,
  showOnHover,
} from "./header.css"

const data = {
  navItems: [
    {
      id: 0,
      navItemType: "Link",
      href: "/ai-services",
      text: "AI Services",
      children: [
        { id: "ai-1", href: "/ai-agent-development", text: "AI Agent Development" },
        { id: "ai-2", href: "/ai-automation-services", text: "AI Automation Services" },
        { id: "ai-3", href: "/ai-integration-services", text: "AI Integration Services" },
        { id: "ai-4", href: "/ai-chatbot-development-services", text: "AI Chatbot Development" },
        { id: "ai-5", href: "/chatgpt-integration-services", text: "Chatbot Integration" },
      ],
    },
    {
      id: 1,
      navItemType: "Link",
      href: "#!",
      text: "Services",
      children: [
        { id: "srv-1", href: "/web-apps", text: "Web Development" },
        { id: "srv-2", href: "/mobile-apps", text: "Mobile App" },
      ],
    },
    {
      id: 2,
      navItemType: "Link",
      href: "#!",
      text: "Industries",
      children: [
        { id: "ind-1", href: "/healthcare", text: "Healthcare" },
        { id: "ind-2", href: "/ai-agent-for-insurance", text: "Insurance" },
        { id: "ind-3", href: "/edutech", text: "Edutech" },
        { id: "ind-4", href: "/ai-agent-for-real-estate", text: "Real Estate" },
      ],
    },
    { id: 3, navItemType: "Link", href: "/portfolio", text: "Portfolio" },
    {
      id: 4,
      navItemType: "Link",
      href: "#!",
      text: "Technologies",
      children: [
        { id: "tech-1", href: "/langchain-services", text: "LangChain" },
        { id: "tech-2", href: "/salesforce", text: "Salesforce",
           children: [
        { id: "sf-1", href: "/salesforce/sales-cloud", text: "Sales Cloud" },
        { id: "sf-2", href: "/salesforce/service-cloud", text: "Service Cloud" },
        { id: "sf-3", href: "/salesforce/experience-cloud", text: "Experience Cloud" },
        { id: "sf-4", href: "/salesforce/managed-services", text: "Managed Services" },
      ],
    },
        { id: "tech-3", href: "/mernstack-development", text: "Mernstack" },
        { id: "tech-4", href: "/meteorjs-development", text: "Meteor JS" },
        { id: "tech-5", href: "/flutter-services", text: "Flutter" },
        { id: "tech-6", href: "/zoho-services", text: "Zoho" },
      ],
    },
    { id: 5, navItemType: "Link", href: "/contact-us", text: "Contact Us" },
    { id: 6, navItemType: "Link", href: "/about-us", text: "About Us" },
  ],
  cta: {
    href: "/contact-us",
    text: "Contact",
  },
}

export default function Header() {
  const { navItems, cta } = data
  const [isOpen, setOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(null)

  React.useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "visible"
  }, [isOpen])

  return (
    <header>
      {/* FULL WIDTH BACKGROUND (outer) */}
      <div className={desktopHeaderOuter}>

        {/* content kept centered by Container */}
        <Container className={desktopHeaderInner}>
          <Space size={2} />
          <Flex variant="spaceBetween" align="center">
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <img
                src="https://www.deligence.com/wp-content/uploads/2022/09/Deligence-logo-file-1-600x208-1.webp"
                alt="Deligence Logo"
                style={{ height: 50, width: "auto", display: "block" }}
              />
            </NavLink>

            {/* Desktop navigation - hidden on small screens by desktopHeaderNavWrapper */}
            <nav className={desktopHeaderNavWrapper} aria-label="Main navigation">
              <FlexList gap={4}>
                {navItems.map((navItem) => (
                  <li key={navItem.id} className={dropdownWrapper}>
                    <NavLink to={navItem.href}>{navItem.text}</NavLink>

                    {navItem.children && (
                      <ul className={`${dropdownMenu} ${showOnHover}`}>
                        {navItem.children.map((child) => (
                          <li key={child.id}>
                            {/* NOTE: If your NavLink component doesn't forward className,
                                apply styles on a wrapper <a> or update NavLink to accept className */}
                            <a href={child.href} className={dropdownItem}>
                              {child.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </FlexList>
            </nav>

            {/* CTA */}
            <div>
              {cta && (
                <Button
                  to={cta.href}
                  style={{
                    backgroundColor: "#ffa737",
                    borderColor: "#ffa737",
                    color: "white",
                  }}
                >
                  {cta.text}
                </Button>
              )}
            </div>
          </Flex>
        </Container>
      </div>

      {/* MOBILE header (keeps your previous mobile code) */}
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span className={mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]}>
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              {/* you may keep BrandLogo or image */}
              <img
                src="https://www.deligence.com/wp-content/uploads/2022/09/Deligence-logo-file-1-600x208-1.webp"
                alt="Deligence Logo"
                style={{ height: 40, width: "auto", display: "block" }}
              />
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
                onClick={() => {
                  setOpen(!isOpen)
                  setOpenDropdown(null)
                }}
                className={mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]}
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <div
                    className={`${mobileNavLink} flex justify-between items-center`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === navItem.id ? null : navItem.id)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => {}}
                  >
                    {navItem.text}
                    {navItem.children && <span>{openDropdown === navItem.id ? "▲" : "▼"}</span>}
                  </div>

                  {navItem.children && openDropdown === navItem.id && (
                    <ul style={{ paddingLeft: 16, marginTop: 8 }}>
                      {navItem.children.map((child) => (
                        <li key={child.id}>
                          <NavLink to={child.href} className={mobileNavLink}>
                            {child.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
