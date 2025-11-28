import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

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
    {
      background: theme.colors.primary,
    },
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
});

// Desktop dropdown menu
export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: "0",
  background: "#fff",
  padding: "8px 0",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "6px",
  minWidth: "200px",
  zIndex: 100,
  display: "none",
});

// Show dropdown on hover (desktop only)
export const showOnHover = style({
  selectors: {
    [`${dropdownWrapper}:hover &`]: {
      display: "block",
    },
  },
});

// Dropdown item link
export const dropdownItem = style({
  display: "block",
  padding: "8px 16px",
  color: theme.colors.text,
  fontSize: theme.fontSizes[2],
  textDecoration: "none",
  selectors: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});
