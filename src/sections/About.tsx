import { site } from '@/data/site'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading eyebrow="about" title="A bit about me" />

        <div className="max-w-3xl space-y-5">
          {site.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
