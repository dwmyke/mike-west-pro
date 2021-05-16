import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@chakra-ui/react'
import HeaderNav from '../components/headerNav'
import Footer from '../components/footer'

interface LayoutProps {
  children: ReactNode
}

const PageLayout = ( { children }: LayoutProps ) => {

  
  return (
    <>
    <HeaderNav />
        <Box as="main" minH="90vh">
          {children}
          </Box>
    <Footer />
    </>
  )
}

export default PageLayout
