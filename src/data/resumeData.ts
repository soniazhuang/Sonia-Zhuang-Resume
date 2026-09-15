import { Project, ExperienceCompany, Education } from '../types';

export const RESUME_INFO = {
  name: 'Sonia Zhuang',
  title: 'Software Engineering Manager',
  location: 'Seattle, WA',
  phone: '425-246-4051',
  email: 'soniazhuang@hotmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/soniazhuang',
  yearsOfExperience: '15+',
  availability: 'Open to Engineering Manager / Senior Manager / Director roles in Seattle & Remote/Hybrid',
  summary: `Engineering leader with 15+ years of experience building and operating large-scale customer-facing software at Amazon and Microsoft. Experienced in leading engineering teams, driving architecture and execution, and delivering highly scalable cloud systems, data pipelines, and integrations. Strong hands-on technical background across Java, JavaScript, AWS and high-volume data processing.`
};

export const CORE_STRENGTHS = [
  {
    title: 'Engineering Leadership',
    description: 'Leading multi-disciplinary engineering teams, setting technical strategy, driving execution, fostering psychological safety, and promoting high-performing engineers.',
    iconName: 'Users'
  },
  {
    title: 'Software Architecture & Cloud',
    description: 'Designing resilient distributed systems and microservices across AWS, ensuring 99.99%+ availability and zero-downtime migrations.',
    iconName: 'Cloud'
  },
  {
    title: 'High-Volume Data Pipelines',
    description: 'Processing 400M+ updates daily and publishing 3B+ products across 23 global marketplaces with strict SLA adherence.',
    iconName: 'Database'
  },
  {
    title: 'API & 3rd-Party Integrations',
    description: 'Engineering high-throughput syndication feeds and secure APIs with Google Shopping Ads, Microsoft Bing, Pinterest, and TikTok.',
    iconName: 'Network'
  },
  {
    title: 'Customer-Facing Experiences',
    description: 'Building omnichannel mobile & web shopping workflows, including greenfield grocery In-Store Mode serving 800+ physical stores.',
    iconName: 'Smartphone'
  },
  {
    title: 'Operational Excellence & Mentorship',
    description: 'Pioneering rigorous CI/CD, failure handling, automated rollback, and promoting 3 engineers within a single year through structured coaching.',
    iconName: 'Award'
  }
];

export const IMPACT_METRICS = [
  { value: '15+', label: 'Years Experience', subtext: 'Amazon & Microsoft' },
  { value: '3 Billion+', label: 'Catalog Products', subtext: 'Across 23 Marketplaces' },
  { value: '400M+', label: 'Daily Updates', subtext: 'Real-time Publishing' },
  { value: '800+', label: 'Grocery Stores', subtext: '40K Products In-Store' },
  { value: '3', label: 'Engineers Promoted', subtext: 'Within 1 Year Coaching' }
];

