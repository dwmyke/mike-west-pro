import React from 'react'
import { Box } from '@chakra-ui/react'

const PageLayout: React.FunctionComponent = ({ children }) => {
  
  return (
    <>
        <Box as="main" minH="80vh">{children}</Box>
    </>
  )
}

export default PageLayout