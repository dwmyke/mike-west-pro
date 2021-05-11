import React from 'react'
import { Box } from '@chakra-ui/react'
import HeaderNav from '../components/headerNav'

const PageLayout: React.FunctionComponent = ({ children }) => {
  
  return (
    <>
    <HeaderNav />
        <Box as="main" minH="80vh">{children}</Box>
    </>
  )
}

export default PageLayout