export const PROJECTS: Project[] = [
  {
    id: 'catalog-publishing',
    title: 'Global Catalog Publishing & Ad Syndication Engine',
    subtitle: 'High-scale distributed publishing platform serving 3B products to major search ad channels',
    category: 'distributed',
    company: 'Amazon',
    period: '2025 - 2026',
    role: 'Software Development Manager',
    image: '/src/assets/images/catalog_pipeline_ui_1789413852066.jpg',
    shortDescription: 'Led migration of Amazon’s 8-year-old catalog publishing system to modern cloud architecture processing 400M+ catalog updates daily across 23 marketplaces.',
    keyMetrics: [
      { label: 'Catalog Data', value: '3 Billion' },
      { label: 'Daily Updates', value: '400M+' },
      { label: 'Marketplaces', value: '23 Global' },
      { label: 'External Partners', value: 'Google, Bing, TikTok' }
    ],
    bulletPoints: [
      "Led the migration of Amazon's 8-year-old catalog publishing platform to a modern publishing architecture supporting 3 billion product catalog data across 23 marketplaces and processing 400M+ catalog updates daily.",
      "Designed and drove the migration of publishing workflows supporting Shopping Ads integrations with Google, Bing, Pinterest, TikTok and other external clients, coordinating requirements and technical dependencies across multiple teams.",
      "Delivered the entire catalog publishing system migration, followed by complete deprecation of the legacy platform.",
      "Drove architecture and operational decisions around data transformation, publishing workflows, failure handling, monitoring, scalability, and migration safety.",
      "Partnered with product managers, senior engineers, and partner teams to identify integration requirements and deliver reliable publishing capabilities at very high data volumes."
    ],
    tags: ['AWS', 'Java', 'Distributed Systems', 'Data Pipelines', 'High-Throughput', 'SEM Ads Integration', 'Migration & Deprecation'],
    problemStatement: 'The legacy 8-year-old publishing platform was struggling under exponential catalog growth, high operational overhead, and rigid batch processing when attempting to syndicate product data to Google, TikTok, Bing, and Pinterest ads in real time.',
    architectureOverview: 'Architected event-driven ingestion streams, distributed transformation pipelines, and rate-limited syndication adapters that partition workloads across marketplaces with automated dead-letter reprocessing and blue/green validation.',
    solutionImpact: 'Successfully achieved 100% migration with zero data loss or advertising downtime, deprecated legacy monolith infrastructure, and lowered publishing latency by orders of magnitude while handling 400M+ daily updates.'
  },
  {
    id: 'instore-grocery-mode',
    title: 'Greenfield Grocery In-Store Mode & Local Promotions',
    subtitle: 'Omnichannel in-store customer mobile app experience across 800+ physical grocery stores',
    category: 'grocery',
    company: 'Amazon',
    period: '2021 - 2024',
    role: 'Senior Software Development Engineer',
    image: '/src/assets/images/instore_grocery_ui_1789413839250.jpg',
    shortDescription: 'Spearheaded greenfield In-Store Mode enabling shoppers to discover targeted promotions across 40,000+ products in 800+ brick-and-mortar grocery stores.',
    keyMetrics: [
      { label: 'Physical Stores', value: '800+' },
      { label: 'Product Catalog', value: '40K Products' },
      { label: 'Response Target', value: '<100ms' },
      { label: 'Architecture', value: 'Multi-Tier Caching' }
    ],
    bulletPoints: [
      "Led development of a greenfield grocery In-Store Mode experience enabling customers to discover promotions across approximately 40K products for 800+ Grocery stores.",
      "Designed promotion retrieval and presentation workflows supporting multiple promotion types (BOGO, Prime member deals, bundle savings, digital coupons).",
      "Used caching and efficient data retrieval strategies to maintain responsive experiences at large product scale in mobile environments.",
      "Partnered with product, UX designer and engineering teams to define architecture, prioritize features, and deliver the new customer experience from the ground up."
    ],
    tags: ['Mobile UX', 'Distributed Caching', 'Java', 'Latency Optimization', 'E-Commerce', 'Grocery Retail', 'Product Discovery'],
    problemStatement: 'Customers inside physical stores needed rapid, store-specific promotion discovery without sluggish connectivity or confusing digital coupons.',
    architectureOverview: 'Designed tiered distributed caching layer with localized geo-fencing, edge-ready product promotion indices, and high-concurrency read replicas.',
    solutionImpact: 'Delivered an intuitive in-store shopping companion deployed across 800+ stores, driving significant lift in promotion redemption and in-store Prime engagement.'
  },
  {
    id: 'prescription-pet-food',
    title: 'Regulated Prescription Pet Food Workflow & Verification',
    subtitle: 'End-to-end veterinarian verification, order holds, checkout and Subscribe & Save engine',
    category: 'ecommerce',
    company: 'Amazon',
    period: '2016 - 2020',
    role: 'Software Development Engineer',
    image: '/src/assets/images/prescription_pet_ui_1789413864453.jpg',
    shortDescription: 'Designed and delivered the regulated prescription-verification workflow allowing customers to order veterinary pet diet foods with compliant veterinarian authorization.',
    keyMetrics: [
      { label: 'Domain', value: 'Regulated Commerce' },
      { label: 'Integration', value: 'Subscribe & Save' },
      { label: 'Workflow', value: 'Async State Machine' },
      { label: 'Coverage', value: 'US Nationwide' }
    ],
    bulletPoints: [
      "Designed and delivered a prescription-verification workflow enabling customers to purchase prescription pet food on Amazon.",
      "Built customer and service workflows spanning veterinarian search, prescription verification, order holds, checkout integration, and Subscribe & Save.",
      "Worked across frontend and backend components to coordinate asynchronous verification and order-processing flows."
    ],
    tags: ['Regulated Workflows', 'Order Management', 'Asynchronous Verification', 'Checkout Integration', 'Subscribe & Save', 'Java/AWS'],
    problemStatement: 'Prescription diets require legally mandated veterinary clinic approval prior to shipment release, demanding compliant hold mechanisms without degrading standard 1-Click checkout fluidity.',
    architectureOverview: 'Constructed an asynchronous state-machine workflow engine that manages order holds, clinic validation queues, customer notification events, and seamless auto-renewal re-authorization via Subscribe & Save.',
    solutionImpact: 'Unlocked a major high-margin pet healthcare category on Amazon with full compliance and effortless recurring re-order flows for pet parents.'
  },
  {
    id: 'virtual-furniture-showroom',
    title: 'Photorealistic 3D Virtual Furniture Showroom',
    subtitle: 'Interactive 3D visualization and spatial room-layout engine for Amazon Home Improvement',
    category: 'graphics',
    company: 'Amazon',
    period: '2017 - 2018',
    role: 'Software Development Engineer',
    image: '/src/assets/images/furniture_showroom_ui_1789413875877.jpg',
    shortDescription: 'Built interactive 3D virtual showroom experience for furniture using photorealistic web 3D technology, mentoring engineers and leading frontend architecture.',
    keyMetrics: [
      { label: 'Technology', value: 'WebGL / 3D' },
      { label: 'Category', value: 'Home Improvement' },
      { label: 'Role', value: 'Frontend Lead & Mentor' },
      { label: 'Rendering', value: 'Photorealistic' }
    ],
    bulletPoints: [
      "Built a virtual showroom experience for furniture using photorealistic 3D technology.",
      "Led frontend architecture and implementation while mentoring engineers and coordinating technical execution across the project."
    ],
    tags: ['WebGL', 'JavaScript', '3D Graphics', 'Frontend Architecture', 'Interactive UX', 'Mentorship'],
    problemStatement: 'Online furniture buyers experience high return rates due to uncertainty regarding scale, materials, and how pieces fit within realistic living spaces.',
    architectureOverview: 'Engineered lightweight 3D asset loaders, dynamic lighting and texture shaders, and responsive UI overlays allowing shoppers to inspect materials and dimensions in real time.',
    solutionImpact: 'Significantly improved customer confidence in large-ticket furniture purchases and pioneered immersive 3D shopping experiences on Amazon.'
  }
];

