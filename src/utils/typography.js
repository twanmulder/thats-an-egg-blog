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
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    a: {
      color: "#fec150",
    },
    blockquote: {
      color: "var(--blockquoteColor)",
      borderColor: "var(--blockquoteBorderColor)",
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
