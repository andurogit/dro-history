import Navbar from '../navBar'
import React, { Suspense, type ReactNode, useState, useEffect } from 'react'
import { Box, Container, Select, FormControl, FormLabel } from '@chakra-ui/react'
import { useRouteLoaderData } from 'react-router'
import Footer from '../footer'
import MascotLoader from '../mascot-loader'

// mascot 콜
// ssr 사용안함
const LazyMascot = React.lazy(() => import('../mascot'))

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  const loaderData = useRouteLoaderData("root") as { glbFiles?: string[] } | undefined;
  console.log("Main loaderData:", loaderData);
  const glbFiles = loaderData?.glbFiles ?? ['/mascot.glb'];
  console.log("glbFiles:", glbFiles);
  const [glbPath, setGlbPath] = useState(glbFiles[0] || '/mascot.glb');

  // If loaderData changes and current glbPath is not in the list, update it
  useEffect(() => {
    if (glbFiles.length > 0 && !glbFiles.includes(glbPath)) {
      setGlbPath(glbFiles[0]);
    }
  }, [glbFiles]);

  return (
    <Box as="main" pb={8}>
      <Navbar />

      <Container maxW="container.md" pt={14}>
        <Suspense fallback={<MascotLoader />}>
          <LazyMascot glbPath={glbPath} />
        </Suspense>

        <Box mb={4} display="flex" justifyContent="center">
          <FormControl maxW="200px">
            <FormLabel fontSize="sm" textAlign="center">Select Mascot</FormLabel>
            <Select 
              size="sm" 
              value={glbPath} 
              onChange={(e) => setGlbPath(e.target.value)}
              variant="filled"
            >
              {glbFiles.map((file) => (
                <option key={file} value={file}>
                  {file.replace('/', '')}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
