import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'
import { type ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => (
  <Box>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)
