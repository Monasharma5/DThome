import { globalStyle } from "@vanilla-extract/css"
import { theme } from "../../theme.css"

/* =====================================================
   RESET AVADA CONSTRAINTS
===================================================== */

globalStyle(".fusion-row, .fusion-flex-container, .fusion-layout-column", {
  width: "100% !important",
  maxWidth: "100% !important",
  //margin: "0 !important",
  padding: "0 !important",
})

/* =====================================================
   BLOG GRID
===================================================== */

globalStyle(".fusion-posts-container", {
  maxWidth: "1400px",
  //margin: "0 auto",
  padding: "48px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "32px",
  
})

globalStyle(".fusion-blog-shortcode", {
  marginLeft: "60px !important", // <-- add margin-left
  //justifyContent: "center",
})


globalStyle(".fusion-posts-container", {
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
   CARD
===================================================== */

globalStyle(".fusion-post-grid", {
  background: "#ffffff",
  borderRadius: "16px",
  padding: "28px",
  minHeight: "140px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
 // justifyContent: "center",
})

/* =====================================================
   REMOVE EVERYTHING UNWANTED
===================================================== */

/* Remove featured images */
globalStyle(".fusion-post-grid img", {
  display: "none !important",
})

/* Remove excerpt */
globalStyle(".fusion-rollover-link", {
  display: "none !important",
})

/* Remove read more COMPLETELY (this kills the 'O') */
globalStyle(".fusion-alignright", {
  display: "none !important",
})

globalStyle(".fusion-read-more::before, .fusion-read-more::after", {
  content: "none !important",
})

/* Remove author, date, comments */
globalStyle(
  `
  .fusion-meta-info .fusion-author,
  .fusion-meta-info .fusion-date,
  .fusion-meta-info .fusion-comments
`,
  {
    display: "none !important",
  }
)

/* =====================================================
   CATEGORY (THIS WAS MISSING)
===================================================== */

/* Avada category containers (all variants) */
globalStyle(
  `
  .fusion-post-grid .fusion-post-categories,
  .fusion-post-grid .fusion-meta-info-categories,
  .fusion-post-grid .fusion-meta-categories
`,
  {
    display: "block !important",
    marginBottom: "10px",
  }
)

globalStyle(
  `
  .fusion-post-grid .fusion-post-categories a,
  .fusion-post-grid .fusion-meta-info-categories a,
  .fusion-post-grid .fusion-meta-categories a
`,
  {
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
    fontWeight: "600",
    textDecoration: "none !important",
  }
)

/* =====================================================
   TITLE
===================================================== */

globalStyle(".fusion-post-grid h2", {
  margin: 0,
  fontSize: "24px",
  lineHeight: "1.4",
  fontWeight: "600",
  textAlign: "left !important",
})

globalStyle(".fusion-post-grid h2 a", {
  color: "#000000 !important",
  textDecoration: "none !important",
 

})

globalStyle(".fusion-post-grid h2 a:hover", {
  color: "#000000 !important",
  textDecoration: "none !important",
})

/* =====================================================
   CLEAN LIST STYLES
===================================================== */

globalStyle("ul, li", {
  margin: 0,
  padding: 0,
  listStyle: "none",
})

globalStyle(".fusion-post-slideshow", {
  display: "none",
})
