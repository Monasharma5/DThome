import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../theme.css"

/* Wrapper */
export const blogContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.space[6],
})

/* GRID */
globalStyle(`${blogContent} ul`, {
  listStyle: "none",
  padding: 0,
  margin: 0,

  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.space[5],
})

globalStyle(`${blogContent} ul`, {
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

/* CARD */
globalStyle(`${blogContent} ul > li`, {
  background: "#fff",
  borderRadius: theme.radii.large,
  boxShadow: theme.shadows.large,
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  transition: "transform .2s ease, box-shadow .2s ease",
})

globalStyle(`${blogContent} ul > li:hover`, {
  transform: "translateY(-6px)",
  boxShadow: theme.shadows.large,
})

/* FIX IMAGE */
globalStyle(`${blogContent} ul > li img`, {
  width: "100%",
  height: "auto",
  display: "block",
})

/* REMOVE RANDOM BULLET / DOT */
globalStyle(`${blogContent} li::marker`, {
  content: "none",
})

/* CONTENT SPACING */
globalStyle(`${blogContent} ul > li > *:not(img)`, {
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

globalStyle(`${blogContent} ul > li > *:last-child`, {
  paddingBottom: theme.space[4],
})

/* TITLE */
globalStyle(`${blogContent} h2`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
  lineHeight: 1.3,
  marginTop: theme.space[3],
  marginBottom: theme.space[2],
})

/* EXCERPT */
globalStyle(`${blogContent} p`, {
  fontSize: theme.fontSizes[2],
  lineHeight: 1.6,
  marginBottom: theme.space[3],
  color: theme.colors.text,
})

/* LINKS */
globalStyle(`${blogContent} a`, {
  color: theme.colors.primary,
  textDecoration: "none",
  fontWeight: theme.fontWeights.medium,
})

globalStyle(`${blogContent} a:hover`, {
  textDecoration: "none",
})

/* Hide the first title link (duplicate) */
globalStyle(`${blogContent} a.fusion-rollover-link`, {
  display: "none",
})
/* Hide the first title link (duplicate) */
globalStyle(`${blogContent} div.fusion-alignright`, {
  display: "none",
})
/* Hide the first title link (duplicate) */
globalStyle(`${blogContent} div.fusion-post-content-container
  `, {
  display: "none",
})
globalStyle(`${blogContent} div.fusion-meta-info a`, {
    display: "none",
})