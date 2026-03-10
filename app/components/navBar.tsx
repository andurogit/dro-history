import Logo from './logo'
import { Link as RouterLink, useLocation } from 'react-router'
import { type ReactNode, forwardRef } from 'react'

import {
  Container,
  Flex,
  useColorModeValue,
  Box,
  Heading,
  Stack,
  Link,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  type LinkProps
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

interface LinkItemProps extends LinkProps {
  href: string
  target?: string
  children: ReactNode
}

const LinkItem = ({ href, target, children, ...props }: LinkItemProps) => {
  const location = useLocation()
  const path = location.pathname
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={RouterLink}
      to={href}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202323' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

interface MenuLinkProps {
  href: string
  children: ReactNode
}

const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>((props, ref) => (
  <Link ref={ref} as={RouterLink} to={props.href} {...props} />
))

const Navbar = (props: any) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        // @ts-ignore
        wrap="wrap"
        // @ts-ignore
        align="center"
        // @ts-ignore
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works">
            Works
          </LinkItem>
          <LinkItem href="/posts">
            Posts
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/andurogit"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={Link} href="https://github.com/andurogit">
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
