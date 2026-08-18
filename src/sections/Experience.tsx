import { education, experience } from '@/data/experience'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { GraduationCap } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading eyebrow="experience" title="Where I've worked" />

        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((role, index) => (
            <Reveal as="li" key={role.company} delay={index * 0.08} className="mb-12 last:mb-0">
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent ring-4 ring-accent/15" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-text">
                  {role.role} <span className="text-accent">· {role.company}</span>
                </h3>
                <p className="font-mono text-sm text-muted">
                  {role.start} — {role.end}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-muted">{role.employmentType}</p>

              <ul className="mt-4 space-y-2.5">
                {role.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {education.map((entry) => (
            <Reveal as="li" key={entry.school} delay={experience.length * 0.08}>
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-muted" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-text">
                  <GraduationCap size={18} className="text-muted" />
                  {entry.degree}
                </h3>
                <p className="font-mono text-sm text-muted">
                  {entry.start} — {entry.end}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {entry.school} — {entry.location}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
