import React from 'react'
import {
    Stack,
    Flex,
    Button,
    VStack,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react';

  interface HeroProps {
      heroHeader?: string
      heroImage?: string
  }
  
  export default function Hero({ heroHeader, heroImage }:HeroProps) {
    return (
        <>
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={
          heroImage
        }
        backgroundSize={'cover'}
        backgroundPosition={'center top'}>
            
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
              
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}>
              {heroHeader}
            </Heading>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Video Editor
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Writer / Director
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </>
    );
  }