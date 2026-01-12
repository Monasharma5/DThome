import { style, globalStyle, keyframes } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"

/* =======================
   ANIMATIONS
======================= */
const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% 0" },
  "100%": { backgroundPosition: "200% 0" },
})

/* =======================
   PAGE WRAPPER
======================= */
export const page = style({
  width: "100%",
  overflowX: "hidden",
  backgroundColor: "#ffffff",
  minHeight: "100vh",
})

/* =======================
   HEADER
======================= */
export const header = style({
  textAlign: "center",
  marginBottom: "1.5rem",
  "@media": {
    [media.small]: {
      textAlign: "left",
    },
  },
})

/* =======================
   CONTENT
======================= */
export const content = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "1rem 0.75rem",
  "@media": {
    [media.small]: {
      padding: "1.5rem 1rem",
    },
  },
})

/* =======================
   SECTION BASE STYLING
======================= */
globalStyle(`section`, {
  padding: "2rem 0.75rem",
  position: "relative",
  animation: `${fadeIn} 0.6s ease-out`,
  "@media": {
    [media.small]: {
      padding: "2.5rem 1rem",
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
  fontSize: "1.75rem",
  fontWeight: theme.fontWeights.extrabold,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "0.5rem",
  "@media": {
    [media.small]: {
      fontSize: "2rem",
    },
  },
})

globalStyle(`h2`, {
  fontSize: "1.5rem",
  fontWeight: theme.fontWeights.bold,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "0.75rem",
  "@media": {
    [media.small]: {
      fontSize: "1.75rem",
    },
  },
})

globalStyle(`h3`, {
  fontSize: "1.25rem",
  fontWeight: theme.fontWeights.semibold,
  color: "#667eea",
  marginBottom: "0.5rem",
  "@media": {
    [media.small]: {
      fontSize: "1.4rem",
    },
  },
})

globalStyle(`h4`, {
  fontSize: "1.1rem",
  fontWeight: theme.fontWeights.semibold,
  marginBottom: "0.5rem",
})

globalStyle(`p`, {
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "#4a5568",
  marginBottom: "0.75rem",
  "@media": {
    [media.small]: {
      fontSize: "0.95rem",
    },
  },
})

globalStyle(`p:last-child`, {
  marginBottom: 0,
})

globalStyle(`strong`, {
  fontWeight: 700,
  color: "#667eea",
  fontSize: "0.95rem",
})

/* =======================
   HERO SECTION
======================= */
globalStyle(`.about-hero`, {
  paddingTop: "2.5rem",
  paddingBottom: "2.5rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
})

globalStyle(`.about-hero::before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)",
  pointerEvents: "none",
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

export const why = style({
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  position: "relative",
})

export const whyItem = style({
  padding: "1.25rem",
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
  marginBottom: "1rem",
  borderRadius: "16px",
  boxShadow: "0 15px 50px rgba(102, 126, 234, 0.2)",
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
})

globalStyle(`${whyItem}::before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  width: "6px",
  height: "100%",
  background: "linear-gradient(180deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  transition: "width 0.4s ease",
})

globalStyle(`${whyItem}:hover`, {
  transform: "translateY(-10px) scale(1.02)",
  boxShadow: "0 25px 80px rgba(102, 126, 234, 0.4)",
})

globalStyle(`${whyItem}:hover::before`, {
  width: "8px",
})

globalStyle(`${whyItem} h3`, {
  color: "#667eea",
  marginBottom: "0.75rem",
  fontSize: "1.2rem",
  fontWeight: 700,
})



/* =======================
   LOGO LIST SECTION
======================= */
globalStyle(`.about-logo-list`, {
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)",
  paddingTop: "2rem",
  paddingBottom: "2rem",
})

globalStyle(`.about-logo-list img`, {
  transition: "all 0.3s ease",
  filter: "grayscale(30%)",
  opacity: 0.8,
})

globalStyle(`.about-logo-list img:hover`, {
  filter: "grayscale(0%)",
  opacity: 1,
  transform: "scale(1.15)",
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
  objectFit: "cover",
})

globalStyle(`${page} img`, {
  display: "block",
  visibility: "visible",
  opacity: 1,
})

/* =======================
   LINKS STYLING
======================= */
globalStyle(`${page} a`, {
  color: "#667eea",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontWeight: 600,
})

globalStyle(`${page} a:hover`, {
  color: "#764ba2",
  textDecoration: "underline",
})

/* =======================
   LISTS STYLING
======================= */
globalStyle(`${page} ul`, {
  paddingLeft: "1rem",
  marginBottom: "1rem",
})

globalStyle(`${page} li`, {
  marginBottom: "0.5rem",
  lineHeight: 1.6,
  color: "#4a5568",
  fontSize: "0.9rem",
})

