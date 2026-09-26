import type { PortfolioConfig } from '../types/portfolio';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Ankita Mishra',
    displayName: 'Ankita',
    primaryRole: 'Software Developer',
    subRoles: ['Frontend Architecture', 'Full-Stack Web', 'Creative Technology'],
    headline: {
      prefix: 'I build things for the web,',
      accent: 'with a little bit of magic.',
    },
    briefBio:
      'I’m someone who enjoys learning by actually doing things, exploring how ideas can be turned into something people can see, use, and interact with.',
    fullBio: [
      'Hi, I’m Ankita. I’m someone who enjoys learning by actually doing things. I’ve always liked exploring how ideas can be turned into something people can see, use, and interact with.',
      'What started as an interest in technology gradually grew into an interest in web development, design, and the little details that make a digital experience feel good. I enjoy experimenting with new things, building projects from scratch, and figuring out solutions when something doesn’t work the way I expected.',
      'I don’t always have everything figured out, and honestly, that’s something I’ve learned to enjoy. Every project gives me something new to learn, whether it’s a better way of building something, a design idea I hadn’t considered before, or simply a mistake I won’t make twice.',
      'I’m still discovering where this journey will take me, but for now, I’m happy building, learning, experimenting, and becoming a little better with every step.',
    ],
    availableForOpportunities: true,
    statusText: 'Available for opportunities',
    location: 'Open to remote & hybrid roles',
  },

  socials: {
    githubUsername: 'ankitadotdev',
    githubUrl: 'https://github.com/ankitadotdev',
    linkedinUrl: 'https://linkedin.com/in/ankitadotdev',
    email: 'ankitadotdev@gmail.com',
    githubContributions: 35,
  },

  exploring: [
    'Frontend Architecture',
    'Design Systems',
    'TypeScript Ecosystem',
    'Performance Optimization',
    'Accessible UI (a11y)',
  ],


  // Real, structured project showcase following: Problem -> Solution -> Tech Stack -> Key Contribution -> Links
  projects: [
    {
      id: 'retail-iq',
      title: 'Retail IQ — Edge AI for Smarter Retail',
      category: 'AI / Edge Vision',
      featured: true,
      badge: 'Portfolio Showcase',
      problem:
        'Modern retail environments rely on manual human observation for inventory and checkout monitoring, leading to empty shelves, long queues, and high cloud bandwidth costs from 24/7 CCTV streaming.',
      solution:
        'Built a privacy-first, edge-native AI platform that converts existing CCTV camera feeds into real-time business intelligence using advanced computer vision object tracking without facial recognition.',
      techStack: ['React 19', 'TypeScript', 'Vite', 'FastAPI', 'YOLO11n', 'OpenCV'],
      keyContribution:
        'Architected the frontend dashboard using Framer Motion and glassmorphism tokens, and integrated YOLO11n object detection with ByteTrack for real-time anonymous shopper and shelf tracking.',
      githubUrl: 'https://github.com/ankitadotdev/retail_intelligencia_portfolio',
    },
    {
      id: 'rubiks-solver',
      title: 'Rubik\'s Cube Solver & Sandbox',
      category: 'Web3D / Logic',
      featured: true,
      problem:
        'Learning to solve a Rubik\'s Cube from 2D guides is difficult, and existing online solvers lack interactive 3D visualizations, webcam scanning, and step-by-step playback.',
      solution:
        'Created an interactive web application to edit, simulate, scan, and solve a Rubik\'s Cube in a fully interactive 3D space with procedurally generated sound effects and webcam face scanning.',
      techStack: ['Next.js', 'React Three Fiber', 'Three.js', 'TypeScript', 'Zustand', 'Tailwind'],
      keyContribution:
        'Implemented the 3D cube mechanics, interactive 2D cross layout editor, automated webcam face capture, and an optimal solving algorithm generator with playback controls.',
      githubUrl: 'https://github.com/ankitadotdev/rubiks-solver',
    },
    {
      id: 'photo-booth',
      title: 'Aesthetic Photo Booth',
      category: 'Web App',
      featured: false,
      problem:
        'Users want a quick, web-based way to capture aesthetic photo strips with built-in filters without downloading heavy native applications or signing up.',
      solution:
        'Developed a purely frontend aesthetic photo booth utilizing the WebRTC Camera API, featuring multiple visual filters (Vintage, Pastel, Film) and an automated collage generator.',
      techStack: ['HTML5', 'CSS3', 'Vanilla JS', 'WebRTC API', 'Canvas API'],
      keyContribution:
        'Built the camera integration, programmed custom color matrix image filters, and implemented a canvas-based photo strip collage generation and download feature.',
      githubUrl: 'https://github.com/ankitadotdev/photo-booth',
    },
    {
      id: 'pcod-tracker',
      title: 'PCOD Period Tracker',
      category: 'Health Tech',
      featured: false,
      problem:
        'Managing PCOD requires tracking cycle variations and stress levels, but many commercial apps are cluttered with ads, unnecessary features, or require paid subscriptions.',
      solution:
        'Designed a simple, ad-free web-based tracker that estimates the next expected period window, highlights it on a calendar, and tracks stress levels.',
      techStack: ['HTML5', 'CSS3', 'JavaScript'],
      keyContribution:
        'Developed the predictive date calculation algorithm, interactive monthly calendar highlighting, and responsive clean UI for logging daily stress levels.',
      githubUrl: 'https://github.com/ankitadotdev/pcod-period-tracker',
    },
  ],

  // Career & Education Milestones
  experience: [
    {
      id: 'srmu-bca',
      period: 'Sep 2025 — May 2028',
      role: 'Bachelor\'s of computer application, Computer Programming',
      organization: 'SHRI RAMSWAROOP MEMORIAL UNIVERSITY',
      description: 'Pursuing a comprehensive degree program focusing on core computer science concepts, software engineering, and application development methodologies.',
      technologies: ['Computer Programming', 'Software Engineering', 'Data Structures'],
    },
    {
      id: 'nielit-mern',
      period: 'Jun 2026 — Aug 2026',
      role: 'Full Stack Development using MERN Stack, Computer Programming',
      organization: 'NATIONAL INSTITUTE OF ELECTRONICS & INFORMATION TECHNOLOGY (NIELIT)',
      description: 'Intensive Full Stack Development training program focused on building robust web applications using the MERN stack.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
    },
    {
      id: 'don-bosco-12th',
      period: 'Completed',
      role: 'Intermediate (12th)',
      organization: 'Don Bosco Sr. Secondary School',
      description: 'Science stream with Physics, Chemistry and Biology Subjects.',
      technologies: [],
    },
    {
      id: 'don-bosco-10th',
      period: 'Completed',
      role: 'High School (10th)',
      organization: 'Don Bosco Sr. Secondary School',
      description: 'Completed foundational high school education with a strong academic focus.',
      technologies: [],
    },
  ],

  // Certificates Showcase
  certificates: [
    {
      id: 'cert-1',
      title: 'Find The Language',
      issuer: 'VIVEKA 5.0, SRMU',
      date: 'Feb 2026',
      imageUrl: '/images/certificate/find-the-language.webp',
    },
    {
      id: 'cert-2',
      title: 'Cybersecurity Workshop',
      issuer: 'VIVEKA 5.0, SRMU',
      date: 'Feb 2026',
      imageUrl: '/images/certificate/workshop-hackwithsmile.webp',
    },
    {
      id: 'cert-3',
      title: 'Robo Football',
      issuer: 'VIVEKA 5.0, SRMU',
      date: 'Feb 2026',
      imageUrl: '/images/certificate/robo-football.webp',
    },
    {
      id: 'cert-4',
      title: 'Sustainable Innovation 2.0',
      issuer: 'International Conference, SRMU',
      date: 'April 2026',
      imageUrl: '/images/certificate/confrence2026.webp',
    },
    {
      id: 'cert-5',
      title: 'NexHack 2.0 Participation',
      issuer: 'NEXVERSE IITM',
      date: 'Sep 2026',
      imageUrl: '/images/certificate/nexhack2026.jpg',
    },
  ],

  // Recognition and Milestones
  achievements: [
    {
      id: 'viveka-find-language',
      title: 'Find The Language',
      eventOrIssuer: 'VIVEKA: The Intelligence 5.0 (Techfest 2k26), SRMU',
      year: 'Feb 2026',
      highlight:
        'Participated in the "Find The Language" event during the university techfest organized by the Tech Fusion Club.',
    },
    {
      id: 'viveka-cybersecurity',
      title: 'Cybersecurity Workshop on "Hack with Smile"',
      eventOrIssuer: 'VIVEKA: The Intelligence 5.0 (Techfest 2k26), SRMU',
      year: 'Feb 2026',
      highlight:
        'Attended an intensive cybersecurity workshop to explore security vulnerabilities, ethical hacking concepts, and digital safety.',
    },
    {
      id: 'viveka-robo-football',
      title: 'Robo Football',
      eventOrIssuer: 'VIVEKA: The Intelligence 5.0 (Techfest 2k26), SRMU',
      year: 'Feb 2026',
      highlight:
        'Competed in the Robo Football robotics event, gaining hands-on exposure to hardware, control interfaces, and team collaboration.',
    },
    {
      id: 'sustainable-innovation-conf',
      title: 'International Conference on Sustainable Innovation 2.0',
      eventOrIssuer: 'Shri Ramswaroop Memorial University',
      year: '2026',
      highlight:
        'Attended the international conference, gaining insights into emerging technologies, sustainable practices, and innovative solutions.',
    },
    {
      id: 'nexhack-2026',
      title: 'NexHack 2.0 (National Level Hackathon)',
      eventOrIssuer: 'NEXVERSE IITM',
      year: 'Sep 2026',
      highlight:
        'Participated with Team AARAMBH CODERS, building and presenting the project SehatVaani.',
    },
  ],

  // Authentic Personal Interests
  interests: [
    {
      id: 'problem-solving',
      title: 'Systems & Architecture',
      tag: 'Engineering',
      note: 'Deconstructing complex problems into clean, testable, and modular components.',
    },
    {
      id: 'design-craft',
      title: 'Design Systems & Typography',
      tag: 'Craft',
      note: 'Deep appreciation for font pairing, baseline grids, subtle micro-motion, and soft palettes.',
    },
    {
      id: 'continuous-learning',
      title: 'Lifelong Curiosity',
      tag: 'Growth',
      note: 'Constantly testing new web specifications, framework innovations, and engineering practices.',
    },
  ],
};
