import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

/* =======================
   HERO HEADING
======================= */
export const aboutHeroHeader = style({
  maxWidth: "1200px",
  textAlign: "center",
  margin: "0 auto",
  color: "#ffffff",
})

/* =======================
   HERO TEXT
======================= */
export const aboutHeroText = style({
  fontSize: "17px", // ✅ EXACT requirement
  marginBottom: theme.space[5],
  maxWidth: "1200px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px",
  lineHeight: 1.7,
  color: "#ffffff",

  "@media": {
    [media.small]: {
      fontSize: "18px", // keep same on larger screens
    },
  },
})

/* =======================
   HERO IMAGE
======================= */
export const aboutHeroImage = style({
  width: "100%",
})

/* =======================
   HERO BUTTON
======================= */
export const heroButton = style({
  marginTop: "0rem",

  /* ✅ Force block-level centering */
  display: "block",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",

  padding: "0.9rem 2.5rem",
  background: "#ff9800",
  color: "#fff",
  borderRadius: "999px",
  fontWeight: 600,
  textDecoration: "none",
  
})


globalStyle("main .about-hero", {
 paddingTop: "8rem",
 paddingBottom: "7rem",

  background:
    "linear-gradient(180deg, rgba(47, 120, 198, 0.6) 0%, rgba(0, 73, 221, 0.88) 100%)",
})

