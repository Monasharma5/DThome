/*import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// DESKTOP HEADER WRAPPER (background + text color)
export const desktopHeaderWrapper = style({
  backgroundColor: "#4e88c7",
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

/**
 * Full-width outer wrapper (background spans full viewport)
 * Inner (desktopHeaderInner) keeps content padding & text color.
 */
export const desktopHeaderOuter = style({
  width: "100vw",
  left: 0,
  right: 0,
  position: "relative",
  backgroundColor: "#4e88c7",
})

export const desktopHeaderInner = style({
  // Keep the content centered via your Container component.
  paddingTop: theme.space[3],
  paddingBottom: theme.space[4],
})

/* Desktop nav: keep display none on small screens, show on larger */
export const desktopHeaderNavWrapper = style({
  position: "relative",
  zIndex: 2,
  display: "none",
  "@media": {
    [media.small]: {
      display: "block",
    },
  },
})

/* Mobile header base */
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

/* ---------------- DROPDOWN ---------------- */

export const dropdownWrapper = style({
  position: "relative",
  listStyle: "none", // ensure wrapper has no list-style
  alignItems: "left"
})

export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "#4e88c7", 
  borderRadius: "6px",
  minWidth: "220px",
  zIndex: 100,
  display: "none",
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
})


export const showOnHover = style({
  selectors: {
    // When the dropdownWrapper is hovered, show the dropdownMenu
    [`${dropdownWrapper}:hover &`]: {
      display: "block",
    },
  },
})

// links inside dropdown (apply color, padding, hover)
export const dropdownItem = style({
  display: "block",
  padding: "8px 16px",
  color: "#000000 !important", 
  textDecoration: "none",
  fontWeight: 500,
  selectors: {
    "&:hover": {
      backgroundColor: "#ffa737", 
      color: "#ffffff !important", 
    },
  },
})


/* Make sure anchor tags inside the header inner area are white */
globalStyle(`${desktopHeaderInner} a`, {
  color: "white !important",
  textDecoration: "none",
})

globalStyle(`${dropdownMenu} li`, {
  listStyle: "none",
})
