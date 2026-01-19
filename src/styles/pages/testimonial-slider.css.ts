import { style } from "@vanilla-extract/css"

export const wrapper = style({
  textAlign: "center",
  padding: "80px 20px",
  maxWidth: "1100px",
  margin: "0 auto",
})

export const heading = style({
  fontSize: "32px",
  fontWeight: 600,
  marginBottom: "40px",
})

export const avatar = style({
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  margin: "0 auto", // ✅ centers block images
})

export const headline = style({
  fontSize: "16px",
  fontWeight: 700,   // ✅ bold
  marginBottom: "12px",
  color: "#111",
})


export const quote = style({
  fontSize: "18px",
  fontStyle: "italic",
  lineHeight: 1.7,
  maxWidth: "720px",
  margin: "0 auto 24px",
  color: "#222",
})

export const author = style({
  fontSize: "15px",
  letterSpacing: "0.04em",
  marginBottom: "32px",
})

export const dots = style({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
})

export const dot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  border: "1px solid #000",
  background: "transparent",
  cursor: "pointer",
})

export const activeDot = style({
  background: "#000",
})
