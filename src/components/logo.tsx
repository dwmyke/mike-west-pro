import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export function Logo() {
    return (
      <StaticImage
        src="../images/avatar.png"
        alt="Mike West avatar"
        placeholder="tracedSVG"
        layout="constrained"
        width={45}
        formats={["auto", "webp", "avif"]}
      />
    )
   }