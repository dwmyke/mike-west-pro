import * as React from 'react'
import {
    Box,
    Container

} from '@chakra-ui/react'
import Hero from '../components/hero'

const IndexPage = () => (
    <>
    <Hero heroTitle="Mikel-Jon West" heroSubtitle="Content Editor" heroDescription="I'm a guy who makes stuff and fixes stuff."/>
    <Container>
    <h1>I'm a page.</h1>
    </Container>
    </>
)

export default IndexPage