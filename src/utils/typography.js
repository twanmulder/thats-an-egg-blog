import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

import "./darkmodestyling.css"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    body: {
      backgroundColor: `var(--bg)`,
      color: "var(--textNormal)",
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      transition: `var(--theme-transition)`,
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      color: "var(--textNormal)",
    },
    "h2,h3,h4,h5,h6": {
      fontWeight: typography.options.boldWeight,
    },
    a: {
      color: "var(--textNormal)",
      boxShadow: "none",
    },
    "a:hover": {
      boxShadow: "0 1px 0 0 currentColor",
    },
    blockquote: {
      color: "var(--blockquoteColor)",
      borderColor: "var(--blockquoteBorderColor)",
    },
    "::selection": {
      color: "var(--selectionColor)",
      backgroundColor: "var(--selectionBackgroundColor)",
    },
    ".visuallyhidden": {
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: 0,
      border: 0,
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
    },
    code: {
      fontSize: "1rem",
      lineHeight: "1.55rem",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const bodyColor = typography.options.bodyColor
export const boldWeight = typography.options.boldWeight
