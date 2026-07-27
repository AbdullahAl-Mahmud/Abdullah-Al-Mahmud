export type PortfolioMode = "research" | "engineering" | "leadership";

export const site = {
  name: "Abdullah Al Mahmud",
  brand: "A MAHMUD.LOG",
  title: "ICE Undergraduate · AI/ML Enthusiast · Researcher · Community Leader",
  hero:
    "Transforming ideas into intelligent solutions through research, engineering, and leadership—creating technology that improves society.",
  motto: "Research with purpose. Build with impact.",
  description:
    "A first-year B.Sc. student in Information and Communication Engineering at Pabna University of Science and Technology, building a long-term path in AI, software engineering, research, communication, and community leadership.",
  location: "Pabna, Bangladesh",
  university: "Pabna University of Science and Technology",
  email: "almahmud.uni@gmail.com",
  phone: "+8801647381269",
  githubUsername: "AbdullahAl-Mahmud",
  githubUrl: "https://github.com/AbdullahAl-Mahmud",
  linkedinUrl: "https://www.linkedin.com/in/abdullah-al-mahmud-sifat",
  linktreeUrl: "https://linktr.ee/sifat_11",
};

export const modes: Record<PortfolioMode, { label: string; copy: string }> = {
  research: {
    label: "Research",
    copy: "Papers, experiments, conferences, academic growth, and biomedical AI.",
  },
  engineering: {
    label: "Engineer",
    copy: "Projects, GitHub, programming, systems thinking, and product building.",
  },
  leadership: {
    label: "Leadership",
    copy: "Organizations, communication, journalism, volunteering, and community impact.",
  },
};

export const experience = [
  {
    period: "2026.05 — Present",
    role: "Management Trainee, Communication Department",
    organization: "Youth School for Social Entrepreneurs (YSSE) · Remote",
    description:
      "Promoted from intern to trainee. Supports communication activities across sub-teams, coordinates tasks, and mentors new interns during onboarding.",
    focus: "leadership" as PortfolioMode,
  },
  {
    period: "2026.04 — Present",
    role: "Wing Member, Workshop & Seminar Wing",
    organization: "PUST Research Society · Pabna",
    description:
      "Organizes workshops and seminars for students and club members, contributing from planning through execution.",
    focus: "research" as PortfolioMode,
  },
  {
    period: "2026.03 — Present",
    role: "Campus Correspondent",
    organization: "Dhaka Songjog · PUST",
    description:
      "Reports campus stories and communicates university developments to a broader audience.",
    focus: "leadership" as PortfolioMode,
  },
  {
    period: "2026.01 — Present",
    role: "Correspondent",
    organization: "Daily Amader Sokal · Remote",
    description:
      "Contributes reporting and written communication while developing journalism and public-interest storytelling skills.",
    focus: "leadership" as PortfolioMode,
  },
  {
    period: "2025.04 — Present",
    role: "Student Ambassador",
    organization: "Centre for Qualitative Research · Remote",
    description:
      "Supports student engagement and awareness around research learning opportunities.",
    focus: "research" as PortfolioMode,
  },
  {
    period: "2025.05 — 2025.08",
    role: "Artificial Intelligence Intern",
    organization: "Bangladesh Youth Skills Development Organisation · Remote",
    description:
      "Worked in a virtual AI team under the Ignite Internship Program, developing foundational knowledge of applied AI and collaborative project work.",
    focus: "engineering" as PortfolioMode,
  },
  {
    period: "2024.03 — 2025.03",
    role: "Executive → Senior Executive",
    organization: "Bangladesh Space Research Society · Dhaka",
    description:
      "Worked in administration, volunteer leadership, national STEM outreach, program execution, and institutional coordination.",
    focus: "leadership" as PortfolioMode,
  },
];

export const research = {
  title: "Prompt-Guided Biomedical Waste Classification using OpenCLIP + a Supervised Linear Probe",
  organization: "Pabna University of Science and Technology",
  period: "Jul 2026 — Present",
  status: "Active research · one conference submission completed",
  role: "Third author · Student researcher · Model developer · Paper writer",
  summary:
    "Biomedical waste segregation is critical for infection control and sustainable healthcare waste management. This project frames classification as a low-compute transfer-learning problem: a pre-trained OpenCLIP encoder remains frozen while carefully engineered prompts guide semantic image embeddings.",
  method:
    "A lightweight supervised linear probe is trained on the extracted embeddings, reducing compute, training time, and GPU requirements while remaining practical for small and medium biomedical datasets.",
  classes: ["Syringes", "Gloves", "Masks", "Blood bags", "Scalpels", "Medicine bottles"],
  tags: ["OpenCLIP", "Vision-Language Models", "Prompt Engineering", "Transfer Learning", "Linear Probing", "Python"],
};

