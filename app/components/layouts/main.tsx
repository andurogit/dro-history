import Navbar from '../navBar'
import React, { Suspense, type ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import MascotLoader from '../mascot-loader'

// mascot 콜
// ssr 사용안함
const LazyMascot = React.lazy(() => import('../mascot'))

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Navbar />

      <Container maxW="container.md" pt={14}>
        <Suspense fallback={<MascotLoader />}>
          <LazyMascot />
        </Suspense>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
