import { style, globalStyle, keyframes } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"


/* =======================
   Page Wrapper
======================= */
export const page = style({
  minHeight: "100vh",
  
  height: "fit-content",
  marginLeft: "50px",

  padding: "2rem 1rem",
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

/* ===============================
   BUTTONS
================================ */

globalStyle(".fusion-button", {
  display: "inline-block",
  padding: "14px 28px",
  background: "#4e88c7",
  color: "#ffffff",
  borderRadius: "25px",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all .2s ease",
  marginBottom: "40px",
})

globalStyle(".fusion-button:hover", {
  background: "#4e88c7",
})

/* ===============================
   heading
================================ */

globalStyle(".fusion-title h2 span", {
  fontSize: "32px",
  fontWeight: "600",
  marginBottom: "12px",
  textAlign: "center",
})

globalStyle("h2", {
  textAlign: "center",
})

globalStyle("p", {
   fontSize: "17.5px",
})

globalStyle(".fusion-title-heading h2", {
  marginTop: "40px",
})


globalStyle(`
   h1
`, {
  fontSize: "45px !important",
  //color: "#4e88c7",
})

globalStyle(".fusion-imageframe img", {
  display: "none !important",
})

globalStyle(".fusion-image-wrapper img", {
  display: "none !important",
})

/* ===============================
   ul, li
================================ */

globalStyle ("ul, li ", {
    margin: "10px",
    padding: "0px",
    listStyle: "disc",
})

globalStyle(".panel-heading h3", {
  fontSize: "20px",
})