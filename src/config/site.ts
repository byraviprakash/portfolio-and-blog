/**
 * SITE MODE SWITCH
 * false = "Portfolio + Technical Notes" (safe to share on a CV / LinkedIn while job hunting):
 *         Services page, availability, and "hire me" sections are hidden.
 * true  = freelance mode: Services page, availability, and project call-to-actions are shown.
 */
export const freelanceMode = true;

export const siteConfig = {
  name: 'Ravi Prakash',
  role: 'Senior .NET Engineer · Cloud & DevOps',
  headline: 'Cloud-native .NET · GCP · Kubernetes · CI/CD',
  /** Browser-tab / Google title for the home page. Keep under ~60 characters. */
  seoTitle: 'Ravi Prakash | Senior ASP.NET Core Developer · Docker, Kubernetes',
  jobTitle: 'Senior ASP.NET Core Developer',
  image: '/images/ravi-prakash.jpg',
  /** Topics used in structured data (schema.org knowsAbout) so Google understands the expertise. */
  knowsAbout: ['ASP.NET Core', '.NET', 'C#', 'Web API', 'Microservices', 'Docker', 'Kubernetes', 'Google Kubernetes Engine (GKE)', 'Google Cloud Platform', 'AWS', 'CI/CD', 'GitHub Actions', 'GitLab CI', 'DevOps', 'Entity Framework Core', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Cloud Pub/Sub', 'Event-driven architecture'],
  description: freelanceMode
    ? 'Senior ASP.NET Core developer (7+ years) building .NET microservices with Docker, Kubernetes (GKE), CI/CD and Google Cloud. Open to full-time and remote roles.'
    : 'Senior ASP.NET Core developer (7+ years) building .NET microservices with Docker, Kubernetes (GKE), CI/CD and Google Cloud. Open to full-time roles.',
  url: 'https://raviprakash.dev',
  email: 'raviprakash.mailbox@gmail.com',
  // phone: '+91-8860711226',
  location: 'New Delhi, India',
  remote: freelanceMode ? 'Open to full-time roles and remote work' : 'Based in New Delhi, India · Open to full-time roles',
  timezone: 'IST (UTC+5:30)',
  social: {
    github: 'https://github.com/byraviprakash',
    linkedin: 'https://www.linkedin.com/in/ravi-prakash-4893a529',
  },
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/', freelanceOnly: true },
  { label: 'Experience', href: '/experience/' },
  { label: 'Articles', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
].filter((item) => freelanceMode || !item.freelanceOnly);

/**
 * "Open to" cards on the Home page. Full-time employment comes first.
 * Items marked freelanceOnly are hidden when freelanceMode = false.
 */
export const openTo = [
  {
    title: 'Full-time roles in India',
    description: 'Senior .NET or cloud-focused engineering roles as a full-time employee, either remote or on-site (hybrid also works), anywhere in India.',
  },
  {
    title: 'Remote roles with global teams',
    description: 'Full-time or long-term contract roles with product teams in Europe and the USA, with working hours that overlap.',
  },
  {
    title: 'Freelance projects',
    description: 'Well-scoped work on .NET APIs, Google Cloud deployment, Docker and CI/CD for startups and small businesses.',
    freelanceOnly: true,
  },
].filter((item) => freelanceMode || !item.freelanceOnly);

/** Shown on Home, Services and Contact. Edit to match the hours you actually want to work. */
export const availability = {
  status: 'Open to full-time roles & remote projects',
  overlap: [
    { region: 'UK & Europe', detail: 'Strong overlap with your business day (my afternoon and evening, IST).' },
    { region: 'USA — East Coast', detail: 'Your morning meetings fit my evening; the rest of the day runs async.' },
    { region: 'USA — West Coast', detail: 'Async-first, with scheduled calls when they matter.' },
  ],
  responseTime: 'I reply to project enquiries within one business day.',
};

export const services = [
  {
    title: 'Cloud-native .NET on Google Cloud',
    description: 'ASP.NET Core services designed to run on GCP from day one, using managed cloud services instead of hand-run servers.',
    points: ['Cloud SQL, Cloud Storage, Cloud Functions & Pub/Sub', 'Containerized services on Google Kubernetes Engine', 'Environment-based configuration for dev, stage & prod', 'Working knowledge of AWS (EC2, S3, RDS, Lambda)'],
  },
  {
    title: 'Containers, CI/CD & releases',
    description: 'A repeatable path from commit to running container, so releases are routine rather than risky.',
    points: ['Dockerfiles for .NET applications', 'CI/CD pipelines with GitHub Actions & GitLab CI', 'Image builds pushed to Artifact Registry', 'Troubleshooting workloads on GKE'],
  },
  {
    title: 'Microservices & event-driven systems',
    description: 'Services that scale independently and keep working when one part slows down or fails.',
    points: ['ASP.NET Core Web API & Minimal APIs', 'Asynchronous messaging with Cloud Pub/Sub', 'Resilience with Polly (retries, circuit breakers)', 'Clean Architecture, SOLID & API versioning'],
  },
  {
    title: 'Performance, observability & reliability',
    description: 'Keeping production systems fast, visible and stable under heavy data loads.',
    points: ['Monitoring & tracing with OpenTelemetry', 'Throughput tuning for high-volume processing', 'Database indexing & query tuning (SQL Server, PostgreSQL, MongoDB)', 'Production support and ongoing maintenance'],
  },
];

export const workProcess = [
  { title: 'Discovery call', description: 'A short video call to understand your product, goals, constraints, and timeline.' },
  { title: 'Clear proposal', description: 'A written scope with milestones and an estimate, agreed before any work starts.' },
  { title: 'Iterative delivery', description: 'Small, reviewable increments with regular demos and a written weekly update.' },
  { title: 'Handover & support', description: 'Documentation, deployment notes, and support after launch.' },
];

export const workingPrinciples = [
  'Clear, written communication in English',
  'Working hours that overlap with yours',
  'Code in your repository from day one',
  'Tested, documented, production-ready code with a working CI/CD pipeline',
  'Comfortable signing an NDA',
];

export const skillGroups = [
  {
    title: 'Cloud platforms',
    skills: ['Google Cloud (GCP)', 'Google Kubernetes Engine', 'Cloud Pub/Sub', 'Cloud SQL', 'Cloud Storage', 'Cloud Functions', 'Artifact Registry', 'AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda'],
  },
  {
    title: 'DevOps & CI/CD',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Linux', 'Shell scripting', 'Git branching strategies', 'OpenTelemetry'],
  },
  {
    title: 'Backend & architecture',
    skills: ['C#', '.NET 8 / 10', 'ASP.NET Core Web API', 'Minimal APIs', 'Entity Framework Core', 'LINQ', 'Microservices', 'Event-driven architecture', 'Clean Architecture', 'SOLID', 'API versioning', 'Rate limiting', 'Polly resiliency', 'Python'],
  },
  {
    title: 'Data, tools & quality',
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Query optimization', 'xUnit', 'Swagger / OpenAPI', 'Postman', 'Claude Code'],
  },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Pure Software (acquired by Happiest Minds)',
    client: 'S&P Global Mobility (now Mobility Global)',
    clientNote: 'NYSE-listed automotive data and analytics company, spun off from S&P Global in 2026',
    period: '24 Jul 2025 – Present',
    current: true,
    highlights: [
      'Part of the team that operates, maintains, and optimizes a seven-microservice ASP.NET Core Web API platform on Google Cloud, processing 3M+ records.',
      'Work across MongoDB for high-volume documents, Cloud SQL for transactional data, and Cloud Storage for large payloads.',
      'Own build and release: Docker images, GitHub Actions CI/CD pipelines that push to Artifact Registry, and troubleshooting GKE workloads across dev, stage and prod.',
      'Support asynchronous, event-driven workflows using Cloud Pub/Sub and throughput tuning for heavy data loads.',
      'Built a batch-completion counter service in ASP.NET Core for Cloud Pub/Sub processing: a counter is created with its expected total and a callback URL, each processed record is added to a Redis Set so redelivered messages never inflate the count, and when the total is reached the service calls the callback REST API to trigger the next step.',
      'Built a new independent ASP.NET Core microservice by extracting core logic from an existing service shared by multiple teams, so it can be deployed, scaled and maintained on its own.',
      'Contribute to database indexing and proactive monitoring to support low latency, fault tolerance, and high availability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'StatusNeo',
    client: 'IndiGo Airlines',
    period: '13 Dec 2024 – 20 Jun 2025',
    highlights: [
      'Built the Check-In and Seat Assignment module from scratch in ASP.NET Core, with zero downtime during external DotRez API failures.',
      'Contributed to the slot coordination module (SIR/SCR messages), helping avoid penalties from aircraft capacity changes.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'PeopleStrong',
    period: '04 Jul 2022 – 06 Oct 2023',
    highlights: [
      'Built ASP.NET Core Web APIs with Clean Architecture for an HR and payroll platform, including the leave encashment and clawback module.',
      'Automated data sync using Quartz.NET scheduled jobs.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'KiwiTech',
    period: '01 Apr 2021 – 11 Jul 2022',
    highlights: [
      'Developed backend features for a sports content distribution platform and conducted code reviews.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'KiwiTech',
    period: '20 Dec 2018 – 30 Nov 2019',
    highlights: [],
  },
  {
    role: 'Software Engineer',
    company: 'Nippon Data Systems',
    period: '23 Nov 2017 – 19 Sep 2018',
    highlights: [],
  },
  {
    role: 'Software Engineer',
    company: 'Amigo Infotech',
    period: '26 May 2014 – 17 Aug 2015',
    highlights: [],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Punjab Technical University, Jalandhar',
    score: '75%',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Makhanlal Chaturvedi National University (MCRPV), Bhopal',
    score: '69%',
  },
];
