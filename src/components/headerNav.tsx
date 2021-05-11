import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, UpDownIcon } from '@chakra-ui/icons';
import { Logo } from './logo';
import ToggleTheme from './toggleTheme';

const Links = ['Dashboard', 'Projects', 'Team'];

interface NavLinkProps {
  linkPath: string
  children: React.ReactNode
}

const NavLink = ({ linkPath, children }:NavLinkProps ) => (
  <Link as={GatsbyLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={linkPath}>
    {children}
  </Link>
);

export const HeaderNav: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <LinkBox borderRadius={'full'} ml={4} ><LinkOverlay as={GatsbyLink} to="/"><Logo /></LinkOverlay></LinkBox>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box mr={4} >
                <ToggleTheme />
                </Box>
            {/* <Menu isLazy>
              <MenuButton
                as={IconButton}
                aria-label={'Options'}
                // rounded={'full'}
                variant={'ghost'}
                cursor={'pointer'}
                mr={4}
                icon={<UpDownIcon />}
                >
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default HeaderNav