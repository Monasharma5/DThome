import { style, globalStyle, keyframes } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"

/* =======================
   Animations
======================= */
const fadeInUp = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
})

const slideIn = keyframes({
  from: { opacity: 0, transform: "translateX(20px)" },
  to: { opacity: 1, transform: "translateX(0)" },
})

/* =======================
   Page Wrapper
======================= */
export const page = style({
  minHeight: "100vh",
  padding: "2rem 1rem",
  //background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  "@media": {
    [media.small]: {
      padding: "4rem 2rem",
    },
  },
})

/* =======================
   Header
======================= */
export const header = style({
  textAlign: "center",
  marginBottom: "3rem",
  "@media": {
    [media.small]: {
      textAlign: "left",
    },
  },
})

globalStyle(`${header} h1`, {
  fontSize: theme.fontSizes[6],
  fontWeight: theme.fontWeights.extrabold,
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${fadeInUp} 0.6s ease-out`,
})

globalStyle(`${header} p`, {
  fontSize: theme.fontSizes[3],
  opacity: 0.85,
  animation: `${fadeInUp} 0.8s ease-out`,
})


/* =======================
   Content Grid
======================= */
export const content = style({
  maxWidth: "1300px",
  margin: "0 auto",
})

/* Grid container (CMS-safe) */
globalStyle(`${content} > div`, {
  "@media": {
    [media.small]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "start",
    },
  },
})

/* Remove CMS wrapper noise */
globalStyle(
  `
  ${content} > div > div,
  ${content} > div > div > div,
  ${content} > div > div > div > div
`,
  {
    "@media": {
      [media.small]: {
        display: "contents",
      },
    },
  }
)

/* =======================
   LEFT COLUMN (TEXT)
======================= */
export const leftContent = style({
  background: "#000",
  "@media": {
    [media.small]: {
      gridColumn: "1",
    },
  },
})

globalStyle(
  `
  ${leftContent} h2,
  ${leftContent} h3,
  ${leftContent} p
`,
  {
    animation: `${fadeInUp} 0.6s ease-out`,
  }
)

/* =======================
   RIGHT COLUMN (TEXT + FORM)
======================= */
export const rightContent = style({
  "@media": {
    [media.small]: {
      gridColumn: "2",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
  },
})

globalStyle(`${rightContent} h3`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${rightContent} p`, {
  opacity: 0.85,
})

/* =======================
   FORM
======================= */
globalStyle(`${rightContent} form`, {
  background: "#fff",
  padding: "2.5rem",
  borderRadius: theme.radii.large,
  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
  animation: `${slideIn} 0.8s ease-out`,
})

globalStyle(`${rightContent} label`, {
  fontWeight: theme.fontWeights.semibold,
  marginBottom: "0.25rem",
})

globalStyle(
  `
  ${rightContent} input,
  ${rightContent} textarea,
  ${rightContent} select
`,
  {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: theme.radii.button,
    border: "2px solid #e5e5e5",
    transition: "0.3s",
  }
)

globalStyle(
  `
  ${rightContent} input:focus,
  ${rightContent} textarea:focus,
  ${rightContent} select:focus
`,
  {
    outline: "none",
    borderColor: "#667eea",
    boxShadow: "0 0 0 3px rgba(102,126,234,0.2)",
  }
)

globalStyle(`${rightContent} .btn`, {
  marginTop: "1.5rem",
  padding: "0.9rem",
  fontWeight: theme.fontWeights.bold,
  color: "#fff",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  border: "none",
  borderRadius: theme.radii.button,
  cursor: "pointer",
  transition: "0.3s",
})

globalStyle(`${rightContent} .btn:hover`, {
  transform: "translateY(-2px)",
})

/* =======================
   NORMALIZE ALL FORM FIELDS
======================= */

globalStyle(`form input,
form textarea,
form select`, {
  width: "100%",
  padding: "0.75rem 0.75rem",
  borderRadius: theme.radii.button,
  border: "1px solid #e5e5e5",
  fontSize: theme.fontSizes[0],
  fontFamily: "inherit",
  backgroundColor: "#fff",
  boxSizing: "border-box",
})


globalStyle(`form input:focus,
form textarea:focus,
form select:focus`, {
  outline: "none",
  borderColor: "#667eea",
  boxShadow: "0 0 0 3px rgba(102,126,234,0.2)",
})

globalStyle(`form label`, {
  display: "block",
  fontWeight: theme.fontWeights.semibold,
  marginBottom: "0.5rem",
  marginTop: "0.7rem",
  fontSize: theme.fontSizes[1],
})
globalStyle(`form input`, {
  marginBottom: "0.6rem",
})

/* =======================
   FULL WIDTH MAP
======================= */

/* Target iframe (Google Map) */
globalStyle(`${content} iframe`, {
  width: "85vw",
  maxWidth: "85vw",
  height: "450px",
  border: "0",
  display: "block",
  marginLeft: "calc(100% - 40vw)",
  marginRight: "calc(50% - 50vw)",
  marginTop: "4rem",
  borderRadius: theme.radii.large,
})
/* =======================
   FUSION TITLE (H1)
======================= */


globalStyle(`
  .fusion-title-text h1
`, {
  fontSize: "30px",
  color: "#4e88c7",
})

globalStyle(`
  .fusion-title-heading #text,
`, {
  fontSize: "30px",
  color: "#4e88c7",
})