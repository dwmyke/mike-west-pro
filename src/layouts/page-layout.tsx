import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import HeaderNav from '../components/headerNav'
import MDXWrapper from '../layouts/mdx-layout'

interface LayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: LayoutProps) => {
  
  return (
    <>
    <HeaderNav />
    <MDXWrapper>
        <Box as="main" minH="80vh">{children}</Box>
        </MDXWrapper>
    </>
  )
}

export default PageLayout