import React from "react"
import {
    Box,
    AspectRatio 
} from '@chakra-ui/react'

interface VideoProps {
    videoUrl: string
    videoTitle: string
}

const Video = ({ videoUrl, videoTitle }:VideoProps) => (
    <AspectRatio mx={8} p={8} maxW="540px"ratio={16 / 9}>
    <iframe
      src={videoUrl}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    </AspectRatio>
)
export default Video