import { type FormEvent, useState } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'
import { site } from '@/data/site'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: site.linkedin.label, href: site.linkedin.url, icon: LinkedinIcon },
  { label: site.github.label, href: site.github.url, icon: GithubIcon },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // No backend — this just hands off to the visitor's mail client.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          eyebrow="contact"
          title="Let's build something"
          description="Open to full-time roles, contract work, or just a good conversation about engineering. Reach out however's easiest."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} className="shrink-0 text-accent" />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Send message
              </button>
              <p className="text-xs text-muted">
                Opens your email client with this pre-filled — nothing is sent from here.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
