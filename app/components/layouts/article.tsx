import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { GridItemStyle } from '../grid-item'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

interface LayoutProps {
    children: ReactNode
    title?: string
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            // @ts-ignore
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            {children}
            <GridItemStyle />
        </motion.article>
    )
}

export default Layout