export const EXPERIENCE_HISTORY: ExperienceCompany[] = [
  {
    company: 'Amazon',
    location: 'Seattle, WA',
    totalPeriod: '2016 - 2026 (10 Years)',
    overallRole: 'Software Development Manager & Senior Software Development Engineer',
    summary: 'Led software engineering teams and delivered mission-critical systems spanning global catalog publishing, high-volume search engine marketing, grocery advertising, in-store mobile modes, and regulated customer checkout experiences.',
    roles: [
      {
        title: 'Software Development Manager — Catalog Publishing & Search Engine Marketing',
        group: 'Search Engine Marketing',
        period: '2025 - 2026',
        highlights: [
          "Led the migration of Amazon's 8-year-old catalog publishing platform to a modern publishing architecture supporting 3 billion product catalog data across 23 marketplaces and processing 400M+ catalog updates daily.",
          "Designed and drove the migration of publishing workflows supporting Shopping Ads integrations with Google, Bing, Pinterest, TikTok and other external clients, coordinating requirements and technical dependencies across multiple teams.",
          "Delivered the entire catalog publishing system migration, followed by complete deprecation of the legacy platform.",
          "Drove architecture and operational decisions around data transformation, publishing workflows, failure handling, monitoring, scalability, and migration safety.",
          "Partnered with product managers, senior engineers, and partner teams to identify integration requirements and deliver reliable publishing capabilities at very high data volumes."
        ]
      },
      {
        title: 'Engineering Manager — Grocery Ads',
        group: 'Amazon Ads / Grocery',
        period: '2024 - 2025',
        highlights: [
          "Managed tech team building grocery advertising experiences in partnership with Amazon Ads.",
          "Set technical direction, managed execution across multiple projects, and partnered with product and Ads engineering teams to deliver customer-facing advertising capabilities.",
          "Promoted 3 engineers within one year through structured mentorship, technical growth, and career development."
        ]
      },
      {
        title: 'Senior Software Development Engineer — In-Store Mode & Grocery Promotions',
        group: 'Amazon Grocery',
        period: '2021 - 2024',
        highlights: [
          "Led development of a greenfield grocery In-Store Mode experience enabling customers to discover promotions across approximately 40K products for 800+ Grocery stores.",
          "Designed promotion retrieval and presentation workflows supporting multiple promotion types.",
          "Used caching and efficient data retrieval strategies to maintain responsive experiences at large product scale.",
          "Partnered with product, UX designer and engineering teams to define architecture, prioritize features, and deliver the new customer experience from the ground up."
        ]
      },
      {
        title: 'Software Development Engineer — Prescription Pet Food & 3D Virtual Showroom',
        group: 'Home Improvement & E-Commerce',
        period: '2016 - 2020',
        highlights: [
          "Designed and delivered a prescription-verification workflow enabling customers to purchase prescription pet food on Amazon, coordinating across vet search, order holds, checkout, and Subscribe & Save.",
          "Worked across frontend and backend components to coordinate asynchronous verification and order-processing flows.",
          "Built a virtual showroom experience for furniture using photorealistic 3D technology, leading frontend architecture and mentoring engineers."
        ]
      }
    ]
  },
  {
    company: 'Microsoft',
    location: 'Redmond, WA',
    totalPeriod: '2010 - 2016 (6 Years)',
    overallRole: 'Software Engineer II',
    summary: 'Engineered performance-critical runtime technology in the Developer Division for Microsoft Edge browser, followed by customer-facing software and services for the Microsoft Store consumer platform.',
    roles: [
      {
        title: 'Software Engineer II — JavaScript Engine & Microsoft Store',
        group: 'Developer Division & Microsoft Stores',
        period: '2010 - 2016',
        highlights: [
          "Spent 4 years working on the JavaScript engine for Microsoft Edge (Chakra), contributing to performance-critical browser compiler and runtime technology.",
          "Subsequently worked on the Microsoft Store, building customer-facing software and services for a large-scale global consumer platform.",
          "Deep focus on systems programming, memory safety, runtime optimizations, and cross-platform reliability."
        ]
      }
    ]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    institution: 'Uppsala University',
    degree: 'Master of Science (M.S.), Computer Science',
    period: '2008 - 2010',
    location: 'Sweden',
    notes: 'Specialization in Distributed Systems, Software Engineering, and Advanced Algorithms.'
  },
  {
    institution: 'Beijing University of Chemical Technology',
    degree: 'Bachelor of Science (B.S.), Information Technology',
    period: '2002 - 2006',
    location: 'China',
    notes: 'Foundations in Computer Science, Data Structures, Software Engineering, and Mathematics.'
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Leadership & Strategy',
    items: ['Engineering Leadership', 'Technical Strategy & Roadmapping', 'Team Mentorship & Growth', 'Hiring & Performance Management', 'Agile & Scrum Execution', 'Operational Excellence']
  },
  {
    category: 'Architecture & Systems',
    items: ['Distributed Systems', 'Cloud Architecture (AWS)', 'High-Scale Data Pipelines', 'Microservices & Event-Driven Systems', 'API Design & 3rd-Party Syndication', 'High Availability & Resilience']
  },
  {
    category: 'Technologies & Tools',
    items: ['Java', 'JavaScript / TypeScript', 'AWS (S3, SQS, SNS, DynamoDB, Lambda, ECS)', 'Distributed Caching', 'SQL & NoSQL', 'Browser Engines & WebGL', 'Git, CI/CD, Automated Testing']
  }
];
