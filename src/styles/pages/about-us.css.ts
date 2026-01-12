import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"

/* =======================
   PAGE WRAPPER
======================= */
export const page = style({
  width: "100%",
  overflowX: "hidden",
  backgroundColor: "#ffffff",
})

/* =======================
   SECTION BASE STYLING
======================= */
export const section = style({
  padding: "5rem 1.25rem",

  "@media": {
    [media.small]: {
      padding: "6.5rem 2rem",
    },
  },
})


/* =======================
   CONTAINER WIDTH
======================= */
globalStyle(
  `
  section > div
`,
  {
    maxWidth: "1200px",
    margin: "0 auto",
  }
)

/* =======================
   TYPOGRAPHY
======================= */
globalStyle(`h1`, {
  fontSize: theme.fontSizes[7],
  fontWeight: theme.fontWeights.extrabold,
  color: "#1f2a44",
  marginBottom: "1rem",
})

globalStyle(`h2`, {
  fontSize: theme.fontSizes[6],
  fontWeight: theme.fontWeights.bold,
  color: "#1f2a44",
  marginBottom: "1.25rem",
})

globalStyle(`h3`, {
  fontSize: theme.fontSizes[5],
  fontWeight: theme.fontWeights.semibold,
  color: "#1f2a44",
})

globalStyle(`p`, {
  fontSize: theme.fontSizes[2],
  lineHeight: 1.75,
  color: "#4a5568",
})

/* =======================
   HERO SECTION
======================= */
globalStyle(`.about-hero`, {
  //paddingTop: "8rem",
  //paddingBottom: "7rem",
  background: "linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)",
})

/* =======================
   STATS SECTION
======================= */
globalStyle(`.about-stat-list`, {
  backgroundColor: "#f9fafc",
})

/* =======================
   LEADERSHIP SECTION
======================= */
globalStyle(`.about-leadership`, {
  backgroundColor: "#ffffff",
})

export const whyItem = style({
  padding: "1rem",
  background: "#f1f4f6",
  marginBottom:"15px",
  //borderRadius: "16px",
  //boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
})



/* =======================
   LOGO LIST SECTION
======================= */
globalStyle(`.about-logo-list`, {
  backgroundColor: "#f9fafc",
  //paddingBottom: "6rem",
})

globalStyle(".about-logo-list ul, .about-logo-list li", {
  listStyle: "none",
  padding: 0,
  margin: 0,
})
/* =======================
   REMOVE DOUBLE SPACING
======================= */
globalStyle(
  `
  .about-hero + section,
  .about-stat-list + section,
  .about-leadership + section
`,
  {
    marginTop: "0",
  }
)

/* =======================
   IMAGE NORMALIZATION
======================= */
globalStyle(`img`, {
  maxWidth: "100%",
  height: "auto",
  display: "block",
})
export const twoColumn = style({
  maxWidth: "1200px",        // prevents full width
  margin: "0 auto",          // centers section
  padding: "0 24px",         // side padding
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "48px",
  alignItems: "center",

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "32px",
    },
  },
})


export const card = style({
  padding: "2.5rem",
  background: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
})

globalStyle(`${card} h3`, {
  marginBottom: "1rem",
})

globalStyle(`${card} p`, {
  margin: 0,
})

export const card1 = style({
  padding: "1.5rem",
  background: "#ffffff",
  borderRadius: "16px",
  boxShadow: "1px 3px 5px 0px #4e88c7",
})

globalStyle(`${card1} h3`, {
  marginBottom: "1rem",
})

globalStyle(`${card1} p`, {
  margin: 0,
})

export const founder = style({
  display: "flex",
  flexDirection: "column",
})

globalStyle(`${founder} h3`, {
  marginTop: "4rem",
  marginBottom: "1rem",
})

globalStyle(`${founder} h4`, {
  marginBottom: "1rem",
})

globalStyle(`${founder} p`, {
  marginBottom: "4rem",
  lineHeight: "1.7",
})

globalStyle(`${founder} img`, {
  width: "100%",            // prevents overflow
  height: "auto",
  borderRadius: "16px",
  marginTop: "5rem",
})


export const gallery = style({
 paddingTop: "3rem",
 
})

export const cta = style({
 paddingTop: "2rem",
 paddingBottom: "2rem",
 background:
    "linear-gradient(180deg, rgba(47, 120, 198, 0.6) 0%, rgba(0, 73, 221, 0.88) 100%)",
  borderRadius: "16px",
  boxShadow: "1px 3px 5px 0px #4e88c7",
   margin: "4rem 1rem",

  "@media": {
    [media.small]: {
      margin: "6rem auto",
      maxWidth: "1200px",
    },
  },
})

globalStyle(`${cta} h2`, {
 color: "#fff",
})

globalStyle(`${cta} p`, {
 color: "#fff",
})



export const ctaButton = style({
  marginTop: "0rem",

  /* ✅ Force block-level centering */
  display: "block",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",

  padding: "0.9rem 2.5rem",
  background: "#ff9800",
  color: "#fff",
  borderRadius: "25px",
  fontWeight: 600,
  textDecoration: "none",
  
})


/* ==========================
   ACCORDION (Screenshot Style)
========================== */

export const accordionWrapper = style({
  borderRadius: "18px",
  background: "#fff",
  border: "2px solid #f0c8a0",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",

  width: "100%",          // safe
  maxWidth: "520px",      // matches screenshot
})


export const accordionHeader = style({
  padding: "1.25rem 1.5rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
})


export const chevronBox = style({
  width: "28px",
  height: "28px",
  background: "#000",
  color: "#fff",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  transition: "transform 0.25s ease",
})

export const chevronOpen = style({
  transform: "rotate(180deg)",
})

export const accordionTitle = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#111",
})

export const accordionContent = style({
  padding: "1.5rem",
  borderTop: "1px solid #eee",
  lineHeight: 1.6,
})
