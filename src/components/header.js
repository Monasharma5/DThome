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
  dropdownWrapper,
  dropdownMenu,
  dropdownItem,
  showOnHover,
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
        { href: "/ai-chatbot-development-services", text: "AI Chatbot Development" },
        { href: "/chatgpt-integration-services", text: "Chatbot Integration" },
      ],
    },
    {
      id: 1,
      navItemType: "Link",
      href: "#!",
      text: "Services",
      children: [
        { href: "/web-apps", text: "Web Development" },
        { href: "/mobile-apps", text: "Mobile App" },
      ],
    },
    {
      id: 2,
      navItemType: "Link",
      href: "#!",
      text: "Industries",
      children: [
        { href: "/healthcare", text: "Healthcare" },
        { href: "/ai-agent-for-insurance", text: "Insurance" },
        { href: "/edutech", text: "Edutech" },
        { href: "/ai-agent-for-real-estate", text: "Real Estate" },
      ],
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
        { href: "/langchain-services", text: "LangChain" },
        { href: "/salesforce", text: "Salesforce" },  
        { href: "/mernstack-development", text: "Mernstack" },
        { href: "/meteorjs-development", text: "Meteor JS" },
        { href: "/flutter-services", text: "Flutter" },
        { href: "/zoho-services", text: "Zoho" },
      ],
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

  // NEW: state for mobile dropdown
  const [openDropdown, setOpenDropdown] = React.useState(null)

  React.useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "visible"
  }, [isOpen])

  return (
    <header>
      {/* DESKTOP NAV */}
      <Container className={desktopHeaderNavWrapper}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <img 
  src="https://www.deligence.com/wp-content/uploads/2022/09/Deligence-logo-file-1-600x208-1.webp"
  alt="Deligence Logo"
  style={{ height: "50px", width: "auto" }}
/>
          </NavLink>

          <nav>
            <FlexList gap={4}>
              {navItems.map((navItem) => (
                
<li key={navItem.id} className={dropdownWrapper}>
  <NavLink to={navItem.href}>{navItem.text}</NavLink>

  {navItem.children && (
    <ul className={`${dropdownMenu} ${showOnHover}`}>
      {navItem.children.map((child, index) => (
        <li key={index}>
          <NavLink to={child.href} className={dropdownItem}>
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

      {/* MOBILE NAV HEADER */}
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span className={mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]}>
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>

          <Flex>
            <Space />
            {cta && (
              <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                {cta.text}
              </Button>
            )}
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => {
                  setOpen(!isOpen)
                  setOpenDropdown(null) // reset dropdown when menu closes
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
  >
    {navItem.text}
    {navItem.children && <span>{openDropdown === navItem.id ? "▲" : "▼"}</span>}
  </div>

  {navItem.children && openDropdown === navItem.id && (
    <ul style={{ paddingLeft: "16px", marginTop: "8px" }}>
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
