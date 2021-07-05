import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaImdb, FaYoutube, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
  import SocialButton from '../components/socialButton'
  
  export default function Footer() {
    return (
      <Box as={'footer'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {new Date().getFullYear()} Mikel-Jon West</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'IMDB'} href={'https://www.imdb.com/name/nm1761143/'}>
              <FaImdb />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/MikeWestTheBest'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/thatmikewest'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/dwmyke/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Email'} href={'mailto:mikewest@workmail.com'}>
              <FaEnvelope />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }