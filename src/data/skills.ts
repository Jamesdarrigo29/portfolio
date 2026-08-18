export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['PHP', 'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Redux', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    category: 'Backend',
    items: ['Symfony', 'Laravel', 'Django', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Microsoft Azure', 'CI/CD', 'Git'],
  },
  {
    category: 'AI Tooling',
    items: ['Claude', 'AI-Assisted Development', 'AI Tooling'],
  },
  {
    category: 'Practices',
    items: [
      'API Design',
      'System Integration',
      'Performance Optimization',
      'Code Review',
      'Agile/Scrum',
    ],
  },
]
