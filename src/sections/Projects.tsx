import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons/BrandIcons'
import { projects } from '@/data/projects'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          eyebrow="projects"
          title="Selected work"
          description="A few projects I've shipped. Real write-ups and links are coming soon — for now these are placeholders."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                  <div className="flex shrink-0 gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-bg px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
