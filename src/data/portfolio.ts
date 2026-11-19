export interface ProjectUseCase {
  title: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  url: string;
  repositoryUrl?: string;
  coverImage: string;
  coverAlt: string;
  accentLabel?: string;
  status?: 'live' | 'experimental';
  statusNote?: string;
  role: string;
  overview: string;
  useCases: ProjectUseCase[];
  technologies: string[];
  disclaimer?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  label: string;
  category: string;
  tags: string[];
  summary: string;
  coverImage: string;
  coverAlt: string;
  paragraphs: {
    heading?: string;
    body: string;
  }[];
}

export interface AccordionEntry {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badgeColor?: string;
  badgeLabel?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_ASSETS = {
  background: '/src/assets/images/bg_coastal_dusk_1794977312617.jpg',
  brandArt: '/src/assets/images/project_ladestack_ecosystem.jpg',
  profilePicture: '/src/assets/images/girish_lade_profile.png',
  gbCoder: '/src/assets/images/project_gb_coder.jpg',
  lsPdf: '/src/assets/images/project_ls_pdf.jpg',
  md2Pdf: '/src/assets/images/project_md2pdf.jpg',
  bharatLand: '/src/assets/images/project_bharat_land_converter.jpg',
  swiftResume: '/src/assets/images/project_swift_resume.jpg',
  imageCompressor: '/src/assets/images/project_image_compressor.jpg',
  gamehub: '/src/assets/images/project_gamehub.jpg',
  ladestackDrive: '/src/assets/images/project_ladestack_drive.jpg',
  blogLight: '/src/assets/images/blog_typography_light_1794977315392.jpg',
  ideStudio: '/src/assets/images/project_gb_coder.jpg',
  pdfEditorial: '/src/assets/images/project_ls_pdf.jpg',
  systemsGrid: '/src/assets/images/project_bharat_land_converter.jpg',
} as const;

export const PROFILE = {
  fullName: 'Girish Balaso Lade',
  displayName: 'Girish Lade',
  eyebrow: 'DEVELOPER & PRODUCT DESIGNER',
  headline: 'UI/UX Designer · Full-Stack Developer · Founder of LadeStack',
  avatar: SITE_ASSETS.profilePicture,
  supportingPositioning: 'Engineer by training. Product builder by choice.',
  primaryStatement: 'Building useful software with thoughtful design.',
  location: 'Pune, Maharashtra, India',
  brandName: 'LadeStack',
  brandUrl: 'https://ladestack.in/',
  email: 'admin@ladestack.in',
  shortBio:
    "I'm Girish, a UI/UX designer and full-stack developer building LadeStack, a growing collection of accessible, privacy-conscious developer tools and practical web applications.",
  mediumBio:
    "I'm Girish Balaso Lade, an independent developer and product designer based in Pune, India. My academic path began in Mechanical Engineering, while my professional curiosity took me into web development, interaction design, AI-assisted software creation, and browser-native computing.",
  extendedBio: [
    "I'm an engineer by education and a software product builder by choice. My background in Mechanical Engineering shaped how I approach problems: identify constraints, understand the system, simplify the process, and iterate until the result becomes dependable.",
    "Over time, that problem-solving mindset found a new outlet in software engineering, UI/UX design, and product architecture. Today, I design and develop modern websites, full-stack applications, browser-based utilities, and experimental AI-powered developer tools.",
    "My work spans the experience users see, including information architecture, visual systems, responsive interaction, and accessibility, as well as the systems behind those experiences: TypeScript and Node.js applications, modern frontend frameworks, storage design, authentication patterns, and deployment pipelines.",
    "I started LadeStack around a simple belief: everyday software should be useful before it is complicated. I enjoy turning rough ideas into working product experiences by moving between research, interface design, implementation, debugging, documentation, SEO, and deployment.",
    "I explore AI coding agents and multi-model workflows as development accelerators rather than substitutes for verification, architecture, or user-centered thinking.",
  ],
  education: [
    {
      qualification: 'Diploma in Mechanical Engineering',
      institution: 'Fabtech Technical Campus',
      note: 'Previously described as completed in 2021',
    },
    {
      qualification: 'Mechanical Engineering Studies',
      institution: "SVERI's College of Engineering, Pandharpur",
      note: 'Engineering studies in Mechanical Engineering',
    },
  ],
  philosophyQuote:
    'I build products that are approachable, thoughtfully designed, and worth returning to.',
  philosophyTagline: 'Useful software. Thoughtful design. Fewer barriers.',
  philosophySupporting:
    'Good software should be useful, understandable, and respectful of the people who use it.',
  socialLinks: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/girishlade111',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/girish-lade/',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/girish_lade_/',
    },
    {
      id: 'codepen',
      label: 'CodePen',
      href: 'https://codepen.io/Girish-Lade-the-looper',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:admin@ladestack.in',
    },
  ],
} as const;

