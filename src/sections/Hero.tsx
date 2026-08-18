import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import { site } from '@/data/site'
import { Container } from '@/components/Container'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Understated grid + glow backdrop, a nod to the engineering angle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold tracking-tight text-text sm:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-heading text-xl font-medium text-accent sm:text-2xl"
          >
            {site.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Download Résumé
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email James Darrigo"
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
            <a
              href={site.linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="James Darrigo on LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={site.github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="James Darrigo on GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-xs">scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </Container>
    </section>
  )
}
