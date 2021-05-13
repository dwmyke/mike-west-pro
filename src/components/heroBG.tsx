import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export function HeroBG() {
    return (
      <StaticImage
        src="../images/background.jpg"
        alt="Background image"
        placeholder="dominantColor"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
      />
    )
   }