/* =======================
   CONTAINER ENHANCEMENTS
======================= */
globalStyle(`${content}`, {
  animation: `${fadeIn} 0.8s ease-out`,
})

/* =======================
   SECTION SPACING
======================= */
globalStyle(`${page} section + section`, {
  marginTop: "1rem",
})

/* =======================
   BOX ENHANCEMENTS
======================= */
globalStyle(`${page} Box`, {
  transition: "all 0.3s ease",
})

/* =======================
   TEXT COMPONENT
======================= */
globalStyle(`${page} Text`, {
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "#4a5568",
})

globalStyle(`${page} Heading`, {
  marginBottom: "1rem",
  fontSize: "1.5rem",
  "@media": {
    [media.small]: {
      fontSize: "1.75rem",
    },
  },
})
export const twoColumn = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 12px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  alignItems: "center",
  animation: `${fadeIn} 0.8s ease-out`,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "16px",
      padding: "0 8px",
    },
  },
})


export const card = style({
  padding: "1.25rem",
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgba(102, 126, 234, 0.2)",
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
})

globalStyle(`${card}::before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "5px",
  background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.4s ease",
})

globalStyle(`${card}:hover`, {
  transform: "translateY(-12px) scale(1.03)",
  boxShadow: "0 30px 90px rgba(102, 126, 234, 0.35)",
})

globalStyle(`${card}:hover::before`, {
  transform: "scaleX(1)",
})

globalStyle(`${card} h3`, {
  marginBottom: "0.75rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontSize: "1.15rem",
  fontWeight: 700,
})

globalStyle(`${card} p`, {
  margin: 0,
  color: "#4a5568",
  fontSize: "0.85rem",
  lineHeight: 1.6,
})

globalStyle(`${card} Text`, {
  fontSize: "0.9rem",
  color: "#4a5568",
  marginBottom: "0.5rem",
  display: "block",
  fontWeight: 500,
})

export const values = style({
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)",
  paddingTop: "2rem",
  paddingBottom: "2rem",
})

export const card1 = style({
  padding: "1.25rem",
  background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgba(102, 126, 234, 0.25)",
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
})

globalStyle(`${card1}::after`, {
  content: '""',
  position: "absolute",
  top: "-50%",
  right: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
  opacity: 0,
  transition: "opacity 0.4s ease",
})

globalStyle(`${card1}:hover`, {
  transform: "translateY(-12px) scale(1.03)",
  boxShadow: "0 30px 90px rgba(102, 126, 234, 0.4)",
})

globalStyle(`${card1}:hover::after`, {
  opacity: 1,
})

globalStyle(`${card1} h3`, {
  marginBottom: "0.75rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontSize: "1.2rem",
  fontWeight: 800,
})

globalStyle(`${card1} p`, {
  margin: 0,
  color: "#4a5568",
  lineHeight: 1.7,
  fontSize: "0.85rem",
})

export const founder = style({
  display: "flex",
  flexDirection: "column",
})

globalStyle(`${founder} h3`, {
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
})

globalStyle(`${founder} h4`, {
  marginBottom: "0.75rem",
  fontSize: "1.2rem",
  color: "#667eea",
  fontWeight: 700,
})

globalStyle(`${founder} p`, {
  marginBottom: "1.5rem",
  lineHeight: 1.7,
  fontSize: "0.9rem",
  color: "#4a5568",
})

globalStyle(`${founder} img`, {
  width: "100%",
  height: "auto",
  borderRadius: "16px",
  marginTop: "1.5rem",
  boxShadow: "0 25px 80px rgba(102, 126, 234, 0.4)",
  border: "3px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "block",
})

globalStyle(`${founder} img:hover`, {
  transform: "scale(1.08) translateY(-10px)",
  boxShadow: "0 35px 100px rgba(102, 126, 234, 0.5)",
})

globalStyle(`${founder} h3`, {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontSize: "1.5rem",
})

globalStyle(`${founder} h4`, {
  color: "#667eea",
  fontSize: "1.2rem",
})


export const gallery = style({
  paddingTop: "2rem",
  paddingBottom: "2rem",
  background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
})

export const galleryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
  marginTop: "1.5rem",
})

export const sol = style({
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  borderRadius: "16px",
  margin: "1.5rem 0.75rem",
  boxShadow: "0 20px 60px rgba(102, 126, 234, 0.2)",
  border: "2px solid transparent",
  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #667eea, #764ba2)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  "@media": {
    [media.small]: {
      margin: "2rem auto",
      maxWidth: "1200px",
    },
  },
})

globalStyle(`${sol} h2`, {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textAlign: "center",
  marginBottom: "1rem",
})

globalStyle(`${sol} ul`, {
  listStyle: "none",
  padding: 0,
  maxWidth: "900px",
  margin: "0 auto",
})

globalStyle(`${sol} li`, {
  padding: "1rem",
  marginBottom: "0.75rem",
  background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.15)",
  border: "2px solid rgba(102, 126, 234, 0.2)",
  transition: "all 0.4s ease",
  position: "relative",
})

globalStyle(`${sol} li::before`, {
  content: '""',
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "4px",
  background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
  transition: "width 0.4s ease",
})

globalStyle(`${sol} li:hover`, {
  transform: "translateX(15px)",
  boxShadow: "0 15px 40px rgba(102, 126, 234, 0.25)",
})

globalStyle(`${sol} li:hover::before`, {
  width: "6px",
})

globalStyle(`${sol} a`, {
  color: "#667eea",
  textDecoration: "none",
  fontWeight: 600,
  transition: "all 0.3s ease",
  borderBottom: "2px solid transparent",
  paddingBottom: "2px",
})

globalStyle(`${sol} a:hover`, {
  color: "#764ba2",
  borderBottomColor: "#764ba2",
  transform: "translateY(-1px)",
})

globalStyle(`${sol} p`, {
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#4a5568",
  maxWidth: "800px",
  margin: "0 auto 1rem",
  lineHeight: 1.7,
})

globalStyle(`${sol} li p`, {
  textAlign: "left",
  margin: "0.25rem 0",
  fontSize: "0.85rem",
})

globalStyle(`${sol} li strong`, {
  color: "#667eea",
  fontWeight: 700,
})

export const cta = style({
  paddingTop: "2rem",
  paddingBottom: "2rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  borderRadius: "16px",
  boxShadow: "0 30px 90px rgba(102, 126, 234, 0.5)",
  margin: "2rem 0.75rem",
  position: "relative",
  overflow: "hidden",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  "@media": {
    [media.small]: {
      margin: "2.5rem auto",
      maxWidth: "1200px",
    },
  },
})

globalStyle(`${cta}::before`, {
  content: '""',
  position: "absolute",
  top: "-50%",
  right: "-50%",
  width: "200%",
  height: "200%",
  background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
  pointerEvents: "none",
})

globalStyle(`${cta} h2`, {
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: 800,
  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  position: "relative",
  zIndex: 1,
  marginBottom: "0.75rem",
  "@media": {
    [media.small]: {
      fontSize: "1.75rem",
    },
  },
})

globalStyle(`${cta} p`, {
  color: "#fff",
  fontSize: "0.9rem",
  opacity: 0.95,
  position: "relative",
  zIndex: 1,
  "@media": {
    [media.small]: {
      fontSize: "1rem",
    },
  },
})

export const ctaButton = style({
  marginTop: "1rem",
  display: "block",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0.75rem 2rem",
  background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff9800 100%)",
  color: "#fff",
  borderRadius: "25px",
  fontWeight: 700,
  textDecoration: "none",
  boxShadow: "0 15px 40px rgba(255, 107, 53, 0.5)",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  zIndex: 1,
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
})

globalStyle(`${ctaButton}:hover`, {
  transform: "translateY(-5px) scale(1.08)",
  boxShadow: "0 20px 50px rgba(255, 107, 53, 0.7)",
  background: "linear-gradient(135deg, #ff9800 0%, #ff6b35 50%, #f7931e 100%)",
  borderColor: "rgba(255, 255, 255, 0.5)",
})

globalStyle(`${ctaButton}:active`, {
  transform: "translateY(-2px) scale(1.05)",
})

/* =======================
   RESPONSIVE ENHANCEMENTS
======================= */
globalStyle(`${page}`, {
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.85rem",
    },
  },
})

globalStyle(`${card}, ${card1}`, {
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
      borderRadius: "12px",
    },
  },
})

globalStyle(`${whyItem}`, {
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
      marginBottom: "0.75rem",
    },
  },
})

/* =======================
   FOCUS STATES
======================= */
globalStyle(`${page} a:focus, ${ctaButton}:focus`, {
  outline: "3px solid rgba(102, 126, 234, 0.5)",
  outlineOffset: "2px",
})

/* =======================
   SCROLL BEHAVIOR
======================= */
globalStyle(`${page}`, {
  scrollBehavior: "smooth",
})


/* ==========================
   ACCORDION (Screenshot Style)
========================== */

export const accordionWrapper = style({
  borderRadius: "12px",
  background: "#fff",
  border: "2px solid #f0c8a0",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: "520px",
})

export const accordionHeader = style({
  padding: "0.75rem 1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
})

export const chevronBox = style({
  width: "24px",
  height: "24px",
  background: "#000",
  color: "#fff",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  transition: "transform 0.25s ease",
})

export const chevronOpen = style({
  transform: "rotate(180deg)",
})

export const accordionTitle = style({
  fontSize: "0.95rem",
  fontWeight: 600,
  color: "#111",
})

export const accordionContent = style({
  padding: "1rem",
  borderTop: "1px solid #eee",
  lineHeight: 1.6,
  fontSize: "0.85rem",
})
