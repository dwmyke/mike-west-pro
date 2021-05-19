import React from "react"
import {
    Container,
    AspectRatio 
} from '@chakra-ui/react'

interface VideoProps {
    videoUrl: string
    videoTitle: string
}

const Video = ({ videoUrl, videoTitle }:VideoProps) => (
    <Container>
    <AspectRatio maxW="640px" ratio={16 / 9}>
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
    </Container>
)
export default Video