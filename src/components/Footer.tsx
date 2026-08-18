import { site } from '@/data/site'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with React, TypeScript &amp; Tailwind CSS</p>
      </Container>
    </footer>
  )
}
