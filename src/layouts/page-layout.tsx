import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import HeaderNav from '../components/headerNav'

interface LayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: LayoutProps) => {
  
  return (
    <>
    <HeaderNav />
        <Box as="main" minH="80vh">{children}</Box>

    </>
  )
}

export default PageLayout