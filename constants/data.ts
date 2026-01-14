import type { Experience, Project, SkillCategory, ContactInfo, NavItem } from '@/types'
import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa'

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const aboutHighlights: string[] = [
  '8+ years of professional frontend development experience',
  'Expert in Shopify theme development and advanced customization',
  'Delivered scalable, high-quality e-commerce solutions for clients across AU, EU, and Japan',
  'Leveraged AI-assisted workflows to improve development speed and code quality',
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & Core Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Liquid', 'TypeScript'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'E-commerce Platforms & CMS',
    skills: ['Shopify', 'WordPress', 'Haravan'],
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Frameworks & Frontend Architecture',
    skills: ['Vue.js', 'Remix', 'Hydrogen', 'Next.js', 'React'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'API & Data Integration',
    skills: ['GraphQL', 'REST API'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    title: 'Design Collaboration',
    skills: ['Figma', 'Sketch', 'Zeplin', 'Photoshop'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Version Control & Workflow',
    skills: ['Git', 'Bitbucket', 'GitLab'],
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'AI-Assisted Development',
    skills: ['Cursor', 'ChatGPT'],
    color: 'from-indigo-500 to-indigo-600',
  },
]

export const experiences: Experience[] = [
  {
    company: 'AGAPI OPEN COMMERCE JOINT STOCK COMPANY',
    position: 'Flutter Developer',
    period: 'Jan 2025 - Present',
    location: 'Vietnam',
    technologies: ['Flutter', 'Dart', 'Firebase', 'MVVM Architecture', 'Misa API'],
    responsibilities: [
      'Designed and implemented responsive UI with Flutter (Web/iOS) using Loveable AI',
      'Built Database & configured MVVM architecture for scalable applications',
      'Integrated Firebase services (Authentication, Firestore, Storage) for real-time data management',
      'Integrated Misa invoice system for financial management',
      'Developed core modules including product management, invoice creation, stock tracking, and reporting dashboards',
      'Implemented role-based access control and multi-tenant data separation',
    ],
  },
  {
    company: 'FLAGSHIP JAPAN INC',
    position: 'Shopify Frontend Developer',
    period: 'Jan 2020 - Mar 2024',
    location: 'Japan (Remote)',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'HTML5', 'CSS3', 'API Integration'],
    responsibilities: [
      'Troubleshot, debugged, and deployed Shopify themes for Japanese clients',
      'Customized frontend on partner applications',
      'Communicated with Backend team for bug fixes and API integration',
      'Worked with Staffing (Hamsa Company) for project coordination',
      'Delivered high-quality e-commerce solutions for the Japanese market',
    ],
  },
  {
    company: 'HAMSA CORPORATION',
    position: 'Shopify Frontend Developer',
    period: 'Mar 2019 - Dec 2024',
    location: 'Vietnam',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3'],
    responsibilities: [
      'Troubleshot, debugged, and deployed existing and new Shopify themes',
      'Customized frontend on partner applications',
      'Supported other frontend teams with technical expertise',
      'Maintained and enhanced multiple Shopify storefronts',
      'Collaborated with cross-functional teams to deliver projects on time',
    ],
  },
  {
    company: 'HARAVAN TECHNOLOGY CORPORATION',
    position: 'Frontend Developer',
    period: 'Mar 2017 - Feb 2019',
    location: 'Vietnam',
    technologies: ['Haravan Platform', 'HTML5', 'CSS3', 'JavaScript', 'Liquid'],
    responsibilities: [
      'Created layouts from design files (Figma, Sketch, Zeplin)',
      'Met and discussed with clients to advise on features and priorities',
      'Fixed bugs and maintained themes for e-commerce platforms',
      'Improved interfaces and implemented client requirements',
      'Supported API-related issues and integrations',
    ],
  },
  {
    company: 'SEO HA NOI',
    position: 'Content Writer / SEO Website',
    period: 'Feb 2014 - Nov 2015',
    location: 'Ha Noi, Vietnam',
    technologies: ['SEO', 'Content Writing'],
    responsibilities: [
      'Wrote SEO-standard articles for websites',
      'Implemented keyword SEO strategies',
      'Optimized content for search engines',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Drug Management System',
    platform: 'Flutter + Firebase + Misa API',
    period: 'Jan 2025 - Present',
    description: 'A comprehensive drug management system with advanced features',
    features: [
      'Responsive UI designed and implemented with Flutter (Web/iOS)',
      'MVVM Architecture for scalable codebase',
      'Firebase Integration (Authentication, Firestore, Storage)',
      'Misa Invoice Integration for financial management',
      'Core Modules: Product management, invoice creation, stock tracking, reporting dashboards',
      'Role-based access control and multi-tenant data separation',
    ],
    team: '2 Developers, 1 Tester, 1 PM',
    role: 'Flutter Developer',
  },
  {
    title: 'At The Bathhouse Australia',
    platform: 'Shopify',
    period: 'Feb 2024 - May 2024',
    description: 'Modern e-commerce website for the Australian market',
    features: [
      'Converted design from Figma to Shopify',
      'Maintained and deployed features',
      'Integrated APIs for enhanced functionality',
      'Custom theme development',
    ],
    url: 'https://atthebathhouse.com.au/',
    team: '2 Developers, 1 Tester, 1 PM',
    role: 'Frontend Developer',
  },
  {
    title: 'Shark Tank Vietnam Startup - Amaze Dry Clean',
    platform: 'WordPress',
    period: 'Sep 2023 - Nov 2023',
    description: 'Professional website for Shark Tank Vietnam startup',
    features: [
      'Consulted on theme selection and customization',
      'Maintained and deployed features',
      'Custom development for specific requirements',
    ],
    url: 'https://amazedryclean.com/',
    team: '1 Developer (Solo Project)',
    role: 'Frontend Developer (Freelancer)',
  },
  {
    title: 'Familiar Japan E-commerce Website',
    platform: 'Shopify',
    period: 'Jul 2021 - Jan 2024',
    description: 'Professional e-commerce website for the Japanese market',
    features: [
      'Converted code from Mockup to Shopify platform',
      'Maintained and deployed new features',
      'Integrated APIs for seamless functionality',
      'Responsive design optimized for all devices',
    ],
    url: 'https://familiar.co.jp/',
    team: '2 Developers, 2 Testers, 2 PM',
    role: 'Frontend Developer',
  },
  {
    title: 'ZENB Japan E-commerce Website',
    platform: 'Shopify',
    period: 'Feb 2021 - Oct 2023',
    description: 'Premium e-commerce website for ZENB Japan - a health-focused food brand',
    features: [
      'Maintained and developed new features for the Shopify platform',
      'Enhanced user experience with responsive design and optimized performance',
      'Integrated custom functionalities and third-party APIs',
      'Collaborated with the design team to implement new UI/UX improvements',
      'Ensured cross-browser compatibility and mobile responsiveness',
    ],
    url: 'https://zenb.jp/',
    team: '4 Developers, 2 Testers, 1 PM',
    role: 'Frontend Developer',
  },
  {
    title: 'Flagship Subscription App',
    platform: 'Shopify + Vue.js',
    period: 'Jul 2020 - Apr 2021',
    description: 'Internal subscription management application',
    features: [
      'Developed and maintained layout for subscription app',
      'Customized and refined interface',
      'Cross-platform compatibility',
    ],
    team: '1 FE Developer, 2 BE Developers, 1 Tester, 1 PM',
    role: 'Frontend Developer',
  },
  {
    title: 'A.O. SMITH VIET NAM Website',
    platform: 'Haravan',
    period: 'Oct 2018 - Mar 2019',
    description: 'Corporate website for A.O. Smith Vietnam',
    features: [
      'Upgraded interface with modern design',
      'Connected features using Zeplin designs',
      'Supported API-related issues',
      'Client consultation and feature implementation',
    ],
    url: 'https://aosmith.com.vn/',
    team: '1 Developer, 1 Tester, 1 PM',
    role: 'Frontend Developer',
  },
  {
    title: 'HOANGMINH CO., LTD Website',
    platform: 'Haravan',
    period: 'Jan 2018 - Apr 2018',
    description: 'E-commerce website for HoangMinh Company',
    features: [
      'Improved interface with better UX/UI',
      'Advised solutions for client requirements',
      'Theme customization and optimization',
    ],
    url: 'https://appleworld.vn/',
    team: '2 Developers, 1 Tester, 1 PM',
    role: 'Frontend Developer',
  },
]

export const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'qdat.cts@gmail.com',
    href: 'mailto:qdat.cts@gmail.com',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '0977.789.697',
    href: 'tel:0977789697',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    value: 'facebook.com/quangdat.198',
    href: 'https://www.facebook.com/quangdat.198',
    color: 'from-blue-500 to-blue-600',
  },
]

export const personalInfo = {
  name: 'Dat Tran Quang',
  title: 'Frontend Developer',
  quote: 'Desire to work in a dynamic and professional environment, have access to learn new Frontend technologies for making applications and topics to improve my skills, and contribute to the development of the company and partners.',
  about: 'Experienced Frontend Developer in Shopify, WordPress, and Flutter development. Passionate about creating responsive, user-friendly web applications and cross-platform mobile solutions. Strong expertise in e-commerce platforms, theme customization, and modern frontend technologies.',
  socialLinks: {
    facebook: 'https://www.facebook.com/quangdat.198',
    email: 'mailto:qdat.cts@gmail.com',
  },
}
