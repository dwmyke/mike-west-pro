import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function PostTemplate() {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <StaticImage
            src={
              '../images/avatar.png'
            }
            alt={'Test'}
            layout={'constrained'}
            height={210}
            placeholder={'dominantColor'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Category
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Title
          </Heading>
          <Text color={'gray.500'}>
            Description
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
        </Stack>
      </Box>
    </Center>
  );
}