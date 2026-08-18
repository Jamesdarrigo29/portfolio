import { skills } from '@/data/skills'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          eyebrow="skills"
          title="Tools of the trade"
          description="Technologies and practices I reach for regularly, grouped by where they fit in the stack."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <h3 className="mb-4 font-mono text-sm font-medium uppercase tracking-wide text-accent">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-sm text-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