export const projects = [
  {
    title: "PUST Transit",
    status: "Planning & design",
    description:
      "A mobile campus transportation platform designed to reduce missed university buses by centralizing live location, routes, schedules, delay alerts, driver information, seat availability, notices, and emergency contacts.",
    features: [
      "Real-time bus tracking",
      "Routes and schedules",
      "Delay notifications",
      "Driver and emergency information",
      "Student login",
      "Admin dashboard",
    ],
  },
  {
    title: "Project Showcase Log",
    status: "University technology event",
    description:
      "A project-showcasing experience with a teammate, documenting early hands-on work, presentation practice, and technical collaboration in a university competition environment.",
    features: ["Team collaboration", "Project demonstration", "Presentation", "Technical learning"],
  },
];

export const skills = {
  technical: ["C", "C++ (OOP)", "Java (beginner)", "Python (basic)", "Git & GitHub", "Artificial Intelligence", "Data Science", "Microsoft Power BI"],
  professional: ["Research writing", "Public speaking", "Debate", "Communication", "Project coordination", "Team leadership", "Volunteer leadership"],
  creative: ["Graphic design", "Digital marketing", "Presentation design", "Content and social media management"],
  languages: ["Bangla — Native", "English — Proficient", "Turkish — Basic"],
};

export const education = [
  {
    institution: "Pabna University of Science and Technology (PUST)",
    qualification: "B.Sc. in Information and Communication Engineering",
    period: "Aug 2025 — Present",
  },
  {
    institution: "National Model College",
    qualification: "Higher Secondary Certificate — Science · GPA 4.92 / 5.00",
    period: "2022 — 2023",
  },
  {
    institution: "Rajganj Union High School",
    qualification: "Secondary School Certificate — Science · GPA 4.61 / 5.00",
    period: "2020 — 2022",
  },
];

export const certifications = [
  "Workshop on Writing Research Articles and Publication",
  "Certified Volunteerism: Connect, Engage & Develop",
  "Microsoft Office",
  "Winning Business Competitions: Strategies & Skills",
  "Digital Marketing Fundamentals",
  "Microsoft Power BI",
  "Graphic Design",
  "Marketing Essentials Program",
  "Bangla Debate",
  "Communication and Leadership Management",
  "Technology in Leadership",
  "Presentation & Public Speaking",
  "Leadership Essentials Certificate",
];

export const achievements = [
  "1st Place — Programming Contest, ICE Association, PUST (2026)",
  "Runners-up — Inter-University Freshers' Debate Tournament (2026)",
  "Champion — Intra-Department Short Football Tournament (2025)",
  "Participant — PECCII 2026 International Conference",
  "Champion — Inter-College Debate Competition (2022)",
  "Finisher — Joy Bangla Half Marathon 2024",
  "Finisher — Haier UCR Summer 10K Run 2024",
];

export const volunteering = [
  {
    role: "Student Volunteer",
    organization: "Swapno — Ek Chilte Hasir Jonne",
    period: "Jul 2024 — Present",
    description:
      "Humanitarian field engagement including flood-relief coordination, distribution support, rescue assistance, and community outreach.",
  },
  {
    role: "Graphic Designer (Volunteer)",
    organization: "CARO",
    period: "Mar 2024 — Mar 2025",
    description:
      "Supported visual communication for education, governance, development, and community initiatives.",
  },
];

export const galleryItems = [
  {
    src: "/images/gallery/debate-award.webp",
    alt: "Abdullah Al Mahmud holding a debate tournament award",
    title: "Battle of Words",
    caption: "Runners-up — Inter-University Freshers' Debate Tournament, 2026.",
    category: "Achievement",
  },
  {
    src: "/images/gallery/career-club-appointment.webp",
    alt: "Receiving an appointment letter from PUST Career and Entrepreneurship Club",
    title: "Appointment Letter",
    caption: "Receiving an appointment letter from PUST Career & Entrepreneurship Club.",
    category: "Leadership",
  },
  {
    src: "/images/formal-portrait.webp",
    alt: "Formal professional portrait of Abdullah Al Mahmud",
    title: "Professional Portrait",
    caption: "Formal identity image for academic and professional contexts.",
    category: "Portrait",
  },
  {
    src: "/images/gallery/campus-portrait.webp",
    alt: "Abdullah Al Mahmud on a university campus",
    title: "Campus Life",
    caption: "A personal moment from university life and continuous learning.",
    category: "Campus",
  },
  {
    src: "/images/gallery/project-showcase.webp",
    alt: "Abdullah Al Mahmud and a teammate beside laptops during a project showcase",
    title: "Project Showcase",
    caption: "Technical collaboration and project presentation with a teammate at a university event.",
    category: "Engineering",
  },
  {
    src: "/images/gallery/editorial-portrait.webp",
    alt: "Abdullah Al Mahmud in professional attire beside an architectural wall",
    title: "Editorial Portrait",
    caption: "A creative portrait used across the visual storytelling system.",
    category: "Portrait",
  },
];

export const programmerVisuals = [
  { src: "/images/editorial/programmer-dark.webp", alt: "Abstract programmer visual in a dark environment" },
  { src: "/images/editorial/programmer-red.webp", alt: "Abstract red digital programmer visual" },
  { src: "/images/editorial/programmer-blue.webp", alt: "Abstract blue technology workstation visual" },
  { src: "/images/editorial/programmer-green.webp", alt: "Abstract green code workstation visual" },
];
