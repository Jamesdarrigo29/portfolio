import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent">
        <span aria-hidden="true">// </span>
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
