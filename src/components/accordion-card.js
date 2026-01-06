import * as React from "react"
import * as styles from "../styles/pages/about-us.css"

export default function AccordionCard({ title, isOpen, onToggle, children }) {
  return (
    <div className={styles.accordionWrapper}>
      <button
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`${styles.chevronBox} ${
            isOpen ? styles.chevronOpen : ""
          }`}
        >
          ▾
        </span>

        <span className={styles.accordionTitle}>{title}</span>
      </button>

      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  )
}
