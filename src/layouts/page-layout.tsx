import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@chakra-ui/react'
import HeaderNav from '../components/headerNav'
import Footer from '../components/footer'

interface LayoutProps {
  children: ReactNode
}

const MDXWrapper = (props) => <div className="mdx-prose" {...props} />

const PageLayout = ( { children }: LayoutProps ) => {

  
  return (
    <>
    <HeaderNav />
    <MDXWrapper>
        <Box as="main" minH="90vh">
          {children}
          </Box>
          </MDXWrapper>
    <Footer />
    </>
  )
}

export default PageLayout
