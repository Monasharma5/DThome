/*import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// DESKTOP HEADER WRAPPER (background + text color)
export const desktopHeaderWrapper = style({
  backgroundColor: "#0C2340",
  paddingTop: theme.space[4],
  paddingBottom: theme.space[4],
  color: "white",
})

// Make ALL nav links white (valid)
export const desktopNavLink = style({
  color: "white",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      opacity: 0.8,
    },
  },
})

export const desktopHeaderNavWrapper = style({
  position: "relative",
  zIndex: 1,
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
      paddingTop: theme.space[4],
    },
  },
})

const mobileHeaderNavWrapperBase = style({
  display: "block",
  position: "relative",
  paddingTop: theme.space[3],
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileHeaderNavWrapper = styleVariants({
  open: [
    mobileHeaderNavWrapperBase,
    { background: theme.colors.primary },
  ],
  closed: [mobileHeaderNavWrapperBase],
})

export const mobileNavSVGColorWrapper = styleVariants({
  primary: [{ color: theme.colors.primary }],
  reversed: [{ color: theme.colors.background }],
})

export const mobileNavOverlay = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  paddingTop: theme.space[4],
  background: theme.colors.primary,
  zIndex: 1,
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileNavLink = style({
  display: "block",
  color: theme.colors.background,
  fontSize: theme.fontSizes[4],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

// Dropdown wrapper
export const dropdownWrapper = style({
  position: "relative",
  listStyle: "none",
})

// Dropdown menu
export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#4e88c7",
  padding: "8px 0",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "6px",
  minWidth: "200px",
  zIndex: 100,
  display: "none",
  listStyle: "none",
  margin: 0,
  paddingLeft: 0,
})

// Show dropdown on hover
export const showOnHover = style({
  selectors: {
    [`${dropdownWrapper}:hover &`]: {
      display: "block",
    },
  },
})

// Dropdown item
export const dropdownItem = style({
  display: "block",
  padding: "8px 16px",
  color: "#fff",
  fontSize: theme.fontSizes[2],
  textDecoration: "none",
  selectors: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
      color: "#000",
    },
  },
})
*/
import { style, styleVariants, globalStyle } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// ================= MOBILE + DESKTOP WRAPPERS =================

export const desktopHeaderNavWrapper = style({
  position: "relative",
  zIndex: 1,
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
      paddingTop: theme.space[4],
    },
  },
})

const mobileHeaderNavWrapperBase = style({
  display: "block",
  position: "relative",
  paddingTop: theme.space[3],
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileHeaderNavWrapper = styleVariants({
  open: [
    mobileHeaderNavWrapperBase,
    { background: theme.colors.primary },
  ],
  closed: [mobileHeaderNavWrapperBase],
})

export const mobileNavSVGColorWrapper = styleVariants({
  primary: [{ color: theme.colors.primary }],
  reversed: [{ color: theme.colors.background }],
})

export const mobileNavOverlay = style({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  paddingTop: theme.space[4],
  background: theme.colors.primary,
  zIndex: 1,
  "@media": {
    [media.small]: {
      display: "none",
    },
  },
})

export const mobileNavLink = style({
  display: "block",
  color: theme.colors.background,
  fontSize: theme.fontSizes[4],
  padding: `${theme.space[2]} ${theme.space[4]}`,
})

// ================= DROPDOWN =================

export const dropdownWrapper = style({
  position: "relative",
  listStyle: "none",
})

export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#4e88c7",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "6px",
  minWidth: "200px",
  zIndex: 100,
  display: "none",
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
})

// SHOW ON HOVER (DESKTOP)
export const showOnHover = style({
  selectors: {
    [`${dropdownWrapper}:hover &`]: {
      display: "block",
    },
  },
})

export const dropdownItem = style({
  display: "block",
  padding: "8px 16px",
  color: "#fff",
  fontSize: theme.fontSizes[2],
  textDecoration: "none",

  selectors: {
    "&:hover": { backgroundColor: "#f5f5f5" },
  },
})

// ================= DESKTOP HEADER =================

export const desktopHeaderWrapper = style({
  backgroundColor: "#0C2340",
  paddingTop: theme.space[4],
  paddingBottom: theme.space[4],
  color: "white",
})

// Apply global style AFTER creating the class
globalStyle(`${desktopHeaderWrapper} a`, {
  color: "white !important",
})
