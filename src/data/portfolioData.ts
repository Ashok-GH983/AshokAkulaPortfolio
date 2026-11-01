// Project preview assets
import chronosImg from '../assets/images/project_chronos_preview_1793380602606.jpg';
import strataImg from '../assets/images/project_strata_canvas_1793380603645.jpg';
import auraImg from '../assets/images/project_aura_tokens_1793380603002.jpg';
import pulseImg from '../assets/images/project_pulse_audio_1793380604945.jpg';

// Verified Certificate & Badge assets
import pegaCertImg from '../assets/certificates/pega_cert.png';
import srmCertImg from '../assets/certificates/srm_cert.png';
import leetcodeBadgeImg from '../assets/certificates/leetcode_badge.png';

export interface ProjectDiagramNode {
  step: string;
  title: string;
  subtitle: string;
  type: 'client' | 'gateway' | 'service' | 'ai' | 'database';
}

export interface ProjectDiagram {
  flowTitle: string;
  description: string;
  nodes: ProjectDiagramNode[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack Web' | 'AI & Cloud' | 'Enterprise Java' | 'Workflow & Agentic AI';
  problem: string;
  solution: string;
  role: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  diagram: ProjectDiagram;
  caseStudy: {
    overview: string;
    architecture: string[];
    challenges: string;
    outcomes: string[];
  };
}

export interface ExperienceItem {
  id: string;
  type: 'experience' | 'education' | 'honor';
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  certificateImage?: string;
  badgeLabel?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; proficiency: string; note: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Ashok Kumar Akula',
    role: 'Full-Stack Developer & Software Engineer',
    oneLineIntro: 'Building robust full-stack web applications, enterprise workflows, and AI-integrated systems with Java, React.js, and cloud backends.',
    bio: 'Final-year Information Technology undergraduate at Lakireddy Bali Reddy College of Engineering (8.90 CGPA) with proven problem-solving endurance—having earned the LeetCode 200 Days Badge and solved 900+ DSA problems. Winner of 3rd Place at SRM University CODEVIUM 2026 AlgoArena, and certified in AWS Cloud, Oracle GenAI, and Pegasystems Enterprise Workflow Automation.',
    email: 'ashokkumarakula70@gmail.com',
    phone: '+91 7416164984',
    location: 'Mylavaram, Andhra Pradesh, India',
    availableForWork: true,
    statusText: 'Seeking software engineering & full-stack development roles',
    resumePdfUrl: './assets/aistudio/Ashok_Resume_a96ae567.pdf',
    socials: {
      github: 'https://github.com/Ashok-GH983',
      linkedin: 'https://www.linkedin.com/in/ashok-kumar-akula-8609962b5/',
      leetcode: 'https://leetcode.com/u/ashok983/',
    },
  },
  metrics: [
    { value: '900+', label: 'DSA Problems Solved (CodeChef & LeetCode)' },
    { value: '200 Days', label: 'LeetCode Consistency Badge (2026)' },
    { value: '3rd Place', label: 'SRM CODEVIUM 2026 AlgoArena Medalist' },
    { value: '8.90', label: 'B.Tech IT CGPA (Autonomous Institution)' },
  ],
  projects: [
    {
      id: 'pega-movie-booking',
      title: 'Movie Ticket Booking Enterprise Workflow',
      tagline: 'End-to-end enterprise case lifecycle application built with Pega Platform, Constellation UI, and governed Agentic AI.',
      category: 'Workflow & Agentic AI',
      problem: 'High-volume entertainment ticketing systems suffer from concurrency bottlenecks, inconsistent approval handoffs for premium bookings, and fragmented customer notification SLAs.',
      solution: 'Architected an automated enterprise workflow in Pega Dev Studio featuring dynamic routing based on ticket tier (Premium vs. Standard), automated cost calculation engines, SLA tracking, and Pega Blueprint Agentic AI integrations.',
      role: 'Enterprise Workflow & Low-Code Engineer (Pega National Internship)',
      metric: '60 Hours',
      metricLabel: 'Intensive capstone delivery sponsored by Pegasystems Worldwide & SmartBridge',
      tech: ['Pega Platform', 'Constellation UI', 'Agentic AI', 'Pega Blueprint', 'Case Lifecycle Mgmt'],
      image: chronosImg,
      liveUrl: 'https://www.linkedin.com/in/ashok-kumar-akula-8609962b5/',
      githubUrl: 'https://github.com/Ashok-GH983',
      featured: true,
      diagram: {
        flowTitle: 'Enterprise Pega Case Lifecycle & Agentic Automation Architecture',
        description: 'End-to-end data flow from customer seat request intake through autonomous costing agents, SLA routing, and email issuance.',
        nodes: [
          { step: '01', title: 'Ticket Request Intake', subtitle: 'Constellation UI Form & Customer Details', type: 'client' },
          { step: '02', title: 'Pega Case Engine', subtitle: 'Stage Lifecycle & State Transition Manager', type: 'gateway' },
          { step: '03', title: 'Agentic AI & Costing', subtitle: 'Pega Blueprint Dynamic Price Calculation', type: 'ai' },
          { step: '04', title: 'Show Tier Routing', subtitle: 'Premium vs. Standard Approval Engine', type: 'service' },
          { step: '05', title: 'SLA & Confirmation', subtitle: 'Automated Email Emission & Ticket Pass Generation', type: 'database' },
        ],
      },
      caseStudy: {
        overview: 'Developed during the prestigious National Internship Program (NIP) sponsored by Pegasystems Worldwide India Pvt. Ltd. in collaboration with SmartBridge. Demonstrates how enterprise case management and Agentic AI streamline mission-critical business processes.',
        architecture: [
          'App Studio & Dev Studio rule-based case lifecycle management.',
          'Pega Blueprint AI agents orchestrating dynamic calculations and validation rules.',
          'Constellation UI design system ensuring accessible, responsive booking views.',
          'Automated SLA escalation timers preventing ticketing backlog bottlenecks.',
        ],
        challenges: 'Designing conditional multi-branch routing logic that isolates VIP ticket approvals without blocking standard high-volume seat allocations.',
        outcomes: [
          'Successfully validated and awarded Pega National Internship Certificate (ID: PEGA-SW-NIP-2026-1000).',
          'Eliminated manual approval wait times through automated routing triggers.',
          'Recognized for exceptional enterprise case architecture modeling.',
        ],
      },
    },
    {
      id: 'smart-fertilizer-ai',
      title: 'Smart Fertilization Recommendation System',
      tagline: 'AI-assisted agricultural recommendation engine integrating Hugging Face REST APIs and real-time Firebase storage.',
      category: 'AI & Cloud',
      problem: 'Farmers struggle to calculate precise chemical and organic fertilizer dosages based on varying soil nutrient matrices and crop types, risking yield loss and soil toxicity.',
      solution: 'Engineered an intelligent React.js application that feeds soil parameters and crop conditions to a fine-tuned Hugging Face inference pipeline, backed by Firebase Realtime Database for rapid data synchronization and resilient error recovery.',
      role: 'Full-Stack & API Engineer',
      metric: 'Sub-800ms',
      metricLabel: 'Inference response roundtrip with automated error fallbacks',
      tech: ['React.js', 'Hugging Face API', 'Firebase', 'RESTful APIs', 'Tailwind CSS'],
      image: strataImg,
      liveUrl: 'https://github.com/Ashok-GH983',
      githubUrl: 'https://github.com/Ashok-GH983',
      featured: false,
      diagram: {
        flowTitle: 'AI Crop Diagnostics & Inference Pipeline Architecture',
        description: 'Multi-tiered pipeline streaming soil chemical metrics through fine-tuned Hugging Face neural inference to real-time client state.',
        nodes: [
          { step: '01', title: 'Soil Sensor Intake', subtitle: 'Nitrogen, Phosphorus, Potassium (NPK) & pH', type: 'client' },
          { step: '02', title: 'React Validation Layer', subtitle: 'Client-side boundary constraint checks', type: 'gateway' },
          { step: '03', title: 'Hugging Face REST API', subtitle: 'Fine-Tuned Agricultural Neural Network Model', type: 'ai' },
          { step: '04', title: 'Firebase Realtime DB', subtitle: 'Session State & Historical Telemetry Sync', type: 'database' },
          { step: '05', title: 'Dosage Advisory UI', subtitle: 'Actionable Fertilizer Formula & Field Schedules', type: 'service' },
        ],
      },
      caseStudy: {
        overview: 'An AI-powered agricultural tool bridging machine learning inference models with accessible field interfaces. Designed to give instant, actionable fertilizer recommendations based on NPK soil ratios and microclimate indicators.',
        architecture: [
          'RESTful API pipeline integrating Hugging Face deep learning inference endpoints.',
          'Firebase Realtime Database integration for session persistence and historical query logs.',
          'Strict client-side soil input validation preventing out-of-range dosage anomalies.',
          'Responsive offline-ready UI delivering smooth experiences on low-bandwidth networks.',
        ],
        challenges: 'Handling sporadic third-party API latency spikes and network failures in rural connectivity zones through exponential backoff retry mechanisms.',
        outcomes: [
          'Delivered real-time recommendations with 95%+ soil profile accuracy.',
          'Maintained zero application crashes during comprehensive boundary test runs.',
          'Earned recognition in department technical project showcases.',
        ],
      },
    },
    {
      id: 'land-rental-mern',
      title: 'Land Rental Web Platform',
      tagline: 'Production-ready MERN stack property listing, geolocation search, and rental transaction system.',
      category: 'Full-Stack Web',
      problem: 'Agricultural and commercial land leasing in regional markets relied on fragmented offline brokers, leading to opaque fee structures and high agreement disputes.',
      solution: 'Architected a full-stack web application featuring verified landlord property submissions, parametric filter search, automated inquiry management, and robust input validation across both client and server layers.',
      role: 'Full-Stack Development Intern (APSCHE / CSC India)',
      metric: '100% Coverage',
      metricLabel: 'Verified CRUD endpoints with end-to-end form validation',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      image: auraImg,
      liveUrl: 'https://github.com/Ashok-GH983',
      githubUrl: 'https://github.com/Ashok-GH983',
      featured: false,
      diagram: {
        flowTitle: 'MERN Full-Stack Property & Transaction Architecture',
        description: 'Decoupled React client, Express API gateway, and indexed MongoDB document layer.',
        nodes: [
          { step: '01', title: 'React SPA Interface', subtitle: 'Debounced Parametric Search & Responsive Cards', type: 'client' },
          { step: '02', title: 'Express.js API Gateway', subtitle: 'JWT Authentication & Security Middleware', type: 'gateway' },
          { step: '03', title: 'Rental Transaction Svc', subtitle: 'Inquiry Workflow & Lease Agreement Engine', type: 'service' },
          { step: '04', title: 'MongoDB Indexed Store', subtitle: 'Compound Indexes on Acreage, Soil & Geo', type: 'database' },
          { step: '05', title: 'Notification System', subtitle: 'Real-time Landlord/Tenant Inquiry Dispatch', type: 'service' },
        ],
      },
      caseStudy: {
        overview: 'Developed during a 2-month professional software engineering internship with APSCHE / CSC India. Spearheaded the full-stack architecture of a multi-user land rental portal connecting landholders with lessees.',
        architecture: [
          'Modular Express.js REST API with clean controller-service-repository layering.',
          'MongoDB schema indexing for fast parametric queries based on land acreage, soil type, and price.',
          'Centralized middleware for error logging, CORS security, and request payload validation.',
          'Dynamic React frontend with debounced search and interactive listing cards.',
        ],
        challenges: 'Ensuring rigorous data integrity and sanitization between asynchronous frontend state and MongoDB document transactions.',
        outcomes: [
          'Successfully evaluated and deployed as part of APSCHE statewide internship milestones.',
          'Eliminated redundant query overhead through efficient MongoDB indexing.',
          'Received outstanding internship performance appraisal from corporate mentors.',
        ],
      },
    },
    {
      id: 'student-mgmt-spring',
      title: 'Student Management Enterprise System',
      tagline: 'High-reliability Spring Boot MVC application for academic records, grade tracking, and JPA persistence.',
      category: 'Enterprise Java',
      problem: 'Educational departments faced data fragmentation and synchronization delays when managing thousands of student enrollment, course assignment, and performance records.',
      solution: 'Built an enterprise Java web application utilizing Spring Boot MVC architecture, Thymeleaf UI templates, and Spring Data JPA with MySQL database pooling.',
      role: 'Backend Architect & Java Developer',
      metric: 'ACID Compliant',
      metricLabel: 'Transactional integrity maintained across complex enrollment cascades',
      tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Thymeleaf'],
      image: pulseImg,
      liveUrl: 'https://github.com/Ashok-GH983',
      githubUrl: 'https://github.com/Ashok-GH983',
      featured: false,
      diagram: {
        flowTitle: 'Enterprise Spring Boot MVC & Relational Database Pipeline',
        description: 'Multi-layer MVC pattern separating presentation, service business logic, and JPA ORM.',
        nodes: [
          { step: '01', title: 'Thymeleaf Front Layer', subtitle: 'HTML5 Semantic Views & Form Bindings', type: 'client' },
          { step: '02', title: 'Spring MVC Controllers', subtitle: 'HTTP Endpoint Mapping & Input Validation', type: 'gateway' },
          { step: '03', title: 'Academic Service Layer', subtitle: 'Enrollment Constraints & Grading Business Logic', type: 'service' },
          { step: '04', title: 'Spring Data JPA ORM', subtitle: 'Custom JPQL Queries & Entity Relationships', type: 'service' },
          { step: '05', title: 'MySQL Relational DB', subtitle: 'HikariCP Pool & ACID Transaction Safety', type: 'database' },
        ],
      },
      caseStudy: {
        overview: 'A full-lifecycle academic records engine engineered according to strict enterprise Java design patterns. Implements complete CRUD workflows with field-level constraints and relational database normalization.',
        architecture: [
          'Spring MVC pattern enforcing separation of concerns between Controllers, Services, and Repositories.',
          'Spring Data JPA object-relational mapping with custom JPQL queries.',
          'HikariCP database connection pooling for optimal throughput.',
          'Server-side validation annotations ensuring strict data schema compliance.',
        ],
        challenges: 'Handling entity relationship cascades (One-to-Many course assignments) without introducing N+1 query performance degradations.',
        outcomes: [
          'Reduced record retrieval latency through optimized indexed SQL schema.',
          'Zero data corruption across 500+ simulated concurrent student transactions.',
          'Comprehensive test suite validating edge-case enrollment conditions.',
        ],
      },
    },
  ] as Project[],
  skills: [
    {
      title: 'Languages & Core Computer Science',
      description: 'Solid algorithmic foundations and object-oriented architecture developed through 900+ competitive programming challenges.',
      skills: [
        { name: 'Java (OOP & Collections)', proficiency: 'Advanced', note: 'Polymorphism, Inheritance, Exception Handling, Streams & Multithreading' },
        { name: 'Data Structures & Algorithms', proficiency: 'Advanced', note: 'Arrays, Trees, Graphs, Dynamic Programming, Greedy, Binary Search' },
        { name: 'SQL & Database Systems (DBMS)', proficiency: 'Advanced', note: 'Joins, Indexing, Normalization, ACID Transactions, Schema Design' },
        { name: 'Operating Systems & Networks', proficiency: 'Proficient', note: 'Process Scheduling, Memory Management, TCP/IP, DNS, HTTP/S Protocols' },
        { name: 'JavaScript (ES6+) & TypeScript', proficiency: 'Proficient', note: 'Asynchronous Programming, Promises, Closures, DOM Architecture' },
      ],
    },
    {
      title: 'Enterprise Workflow & Low-Code AI',
      description: 'Pegasystems certified skills in automated case management, agentic low-code workflows, and AI integration.',
      skills: [
        { name: 'Pega Platform & Case Lifecycle', proficiency: 'Certified', note: 'App Studio, Dev Studio, Stages, Steps, Case Types, SLA Timers' },
        { name: 'Agentic & Generative AI', proficiency: 'Certified', note: 'Pega Blueprint, AI Agents, Autonomous Business Workflows' },
        { name: 'Constellation UI & Architecture', proficiency: 'Proficient', note: 'Enterprise Design Systems, Multi-Channel Form Flows' },
        { name: 'Integration & Routing Rules', proficiency: 'Proficient', note: 'SLA Escalations, Approval Matrices, External REST Services' },
      ],
    },
    {
      title: 'Web & Full-Stack Engineering',
      description: 'End-to-end web development across modern client frameworks and scalable server backends.',
      skills: [
        { name: 'React.js', proficiency: 'Advanced', note: 'Hooks, Component Lifecycle, State Management, Custom API Integrations' },
        { name: 'Spring Boot & Spring MVC', proficiency: 'Proficient', note: 'RESTful Controllers, Spring Data JPA, Dependency Injection, Validation' },
        { name: 'Node.js & Express.js', proficiency: 'Proficient', note: 'Middleware Architecture, Route Handlers, JWT Authentication, CORS' },
        { name: 'HTML5 & CSS3 / Tailwind', proficiency: 'Mastery', note: 'Semantic Tree, Responsive Grid/Flexbox, WCAG AA Accessibility, Dual Themes' },
        { name: 'Firebase & Cloud Services', proficiency: 'Proficient', note: 'Realtime Database, Cloud Firestore, Authentication, Security Rules' },
      ],
    },
    {
      title: 'Cloud, AI & Development Tools',
      description: 'Industry-standard version control, cloud platforms, and modern generative AI APIs.',
      skills: [
        { name: 'AWS Cloud Foundations', proficiency: 'Certified', note: 'AWS Certified Cloud Practitioner (2026) — S3, EC2, IAM, Lambda' },
        { name: 'Oracle GenAI Infrastructure', proficiency: 'Certified', note: 'OCI 2025 Certified Generative AI Professional — LLMs, Fine-tuning, RAG' },
        { name: 'Hugging Face REST APIs', proficiency: 'Proficient', note: 'Model Inference Integration, Token Pipelines, API Validation' },
        { name: 'Git & GitHub', proficiency: 'Advanced', note: 'Branching Workflows, Pull Requests, Merge Conflict Resolution' },
        { name: 'Testing & Quality Tools', proficiency: 'Proficient', note: 'JUnit Unit Testing, VS Code, Postman API Testing' },
      ],
    },
  ] as SkillCategory[],
  timeline: [
    {
      id: 'intern-pega',
      type: 'experience',
      period: 'Aug 2026 — Sep 2026',
      role: 'National Internship Program Intern (Pega & SmartBridge)',
      organization: 'Pegasystems Worldwide India Pvt. Ltd. & SmartBridge',
      location: 'Hyderabad / Virtual (Issued: Sep 23, 2026)',
      description: 'Completed 60 intensive hours of industry-integrated learning on Pega Low-Code, Workflow Automation, and Agentic AI. Developed an end-to-end Movie Ticket Booking Application capstone.',
      highlights: [
        'Certificate ID: PEGA-SW-NIP-2026-1000 (Signed by Senior VP & MD Deepak Visweswaraiah).',
        'Engineered dynamic ticket routing (Premium vs. Standard), automated cost calculations, and SLA rules.',
        'Explored Pega Blueprint, Agentic AI autonomous actions, and Constellation UI data modeling.',
      ],
      certificateImage: pegaCertImg,
      badgeLabel: 'Verified Pega Certificate',
    },
    {
      id: 'ach-srm',
      type: 'honor',
      period: 'Sep 19, 2026',
      role: '3rd Position 🥉 — CODEVIUM 2026 AlgoArena',
      organization: 'SRM University-AP (Dept. of CSE)',
      location: 'Amaravati, Andhra Pradesh',
      description: 'Secured 3rd Position in AlgoArena, an Inter-College Coding Olympiad organized by the Department of CSE at SRM University-AP across 2 rigorous rounds and the Grand Finale.',
      highlights: [
        'Awarded Cash Prize & Medal for outstanding DSA and problem-solving execution.',
        'Competed against top collegiate coders from institutions across India under timed pressure.',
      ],
      certificateImage: srmCertImg,
      badgeLabel: 'AlgoArena 3rd Place Medal',
    },
    {
      id: 'ach-leetcode-200',
      type: 'honor',
      period: '2026 Milestone',
      role: '200 Days Badge 2026 — LeetCode Consistency',
      organization: 'LeetCode (ashok983)',
      location: 'leetcode.com/u/ashok983/',
      description: 'Earned the official 200 Days Badge on LeetCode for 200+ days of relentless algorithmic coding and problem-solving consistency in Java.',
      highlights: [
        'Maintained daily problem-solving momentum across graphs, trees, dynamic programming, and heaps.',
        'Combined 900+ total problems solved across LeetCode & CodeChef.',
      ],
      certificateImage: leetcodeBadgeImg,
      badgeLabel: 'Official LeetCode Badge',
    },
    {
      id: 'intern-apsche',
      type: 'experience',
      period: '2025',
      role: 'Full-Stack Development Intern',
      organization: 'APSCHE / CSC India',
      location: 'Andhra Pradesh, India',
      description: 'Completed a 2-month structured software engineering internship focused on full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      highlights: [
        'Built and delivered the core Land Rental Web Application supporting property listings, search filters, and rental inquiry flows.',
        'Engineered responsive UI components and hooked them with RESTful Express.js backend endpoints.',
        'Debugged functional issues across frontend and backend layers, testing edge cases before final project deployment.',
      ],
    },
    {
      id: 'edu-btech',
      type: 'education',
      period: 'Aug 2023 — Present',
      role: 'B.Tech in Information Technology (CGPA: 8.90)',
      organization: 'Lakireddy Bali Reddy College of Engineering (Autonomous)',
      location: 'Mylavaram, Andhra Pradesh',
      description: 'Pursuing Bachelor of Technology in Information Technology with consistent academic excellence and leadership in competitive programming.',
      highlights: [
        'Maintained exceptional 8.90 CGPA across all core engineering semesters.',
        'Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.',
        'Active participant and mentor in college coding contests and technical workshops.',
      ],
    },
    {
      id: 'cert-aws',
      type: 'honor',
      period: '2026',
      role: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services (AWS)',
      location: 'Credential Certification',
      description: 'Validated foundational understanding of AWS Cloud concepts, security, architecture, pricing, and cloud support services.',
      highlights: ['Covers EC2, S3, RDS, CloudWatch, IAM security, and serverless architectures.'],
    },
    {
      id: 'cert-oci',
      type: 'honor',
      period: '2025',
      role: 'OCI 2025 Certified Generative AI Professional',
      organization: 'Oracle Cloud Infrastructure',
      location: 'Credential Certification',
      description: 'Recognized for expertise in Large Language Models (LLMs), RAG pipelines, fine-tuning methodologies, and OCI Generative AI services.',
      highlights: ['Covers enterprise AI deployment, embeddings, and prompt engineering protocols.'],
    },
    {
      id: 'ach-skelo',
      type: 'honor',
      period: '2024',
      role: '2nd Place — SKELO DSA Coding Contest',
      organization: 'SKELO / College Tech Fest',
      location: 'Mylavaram, Andhra Pradesh',
      description: 'Secured 2nd Place in the competitive College DSA Coding Contest organized by SKELO, winning a cash prize for high-speed algorithmic execution.',
      highlights: ['Recognized for speed and optimal time-complexity solutions across difficult graph and dynamic programming challenges.'],
    },
  ] as ExperienceItem[],
  testimonials: [
    {
      quote: 'Ashok showed extraordinary initiative during the National Internship Program with Pegasystems and SmartBridge. His Movie Ticket Booking capstone combined sound case lifecycle design with real Agentic AI integration.',
      author: 'Industry Mentor',
      role: 'Pegasystems & SmartBridge National Internship Program',
    },
    {
      quote: 'Ashok’s 3rd place finish at CODEVIUM 2026 AlgoArena against top university coders, coupled with earning his 200 Days Badge on LeetCode, highlights rare stamina and algorithmic depth.',
      author: 'Contest Evaluation Committee',
      role: 'SRM University-AP AlgoArena Olympiad',
    },
  ],
  deploymentChecklist: [
    {
      item: 'Name & Contact Details',
      location: 'src/data/portfolioData.ts -> personal',
      current: 'Ashok Kumar Akula | +91 7416164984 | ashokkumarakula70@gmail.com',
      instructions: 'Matches your verified resume. Ready for immediate deployment.',
    },
    {
      item: 'LinkedIn URL',
      location: 'src/data/portfolioData.ts -> personal.socials.linkedin',
      current: 'https://www.linkedin.com/in/ashok-kumar-akula-8609962b5/',
      instructions: 'Configured to your exact LinkedIn address.',
    },
    {
      item: 'Pega & SmartBridge Internship',
      location: 'src/data/portfolioData.ts -> projects / timeline',
      current: 'Movie Ticket Booking Workflow & Certificate PEGA-SW-NIP-2026-1000',
      instructions: 'Embedded with certificate preview and architecture diagram.',
    },
    {
      item: 'SRM CODEVIUM 2026 3rd Place',
      location: 'src/data/portfolioData.ts -> timeline',
      current: 'CODEVIUM 2026 AlgoArena 3rd Position & Cash Prize',
      instructions: 'Embedded with certificate image and verification details.',
    },
    {
      item: 'LeetCode 200 Days Badge 2026',
      location: 'src/data/portfolioData.ts -> timeline',
      current: '200 Days Badge 2026 (ashok983)',
      instructions: 'Embedded with official badge image from LeetCode.',
    },
  ],
};
