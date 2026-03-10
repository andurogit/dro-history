import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ProfileSection, ProfileYear } from '../components/profile'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          This is Dro&apos;s Site
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Dro An
            </Heading>
            <p>Data Analytics ( Essbase, Oracle )</p>
            <p>Web Develop ( Spring )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/wizet.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph>
            Dro is a contract worker. Make Loss and Profit amount. worker.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Button
              as={RouterLink}
              to="/works"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Works
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>
          <ProfileSection>
            <ProfileYear>2015</ProfileYear>
            Start Develping in Jungja.
          </ProfileSection>
          <ProfileSection>
            <ProfileYear>2017</ProfileYear>
            Develping in Suseo.
          </ProfileSection>
          <ProfileSection>
            <ProfileYear>2021</ProfileYear>
            Develping in Garak.
          </ProfileSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 💚💚
          </Heading>
          <Paragraph>
            Game, Coding,
            <Link href="https://andurogit.github.io/" isExternal>
              Git Io Blog
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/andurogit" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @andurogit
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box textAlign="center" my={4}>
            <Button
              as={RouterLink}
              to="/posts"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              A Markdown note-taking app Posts
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
