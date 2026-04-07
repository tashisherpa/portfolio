export const profile = {
  name: "Tashi Sherpa",
  title: "Associate Software Engineer @ The New York Times",
  tagline:
    "Building and maintaining scalable messaging systems for The New York Times.",
  email: "tashisherpa0002@gmail.com",
  location: "New York, NY",
};

export const social = {
  github: "https://github.com/Tashisherpa",
  linkedin: "https://www.linkedin.com/in/tashisherpa23",
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "The New York Times",
    location: "New York, NY",
    start: "Jan 2025",
    end: "Present",
    summary:
      "Building and maintaining scalable messaging platform for The New York Times, using Go, Terraform, Google Cloud and AWS.",
  },
  {
    role: "Software Engineer Apprentice",
    company: "The New York Times",
    location: "New York, NY",
    start: "Sept 2024",
    end: "Nov 2024",
    summary:
      "Worked on NYT’s internal CRM with Next.js, TypeScript, tRPC, and SCSS. Re-architected Advanced Search for extensibility and shipped an extension for PayPal invoice lookups that improved support for customer using PayPal as a payment method.",
  },
  {
    role: "Software Engineer Intern",
    company: "West X East",
    location: "Remote",
    start: "July 2024",
    end: "Aug 2024",
    summary:
      "Built a JavaScript PDF parsing and filtering pipeline with PDF.js for spec sheets, and led a Three.js 3D product configurator POC to replace a third-party rendering solution.",
  },
  {
    role: "Software Engineer Intern",
    company: "Halfgram",
    location: "Remote",
    start: "Jan 2024",
    end: "July 2024",
    summary:
      "Shipped engagement features for a React Native social app with Node.js and Firebase, including real-time messaging and Firestore batch optimizations that noticeably improved load time.",
  },
];

export const education = {
  school: "Brooklyn College",
  location: "Brooklyn, NY",
  start: "Sept 2024",
  note: "Relevant coursework: Data Structures, Algorithms & Analysis, Introduction to Software Engineering, Human–Computer Interaction.",
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: [
      "Go", 
      "Python", 
      "Java", 
      "JavaScript", 
      "TypeScript", 
      "HTML/CSS", 
      "SCSS",
      "SQL",
    ],
  },
  {
    label: "Frameworks & data",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Node.js",
      "Express",
      "Three.js",
      "tRPC",
      "Socket.io",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS", 
      "GCP", 
      "Terraform", 
      "Firebase", 
      "BigQuery", 
      "Datadog", 
      "LaunchDarkly", 
      "Vault",
    ],
  },
  {
    label: "Tools",
    items: [
      "GitHub",
      "Jira", 
      "Postman", 
      "VS Code", 
      "Expo", 
      "Vercel", 
      "Figma", 
      "SumoLogic", 
      "GoLand",
      "Cursor",
      "ClaudeCode",
    ],
  },
];
