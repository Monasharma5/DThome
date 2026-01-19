import {  style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../../theme.css"
import { media } from "../../components/ui.css"

/* HERO */

export const heroSection = style({
  padding: "80px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const heroGrid = style({
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  alignItems: "center",
  gap: "48px",
})

export const heroContent = style({})

export const heroTitle = style({
  fontSize: "38px",
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: "20px",
})

export const heroText = style({
  fontSize: "18px",
  color: "#555",
  lineHeight: 1.7,
})

export const heroImage = style({
  display: "flex",
  justifyContent: "center",
})

export const heroImageImg = style({
  maxWidth: "100%",
  height: "auto",
})
export const trustSection = style({
  padding: "40px 24px",
  background: "#fff",
})

export const trustGrid = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  flexWrap: "wrap",
})


/* ✅ LOGO SIZE CONTROL */
globalStyle(`${trustGrid} img`, {
  height: "84px",
  width: "auto",
  objectFit: "contain",
  display: "block",
})
export const clientsSection = style({
  padding: "60px 24px",
  textAlign: "center",
})

export const sectionTitle = style({
  fontSize: "26px",
  fontWeight: 600,
  marginBottom: "32px",
})

export const clientsGrid = style({
  maxWidth: "1250px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
  flexWrap: "wrap",
})

/* ✅ CLIENT LOGO CONTROL */
globalStyle(`${clientsGrid} img`, {
  height: "45px",
  width: "auto",
  objectFit: "contain",
  display: "block",
  opacity: 0.9,
})
/* ==========================
   HERO BUTTON
========================== */

export const heroButton = style({
  display: "inline-block",
  padding: "14px 36px",
  background: "#ff9800",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: "999px",
  textDecoration: "none",
  transition: "all 0.25s ease",
  //boxShadow: "0 10px 24px rgba(255, 122, 0, 0.25)",

  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 14px 30px rgba(255, 122, 0, 0.35)",
    },
  },
})


/* Paragraph under Featured Clients */
globalStyle(`${clientsSection} p`, {
  marginTop: "-25px",
  marginBottom: "25px",
  fontSize: "16px",
  color: "#555",
})


/* ==========================
   OUR AI SOLUTIONS
========================== */

export const aiSolutionsSection = style({
  padding: "80px 24px",
  background: "#f8fafc",
  textAlign: "center",
})

export const aiSolutionsTitle = style({
  fontSize: "34px",
  fontWeight: 700,
  marginBottom: "48px",
})

export const aiSolutionsGrid = style({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",

  gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
  justifyContent: "center",
  gap: "32px",

  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
})


export const aiCard = style({
  background: "#ffffff",
  borderRadius: "20px",
  padding: "20px 18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
  textAlign: "center",
  transition: "transform .25s ease, box-shadow .25s ease",

  ":hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
  },
})

export const aiCardImage = style({
  height: "72px",
  marginBottom: "20px",
})

export const aiCardTitle = style({
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "12px",
})

export const aiCardText = style({
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#555",
})


/* ==========================
   ABOUT US SECTION
========================== */

export const aboutSection = style({
  padding: "20px 24px",
  background: "#f9fafc",
})

export const aboutContainer = style({
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center",
})

export const aboutTitle = style({
  fontSize: "34px",
  fontWeight: 700,
  marginBottom: "20px",
  color: "#1f2a44",
})

export const aboutText = style({
  fontSize: "17px",
  lineHeight: 1.75,
  color: "#4a5568",
  marginBottom: "18px",
})

export const aboutButton = style({
  display: "inline-block",
  padding: "14px 36px",
  background: "#ff9800",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: "999px",
  textDecoration: "none",
  transition: "all 0.25s ease",

  selectors: {
    "&:hover": {
      background: "#e68900",
      transform: "translateY(-2px)",
    },
  },
})

/* =========================
   WHY CHOOSE US
========================= */

export const whySection = style({
  padding: "40px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const whyTitle = style({
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "24px",
})

export const whyText = style({
  fontSize: "18px",
  lineHeight: 1.7,
  color: "#555",
  maxWidth: "900px",
  margin: "0 auto 60px",
})

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "40px",

  "@media": {
    "(max-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "32px",
    },
    "(max-width: 500px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const statItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export const statNumber = style({
  fontSize: "56px",
  fontWeight: 700,
  color: "#4e88c7",
  marginBottom: "12px",
})

export const statLabel = style({
  fontSize: "18px",
  fontWeight: 600,
  color: "#111",
})

/* ===========================
   TECHNOLOGIES SECTION
=========================== */

export const technologiesSection = style({
  padding: "80px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
})

export const technologiesHeading = style({
  fontSize: "34px",
  fontWeight: 600,
  marginBottom: "48px",
})

export const technologiesGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "28px",

  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
})

export const technologyCard = style({
  background: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #4e88ff",
  padding: "28px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  transition: "all .25s ease",
})

export const technologyImage = style({
  height: "48px",
  width: "auto",
  objectFit: "contain",
})

export const technologyLabel = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "#444",
})

/* ===== FORM WRAPPER ===== */
globalStyle(".contact-form", {
  maxWidth: "820px",
  margin: "0 auto",
  padding: "40px 20px",
});

/* ===== FORM ROW ===== */
globalStyle(".contact-form .form-row", {
  marginBottom: "22px",
});

/* ===== HIDE LABELS (Screenshot style) ===== */
globalStyle(".contact-form label", {
  display: "none",
});

/* ===== INPUTS / SELECT / TEXTAREA ===== */
globalStyle(
  ".contact-form input, .contact-form select, .contact-form textarea",
  {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid #d1d1d1",
    fontSize: "15px",
    backgroundColor: "#fff",
    outline: "none",
    boxSizing: "border-box",
  }
);

/* ===== TEXTAREA HEIGHT ===== */
globalStyle(".contact-form textarea", {
  minHeight: "140px",
  resize: "none",
});

/* ===== FOCUS STATE ===== */
globalStyle(
  ".contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus",
  {
    borderColor: "#4f86c6",
  }
);

/* ===== SELECT DROPDOWN ARROW ===== */
globalStyle(".contact-form select", {
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%23666' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 18px center",
  backgroundSize: "14px",
});

/* ===== CAPTCHA SPACING ===== */
globalStyle(".contact-form .g-recaptcha", {
  marginTop: "10px",
  marginBottom: "24px",
});

/* ===== SUBMIT BUTTON ===== */
globalStyle(".contact-form .btn", {
  backgroundColor: "#4f86c6",
  color: "#fff",
  border: "none",
  padding: "14px 36px",
  borderRadius: "30px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
});

/* ===== BUTTON HOVER ===== */
globalStyle(".contact-form .btn:hover", {
  backgroundColor: "#3b6fa9",
});

export const contactHeading = style({
  fontSize: "34px",
  fontWeight: 600,
  marginBottom: "48px",
})
globalStyle(".contact-form label", {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#333",
});
