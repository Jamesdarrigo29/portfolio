import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}

/** Fades and lifts content into view once as it scrolls in. Subtle, one-shot, respects reduced motion via Tailwind/CSS. */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