export const CAPABILITIES: AccordionEntry[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX & Interface Design',
    description:
      'Turning product ideas into clear user flows, balanced visual systems, responsive layouts, accessible controls, and refined interface typography.',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Building responsive, fast, interactive interfaces with React, TypeScript, Astro, Next.js, Tailwind CSS, and browser-native APIs.',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Product Prototyping',
    description:
      'Designing end-to-end flows across input validation, API integrations, storage models, authentication patterns, and deployment pipelines.',
  },
  {
    id: 'tooling',
    title: 'Developer Tooling',
    description:
      'Creating browser-first workspaces, local document converters, and practical utilities powered by Monaco Editor, WebContainers, and IndexedDB.',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description:
      'Exploring agentic workflows, multi-model routing, and transparent BYOK architectures that keep users in control of prompts and keys.',
  },
  {
    id: 'seo',
    title: 'Technical SEO & Localization',
    description:
      'Structuring crawlable static sites with Astro, semantic HTML, canonical/hreflang metadata, sitemaps, and multilingual content routes.',
  },
];

export const JOURNEY_PRACTICE: AccordionEntry[] = [
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering Foundation',
    subtitle: 'Systems thinking & practical trade-offs',
    badgeLabel: 'ME',
    badgeColor: '#B45309',
    description:
      'Formal education and study in Mechanical Engineering shaped a systems-oriented approach to constraints, trade-offs, practical problem solving, and iteration.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    subtitle: 'Clarity, typography & accessibility',
    badgeLabel: 'UI',
    badgeColor: '#1D4ED8',
    description:
      'Focus on responsive interfaces, information architecture, typography, interaction design, accessibility, and clear workflows.',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    subtitle: 'React, TypeScript, Node.js & APIs',
    badgeLabel: 'FS',
    badgeColor: '#0F766E',
    description:
      'Work spans React, TypeScript, Node.js-oriented application development, frontend architecture, APIs, browser storage, authentication patterns, databases, and deployment workflows.',
  },
  {
    id: 'browser-first',
    title: 'Browser-First Tools',
    subtitle: 'Local execution & portable outputs',
    badgeLabel: 'BF',
    badgeColor: '#4338CA',
    description:
      'Interest in Monaco Editor, WebContainers, IndexedDB, Web Workers, Canvas, local processing, portable outputs, and browser-native software.',
  },
  {
    id: 'ai-engineering',
    title: 'AI-Assisted Engineering',
    subtitle: 'BYOK workflows & coding agents',
    badgeLabel: 'AI',
    badgeColor: '#6D28D9',
    description:
      'Exploration of coding agents, model APIs, BYOK architectures, multi-provider systems, review workflows, and responsible AI-assisted development.',
  },
  {
    id: 'ladestack',
    title: 'LadeStack',
    subtitle: 'Independent product ecosystem',
    badgeLabel: 'LS',
    badgeColor: '#A16207',
    description:
      'Independent product ecosystem focused on useful developer and productivity tools built with clean interfaces and minimal setup friction.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'ladestack',
    title: 'LadeStack',
    shortDescription:
      'A developer-friendly home for browser-first utilities, product documentation, and practical software.',
    category: 'Developer Ecosystem · Product Platform',
    url: 'https://ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111',
    coverImage: SITE_ASSETS.brandArt,
    coverAlt:
      'Architectural dark glass ecosystem showcasing LadeStack web developer utilities, IDE, and document services',
    status: 'live',
    role: 'Founder, product direction, design, development and maintenance',
    overview:
      "LadeStack is Girish Lade's independent software product brand and a central home for developer utilities, creative productivity tools, and practical browser-based applications. It emphasizes browser-first access, useful free tooling, clear interfaces, and local processing where technically practical.",
    useCases: [
      {
        title: 'Find the Right Tool for a Specific Task',
        description:
          'Students and developers can browse a unified catalog of coding, PDF, image, resume, and conversion utilities instead of searching across unrelated services.',
      },
      {
        title: 'Learn How Browser-First Tools Work',
        description:
          'Documentation and explanatory guides explore client-side execution, local persistence, and browser limitations transparently.',
      },
      {
        title: 'Discover a Product Builder and Collaborate',
        description:
          'Provides context around current products, connected GitHub repositories, and direct contact channels for builders and collaborators.',
      },
    ],
    technologies: [
      'Astro',
      'TypeScript',
      'Static Generation',
      'Multilingual Routing',
      'Technical SEO',
      'Responsive UI',
    ],
  },
  {
    slug: 'gb-coder',
    title: 'GB Coder',
    shortDescription:
      'A Monaco-based browser IDE for static web prototyping and compatible Node.js/WebContainer workflows.',
    category: 'Developer Tools · Online IDE',
    url: 'https://code.ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111/GB-CODER-PUBLIC-ALPHA',
    coverImage: SITE_ASSETS.gbCoder,
    coverAlt:
      'Ultra-sleek dark browser IDE workspace with code editor, project tree, terminal, and live preview',
    status: 'live',
    role: 'Founder and product creator',
    overview:
      'GB Coder is a browser-based development studio for writing, editing, previewing, and experimenting with web applications. Its documented direction includes a lightweight HTML/CSS/JavaScript workflow alongside a WebContainer-powered environment for compatible Node.js-oriented development.',
    useCases: [
      {
        title: 'Prototype Web Interfaces Without Local Setup',
        description:
          'Sketch HTML, CSS, and JavaScript components with immediate preview feedback and iterate on styling without configuring a local project.',
      },
      {
        title: 'Experiment With Compatible Framework Projects',
        description:
          'Explore React, Vue, or Node.js-compatible starters inside supported browsers with package scripts and dev server previews.',
      },
      {
        title: 'Maintain and Export Portable Learning Projects',
        description:
          'Save workspaces in browser-local storage and export project archives as ZIP files for use in local editors or repositories.',
      },
    ],
    technologies: [
      'Monaco Editor',
      'TypeScript',
      'WebContainers',
      'IndexedDB',
      'Browser Execution',
      'ZIP Export',
    ],
    disclaimer:
      'Browser execution depends on runtime and browser compatibility; not every desktop framework or native dependency can run in-browser.',
  },
  {
    slug: 'ls-pdf',
    title: 'LS PDF',
    shortDescription:
      'A local-first toolkit for editing, organizing, converting, and processing PDF documents.',
    category: 'Documents · PDF Toolkit',
    url: 'https://pdf.ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111/LS-PDF',
    coverImage: SITE_ASSETS.lsPdf,
    coverAlt:
      'Dark frosted glass interface cards for Merge, Split, Compress, Convert, and OCR operations in LS PDF',
    status: 'live',
    role: 'Product creator and maintainer',
    overview:
      'LS PDF is a browser-oriented PDF utility suite designed around practical document operations while minimizing unnecessary server-side handling where local processing is practical. The repository documents 17 functions covering merging, splitting, compression, rotation, conversion, and page management.',
    useCases: [
      {
        title: 'Organize Everyday PDFs',
        description:
          'Combine multiple PDFs, remove unneeded pages, reorder sequences, add page numbers, or rotate scanned pages cleanly.',
      },
      {
        title: 'Prepare Documents for Sharing and Archiving',
        description:
          'Reduce document size, convert image scans to PDF, export pages as images, or extract text and embedded images where supported.',
      },
      {
        title: 'Handle Appropriate Operations Locally',
        description:
          'Architected around client-side browser libraries and downloadable outputs without requiring mandatory account sign-in.',
      },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'PDF.js',
      'pdf-lib',
      'JSZip',
      'Web Workers',
      'IndexedDB',
    ],
    disclaimer:
      'Local browser execution is an architectural privacy choice, not an external security certification or audited encryption guarantee.',
  },
  {
    slug: 'md2pdf',
    title: 'MD2PDF',
    shortDescription:
      'Turn Markdown and repository documentation into polished PDFs and organized document books.',
    category: 'Documentation · Markdown Publishing',
    url: 'https://md2pdf.ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111/ReadmePDF',
    coverImage: SITE_ASSETS.md2Pdf,
    coverAlt:
      'Dark mode split-screen editor showing Markdown source code on left and typeset PDF document page on right',
    status: 'live',
    role: 'Creator and product owner under LadeStack',
    overview:
      'MD2PDF (formerly ReadmePDF) is a developer-friendly Markdown publishing tool for transforming Markdown text, local .md files, and compatible GitHub repository documentation into readable PDF documents and multi-chapter documentation books.',
    useCases: [
      {
        title: 'Convert Technical Notes and READMEs Into PDF',
        description:
          'Turn headings, tables, links, and code blocks into portable print-ready PDFs for project handoffs, class notes, or offline reading.',
      },
      {
        title: 'Assemble Multi-File Documentation Books',
        description:
          'Select repository Markdown chapters, organize reading order, generate a cover and table of contents, and export consolidated documentation.',
      },
      {
        title: 'Create Consistent Technical or Academic Documents',
        description:
          'Combine GitHub-Flavored Markdown, KaTeX math rendering, syntax highlighting, and local draft history in one workflow.',
      },
    ],
    technologies: [
      'Astro',
      'Markdown / GFM',
      'DOMPurify',
      'KaTeX',
      'pdf-lib',
      'JSZip',
      'IndexedDB',
      'GitHub Content Fetching',
    ],
    disclaimer:
      'Repository-fetching workflows make explicit network requests to GitHub while PDF assembly runs in the browser.',
  },
  {
    slug: 'bharat-land-converter',
    title: 'Bharat Land Converter',
    shortDescription:
      'Compare standard and regional Indian land-area units through a region-aware conversion interface.',
    category: 'Engineering & Measurement · Unit Converter',
    url: 'https://land.ladestack.in/',
    coverImage: SITE_ASSETS.bharatLand,
    coverAlt:
      'Precision dark technical dashboard with cadastral land vectors and Indian unit conversion telemetry',
    status: 'live',
    role: 'Product creator',
    overview:
      'Bharat Land Converter is a browser-based tool for comparing standard land-area measurements—such as square feet, square meters, acres, and hectares—with regional Indian units including Guntha, Bigha, Biswa, Kattha, Dhur, Kanal, Marla, Cent, and Ground.',
    useCases: [
      {
        title: 'Compare Regional and Standard Land Units',
        description:
          'Enter an area in a local unit and immediately view equivalent values across broadly recognized metric and imperial units.',
      },
      {
        title: 'Understand Cross-State Measurement Differences',
        description:
          'Explore how unit conventions vary across Indian states, particularly for region-dependent terms like Bigha.',
      },
      {
        title: 'Support Preliminary Field Estimation',
        description:
          'Provide engineers, students, and researchers a quick calculation reference prior to formal surveying.',
      },
    ],
    technologies: ['Browser Calculation', 'Region-Aware Factors', 'Responsive Numeric UI'],
    disclaimer:
      'Traditional land units vary by state and district. Output is for reference only and is not an official land survey or legal measurement.',
  },
  {
    slug: 'swift-resume',
    title: 'Swift Resume',
    shortDescription:
      'Create structured, recruiter-friendly resumes with live preview and PDF export.',
    category: 'Career Productivity · Resume Builder',
    url: 'https://resume.ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111/swift-resume-builder',
    coverImage: SITE_ASSETS.swiftResume,
    coverAlt:
      'Modern dark resume builder UI with modular section inputs and live dark-charcoal resume layout preview',
    status: 'live',
    role: 'Product creator',
    overview:
      'Swift Resume is a browser-based structured resume builder designed around responsive form editing, A4 live preview, template-based presentation, local draft persistence, and print-ready PDF output.',
    useCases: [
      {
        title: 'Build a First Professional Resume',
        description:
          'Organize education, technical skills, projects, and contact details into a clean, readable layout without fighting word-processor spacing.',
      },
      {
        title: 'Tailor a Resume for Different Opportunities',
        description:
          'Update summaries, reorder sections, and inspect visual balance in real time using the live preview.',
      },
      {
        title: 'Export a Clean, Portable Application Document',
        description:
          'Generate PDF output directly from browser-local drafts without requiring mandatory hosted resume accounts.',
      },
    ],
    technologies: ['React', 'TypeScript', 'Structured Form State', 'A4 Live Preview', 'PDF Output'],
    disclaimer:
      'Designed with readable, recruiter-friendly formatting. No resume template can guarantee automated applicant tracking outcomes.',
  },
  {
    slug: 'ls-image-compressor',
    title: 'LS Image Compressor',
    shortDescription:
      'Resize, optimize, and convert images through a privacy-conscious browser workflow.',
    category: 'Image Utilities · Web Performance',
    url: 'https://img.ladestack.in/',
    repositoryUrl: 'https://github.com/girishlade111/Image-Compressor',
    coverImage: SITE_ASSETS.ideStudio,
    coverAlt: 'Dark tactile studio optics representing LS Image Compressor',
    status: 'live',
    role: 'Product creator and repository maintainer',
    overview:
      'LS Image Compressor is a browser-based image optimization tool for resizing, compressing, and converting supported image formats (such as JPEG, PNG, and WebP) with an emphasis on client-side processing.',
    useCases: [
      {
        title: 'Optimize Website Images for Faster Pages',
        description:
          'Adjust quality and maximum dimensions before shipping photos and illustrations in static sites or web apps.',
      },
      {
        title: 'Prepare Images for Upload Limits and Sharing',
        description:
          'Target practical output sizes for portals, email attachments, and applications without sacrificing clarity.',
      },
      {
        title: 'Process Images Locally in the Browser',
        description:
          'Work directly with local files or clipboard pastes on-device rather than sending originals to unrelated conversion servers.',
      },
    ],
    technologies: ['Client-Side Processing', 'Canvas / Compression', 'Format Conversion', 'PWA Design'],
  },
  {
    slug: 'gamehub',
    title: 'GameHub',
    shortDescription:
      'A browser-based collection of small interactive games.',
    category: 'Games · Interactive Frontend',
    url: 'https://games-ladestack.vercel.app/',
    repositoryUrl: 'https://github.com/girishlade111/games-ladestack',
    coverImage: SITE_ASSETS.systemsGrid,
    coverAlt: 'Precision mechanical dark surface representing GameHub interactive collection',
    status: 'live',
    role: 'Project builder and developer',
    overview:
      'GameHub is an interactive browser-game project built with Next.js, React, and TypeScript to provide quick access to lightweight games and explore frontend interaction patterns. It features a repository-documented collection of 33 games across arcade, puzzle, action, strategy, word, and card categories.',
    useCases: [
      {
        title: 'Enjoy Short Games During a Break',
        description:
          'Open classic lightweight browser games like Snake, Tetris, or 2048 directly in the browser with no installation.',
      },
      {
        title: 'Explore Puzzle, Word, and Strategy Modes',
        description:
          'Switch easily between quick reaction challenges, memory exercises, and turn-based board games.',
      },
      {
        title: 'Demonstrate Interactive Frontend Architecture',
        description:
          'Showcases dynamic code splitting, canvas animation loops, and responsive state management across a multi-game catalog.',
      },
    ],
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Dynamic Code Splitting',
      'Canvas Loops',
    ],
  },
  {
    slug: 'ladestack-drive',
    title: 'LadeStack Drive',
    shortDescription:
      'File-management project. Exact production functionality requires verification.',
    category: 'File Management · Storage Experiment',
    url: 'https://drive.ladestack.in/',
    coverImage: SITE_ASSETS.brandArt,
    coverAlt: 'Minimal dark glass blocks representing LadeStack Drive file-management experiment',
    status: 'experimental',
    statusNote: 'Experimental / Verification Pending',
    role: 'Project creator',
    overview:
      "LadeStack Drive is a file-management project associated with Girish Lade's storage and file-workflow experimentation. Because the exact current production implementation has not been independently verified from live domain inspection, it is listed here transparently as experimental / verification pending.",
    useCases: [
      {
        title: 'Exploring Organized File Interfaces',
        description:
          'Investigates clean folder navigation and approachable browser-based file-management layouts.',
      },
      {
        title: 'Evaluating Storage and Access Patterns',
        description:
          'Serves as an ongoing study in separating UI prototypes from verified, production-hardened cloud storage.',
      },
      {
        title: 'Transparent Project Status Reporting',
        description:
          'Maintained separately from verified live utilities until deployment behavior and storage boundaries are audited.',
      },
    ],
    technologies: ['Web File Workflows', 'Storage Architecture Exploration'],
    disclaimer:
      'Experimental / Verification Pending. No claims of live cloud sync, encryption, sharing, or persistent storage are made until verified.',
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    slug: 'designing-local-first-web-applications',
    title: 'Designing Local-First Web Applications',
    label: 'Technical Note',
    category: 'Web Architecture',
    tags: ['local-first', 'browser-first', 'indexeddb', 'privacy', 'portability'],
    summary:
      'Why browser-local persistence lowers onboarding friction—and why portability, storage limits, and clear data boundaries matter just as much.',
    coverImage: SITE_ASSETS.blogLight,
    coverAlt: 'Warm amber architectural glass lighting at twilight',
    paragraphs: [
      {
        body: 'Keeping working files and project state in the browser removes one of the biggest barriers in everyday software: forced account creation before a user can even test whether a tool solves their problem. When a code editor, PDF utility, or resume draft opens directly into a usable workspace, people can focus on their task immediately.',
      },
      {
        heading: 'Browser Storage Has Real Lifecycle Boundaries',
        body: 'Local persistence through IndexedDB or localStorage is practical and fast, but it is never a substitute for durable backups. Browser storage quotas vary across devices, private browsing sessions are ephemeral, and clearing site data can wipe unsaved workspaces in a single click.',
      },
      {
        heading: 'Portability Should Be Built In Early',
        body: 'Whenever a web application stores meaningful user work locally, export paths become a core product feature rather than an optional extra. Offering standard downloads—such as ZIP archives for code projects, PDF files for documents, or JSON backups—ensures users always retain ownership of what they create.',
      },
      {
        heading: 'Honest Privacy Boundaries',
        body: 'Processing data locally reduces unnecessary uploads, yet "local-first" does not automatically eliminate every security or privacy consideration. Third-party fonts, external API calls, or optional repository fetches each introduce their own network boundaries, which should be communicated clearly to users.',
      },
    ],
  },
  {
    slug: 'building-development-workflows-in-the-browser',
    title: 'Building Development Workflows in the Browser',
    label: 'Technical Note',
    category: 'Developer Tooling',
    tags: ['browser-first', 'developer-tools', 'webcontainers', 'monaco-editor', 'portability'],
    summary:
      'Lessons from combining Monaco Editor, sandboxed previews, and WebContainers while communicating browser runtime constraints honestly.',
    coverImage: SITE_ASSETS.ideStudio,
    coverAlt: 'Minimalist dark workspace with mechanical keyboard and warm desk lamp',
    paragraphs: [
      {
        body: 'Making a browser behave like a capable development workspace requires balancing familiarity with constraint. Developers expect syntax highlighting, diagnostics, keyboard shortcuts, and predictable file trees, which makes components like Monaco Editor an effective foundation.',
      },
      {
        heading: 'Static Previews vs. Node.js Runtimes',
        body: 'Not every task needs a full package manager or Node.js runtime. Separating lightweight HTML, CSS, and JavaScript prototyping from WebContainer-powered framework environments keeps simple ideas fast while reserving heavier browser isolation headers and memory budgets for projects that genuinely require them.',
      },
      {
        heading: 'Graceful Fallbacks Over Broad Promises',
        body: 'Browser execution depends on cross-origin isolation support, device memory, and compatible dependencies. A thoughtful browser IDE communicates those boundaries clearly and provides straightforward ZIP exports so learners and developers can move seamlessly into desktop tooling whenever a project outgrows the sandbox.',
      },
    ],
  },
  {
    slug: 'designing-useful-documentation-systems',
    title: 'Designing Useful Documentation Systems',
    label: 'Technical Note',
    category: 'Developer Tooling',
    tags: ['documentation', 'markdown', 'pdf', 'developer-tools', 'portability'],
    summary:
      'Why Markdown-to-PDF publishing involves far more than file conversion: sanitization, math typesetting, print layouts, and multi-chapter structure.',
    coverImage: SITE_ASSETS.pdfEditorial,
    coverAlt: 'Layered charcoal and archival paper sheets on dark stone',
    paragraphs: [
      {
        body: 'Developers write a surprising amount of valuable knowledge in Markdown—READMEs, setup guides, architecture notes, and study summaries. Yet sharing those notes with teammates, students, or non-technical readers often requires a clean, self-contained document format.',
      },
      {
        heading: 'Beyond Basic String Replacement',
        body: 'Reliable Markdown publishing demands careful handling of GitHub-Flavored Markdown tables, sanitized HTML output, syntax-highlighted code blocks, KaTeX mathematical expressions, and intentional print CSS rules so headings and code snippets do not break awkwardly across pages.',
      },
      {
        heading: 'Multi-File Documentation Books',
        body: 'When documentation spans multiple Markdown files in a repository, structure matters as much as styling. Letting authors choose chapters, define reading order, and generate a clean table of contents transforms scattered notes into a cohesive reference deliverable.',
      },
    ],
  },
  {
    slug: 'ai-assistance-without-losing-user-control',
    title: 'AI Assistance Without Losing User Control',
    label: 'Technical Note',
    category: 'AI & Engineering',
    tags: ['ai-workflows', 'byok', 'developer-tools', 'privacy', 'verification'],
    summary:
      'Approaching AI coding agents and BYOK architectures as transparent engineering accelerators rather than opaque replacements for review.',
    coverImage: SITE_ASSETS.brandArt,
    coverAlt: 'Minimalist smoked glass and matte obsidian architectural sculpture',
    paragraphs: [
      {
        body: 'AI coding tools and model APIs make it dramatically faster to explore ideas, scaffold components, and test alternative architectures. Still, speed alone does not produce dependable software; architecture, edge-case testing, and interface clarity still depend on deliberate human judgment.',
      },
      {
        heading: 'Why Bring-Your-Own-Key (BYOK) Matters',
        body: 'In developer-oriented tools, BYOK architectures give users direct visibility into which provider is handling their prompts, what costs they incur, and when a request leaves their device. Avoiding hidden middleman lock-in encourages clearer technical boundaries.',
      },
      {
        heading: 'Verification Remains Non-Negotiable',
        body: 'Whether writing a state helper or integrating a third-party API, generated code should always be read, verified, and tested against real constraints before reaching users.',
      },
    ],
  },
  {
    slug: 'shipping-discoverable-multilingual-websites',
    title: 'Shipping Discoverable Multilingual Websites',
    label: 'Technical Note',
    category: 'Web Architecture',
    tags: ['astro', 'technical-seo', 'localization', 'static-sites', 'documentation'],
    summary:
      'Structuring static Astro sites with semantic HTML, canonical URLs, hreflang metadata, and deliberate localized content.',
    coverImage: SITE_ASSETS.systemsGrid,
    coverAlt: 'Precision matte black engineering instruments on dark slate',
    paragraphs: [
      {
        body: 'Practical software tools are used across regions and languages, which makes discoverability and clear localization essential parts of product architecture rather than last-minute marketing tasks.',
      },
      {
        heading: 'Static Clarity With Astro',
        body: 'Content-focused frameworks like Astro make it natural to ship fast, crawlable HTML with clean semantic structure, deterministic locale prefixes, accurate canonical tags, and structured hreflang links across supported languages.',
      },
      {
        heading: 'Content Parity With Integrity',
        body: 'Localized routes only serve readers when the underlying explanations, headings, and documentation match the language of the URL. Maintaining deliberate, accurate translations keeps international pages genuinely helpful.',
      },
    ],
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    id: 'faq-projects',
    question: 'What kind of projects do you enjoy working on?',
    answer:
      'Developer tools, browser-based utilities, thoughtful web products, AI-assisted workflows, and practical productivity software are recurring areas of interest.',
  },
  {
    id: 'faq-tech',
    question: 'What technologies do you work with?',
    answer:
      'My projects commonly involve React, TypeScript, Astro, Next.js, browser APIs, Node.js-oriented application development, client-side storage, document processing, and modern deployment workflows.',
  },
  {
    id: 'faq-collab',
    question: 'Are you open to collaborations?',
    answer:
      "I'm interested in discussing useful products, developer experience, UI/UX, web engineering, and practical software ideas. Reach out with context about the project.",
  },
];
