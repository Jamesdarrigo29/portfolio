export interface Project {
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Dwayne Atkinson Tours Jamaica',
    description:
      'Production marketing site for a Jamaica-based tour and transportation business. Built on Next.js 15 App Router with Server Components and Server Actions, with SEO handled end-to-end — per-page metadata, a dynamic sitemap, and JSON-LD structured data for tours and reviews — plus a server-validated contact form and WhatsApp-first CTAs throughout. All copy, pricing, and testimonials live in typed content files, so the business can update the site without touching a component.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Server Actions'],
    githubUrl: 'https://github.com/Jamesdarrigo29/dwayne-atkinson-tours',
    liveUrl: 'https://dwayneatkinsontours.com/',
  },
  {
    title: 'Lokt',
    description:
      'Upload a company’s privacy policy — a PDF or a live URL — and get a dashboard of its key attributes (data sharing, retention, user rights, risk flags) plus a chatbot that answers plain-English questions about it, grounded in the actual policy text with citations back to source clauses. A synchronous RAG pipeline (chunk → embed → pgvector) backs the chat, with four layered defenses against hallucination: a retrieval-confidence threshold that refuses to guess, strict grounding instructions with a prompt-injection guard, zero-temperature generation, and per-claim citations validated server-side before they reach the UI.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Claude', 'OpenAI'],
    githubUrl: 'https://github.com/Jamesdarrigo29/lokt',
    liveUrl: 'https://lokt.dev',
  },
]
