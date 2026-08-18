export interface Experience {
  company: string
  role: string
  employmentType: string
  start: string
  end: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Scout',
    role: 'Full Stack Web Developer',
    employmentType: 'Remote, Full-Time',
    start: 'Dec 2023',
    end: 'Present',
    highlights: [
      'Architect and maintain scalable REST APIs using PHP and Symfony, supporting 100K+ daily API requests in production while improving average API response times by 30% through backend and query optimization.',
      'Designed and built the DtS virtual card management platform end-to-end — service layer, request/approval workflows, and Emburse payment integration — covering the full card lifecycle from issuance and limit-increase approvals through closure; became the largest single engineering initiative on the team.',
      'Design and optimize MongoDB data models and queries to support high-volume backend services and improve data retrieval performance.',
      'Develop secure API integrations with authentication, authorization, validation, and error-handling layers, reducing API error rates by 40%.',
      'Build and maintain React applications with Redux, developing API-driven features and responsive interfaces while improving page-load performance.',
      'Leverage Claude and AI-assisted development workflows for code generation, debugging, refactoring, documentation, and technical exploration, accelerating development while maintaining engineering, security, and code-review standards.',
    ],
  },
  {
    company: 'Contextual Code',
    role: 'Full Stack Web Developer',
    employmentType: 'Remote, Full-Time',
    start: 'Jan 2023',
    end: 'Dec 2023',
    highlights: [
      'Engineered and maintained full-stack enterprise web applications using PHP, Laravel, Next.js, JavaScript, and Tailwind CSS within Agile/Scrum development teams.',
      'Designed and implemented RESTful APIs with PHP and Laravel, supporting decoupled frontend applications and improving data delivery performance by 40%.',
      'Integrated Ibexa CMS with headless frontend architectures, developing API integrations that reduced response latency by 35% and improved application performance.',
      'Built reusable React components within Next.js applications, styled with Tailwind CSS, to power decoupled, responsive frontend interfaces for enterprise clients.',
    ],
  },
  {
    company: 'Restrung',
    role: 'Full Stack Web Developer',
    employmentType: 'Remote, Freelance',
    start: 'May 2021',
    end: 'Jan 2023',
    highlights: [
      'Built and maintained a full-stack e-commerce platform from the ground up using JavaScript, jQuery, Bootstrap, Python, and Django, delivering responsive customer-facing experiences across desktop and mobile devices.',
      'Architected Django backend services powering authentication, business logic, dynamic content delivery, and core application workflows.',
      'Designed and optimized SQL databases for users, orders, and transactions, improving query execution speed while preserving transactional integrity across concurrent order processing.',
      'Built internal administrative dashboards for order, user, and inventory management, cutting manual processing time by 50%.',
      'Integrated Stripe payment processing into the checkout flow, handling secure transaction processing, order confirmation, and payment error-handling.',
    ],
  },
]

export interface EducationEntry {
  school: string
  location: string
  degree: string
  start: string
  end: string
}

export const education: EducationEntry[] = [
  {
    school: 'City University of New York',
    location: 'Queens, NY',
    degree: "Associate's Degree in Applied Sciences",
    start: 'Aug 2019',
    end: 'May 2021',
  },
]
