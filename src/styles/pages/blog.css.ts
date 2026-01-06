import { globalStyle } from "@vanilla-extract/css"

/* =====================================================
   BLOG PAGE WRAPPER
===================================================== */

globalStyle(".blog-page", {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "48px 24px",
})

globalStyle(".blog-heading", {
  fontSize: "48px",
  fontWeight: "700",
  marginBottom: "48px",
})

/* =====================================================
   BLOG GRID
===================================================== */

globalStyle(".blog-grid", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
})

globalStyle(".blog-grid", {
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

/* =====================================================
   BLOG CARD
===================================================== */

globalStyle(".blog-card", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "28px",
  background: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
  textDecoration: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
})

globalStyle(".blog-card:hover", {
  transform: "translateY(-4px)",
  boxShadow: "0 14px 40px rgba(0,0,0,0.1)",
})

/* =====================================================
   IMAGE
===================================================== */

globalStyle(".blog-card-image", {
  borderRadius: "12px",
  marginBottom: "16px",
  overflow: "hidden",
})

/* =====================================================
   CATEGORY
===================================================== */

globalStyle(".blog-card-category", {
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#6b7280",
})

/* =====================================================
   TITLE
===================================================== */

globalStyle(".blog-card-title", {
  margin: 0,
  fontSize: "22px",
  lineHeight: "1.4",
  fontWeight: "600",
  color: "#0f172a",
})

globalStyle(".blog-card:hover .blog-card-title", {
  textDecoration: "underline",
})
