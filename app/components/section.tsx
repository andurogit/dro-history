import { motion, isValidMotionProp } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { type ReactNode } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return isValidMotionProp(prop) || shouldForwardProp(prop)
  }
})

interface SectionProps {
  children: ReactNode
  delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
