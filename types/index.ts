export interface Experience {
  company: string
  position: string
  period: string
  location: string
  technologies: string[]
  responsibilities: string[]
}

export interface Project {
  title: string
  platform: string
  period: string
  description: string
  features: string[]
  url?: string
  team: string
  role: string
}

export interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number }>
  label: string
  value: string
  href: string
  color: string
}

export interface NavItem {
  name: string
  href: string
}
