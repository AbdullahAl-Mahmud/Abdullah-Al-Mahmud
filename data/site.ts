export type PortfolioMode = "research" | "engineering" | "leadership";

export const site = {
  name: "Abdullah Al Mahmud",
  shortName: "AAM",
  title: "ICE Undergraduate · AI Researcher · Software Engineer · Community Leader",
  hero: "Transforming ideas into intelligent solutions through research, engineering, and leadership—creating technology that improves society.",
  motto: "Research with purpose. Build with impact.",
  description:
    "An Information and Communication Engineering undergraduate at Pabna University of Science and Technology, exploring AI, software engineering, research, communication, and community leadership.",
  location: "Bangladesh",
  email: "almahmud.uni@gmail.com",
  phone: "+8801647381269",
  githubUsername: "AbdullahAl-Mahmud",
  githubUrl: "https://github.com/AbdullahAl-Mahmud",
  linkedinUrl: "https://www.linkedin.com/in/abdullah-al-mahmud-sifat",
  linktreeUrl: "https://linktr.ee/sifat_11",
};

export const modes: Record<PortfolioMode, { title: string; copy: string }> = {
  research: {
    title: "Research mode",
    copy: "Academic work, papers, experimentation, conferences, and long-term research direction.",
  },
  engineering: {
    title: "Engineer mode",
    copy: "Software projects, technical growth, GitHub activity, and systems built around real problems.",
  },
  leadership: {
    title: "Leadership mode",
    copy: "Organizations, communication, mentoring, volunteering, and community-centered impact.",
  },
};

export const research = [
  {
    title: "Prompt-Guided Biomedical Waste Classification",
    subtitle: "Using OpenCLIP and a Supervised Linear Probe",
    period: "July 2026 — Present",
    status: "One conference submission completed; further international submission preparation in progress",
    role: "Third author · Student researcher · Model developer · Paper writer",
    summary:
      "A transfer-learning framework that keeps a pre-trained OpenCLIP encoder frozen, generates semantic visual embeddings, and trains a lightweight supervised linear probe to classify biomedical waste such as syringes, gloves, masks, blood bags, scalpels, and medicine bottles.",
    evaluation: "Accuracy · Precision · Recall · F1-score · Confusion matrix",
    tags: ["OpenCLIP", "Computer Vision", "Prompt Engineering", "Linear Probe", "Biomedical AI"],
  },
];

export const projects = [
  {
    title: "PUST Transit",
    status: "Planning & design",
    description:
      "A mobile campus transportation platform intended to reduce missed university buses by centralizing live location, routes, schedules, delay alerts, driver information, seat availability, student notices, and emergency contacts.",
    features: [
      "Real-time bus tracking",
      "Routes and schedules",
      "Delay notifications",
      "Driver and emergency information",
      "Student login",
      "Admin dashboard",
    ],
    tags: ["Mobile application", "Campus technology", "Real-time location", "Solo project"],
  },
];

export const experience = [
  {
    period: "May 2026 — Present",
    role: "Management Trainee",
    organization: "Youth School for Social Entrepreneurs (YSSE)",
    description: "Supports communication activities, cross-team coordination, task management, and mentoring of new interns.",
  },
  {
    period: "April 2026 — Present",
    role: "Wing Member, Workshop & Seminar Wing",
    organization: "PUST Research Society",
    description: "Contributes to workshops and seminars that create opportunities for student learning, research engagement, and collaboration.",
  },
  {
    period: "March 2026 — Present",
    role: "Campus Correspondent",
    organization: "Dhaka Songjog PUST",
    description: "Covers campus stories and strengthens communication between the university community and broader audiences.",
  },
  {
    period: "April 2025 — Present",
    role: "Student Ambassador",
    organization: "Centre for Qualitative Research",
    description: "Supports student engagement and awareness around research learning opportunities.",
  },
  {
    period: "March 2024 — March 2025",
    role: "Executive → Senior Executive",
    organization: "Bangladesh Space Research Society",
    description: "Worked in administration, volunteer leadership, program execution, outreach, and national space-awareness activities.",
  },
];

export const education = [
  {
    institution: "Pabna University of Science and Technology",
    qualification: "B.Sc. Engineering in Information and Communication Engineering",
    period: "August 2025 — Present",
  },
  {
    institution: "National Model College",
    qualification: "Higher Secondary Certificate, Science · GPA 4.92/5.00",
    period: "2022 — 2023",
  },
  {
    institution: "Rajganj Union High School",
    qualification: "Secondary School Certificate, Science · GPA 4.61/5.00",
    period: "2020 — 2022",
  },
];

export const skills = {
  technical: ["C", "C++", "Java", "Python (basic)", "Git & GitHub", "Artificial Intelligence", "Data Science", "Microsoft Power BI"],
  professional: ["Research writing", "Public speaking", "Debate", "Communication", "Project coordination", "Team leadership", "Volunteer leadership"],
  creative: ["Graphic design", "Digital marketing", "Presentation design", "Content and social media management"],
};

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
    period: "July 2024 — Present",
    description: "Humanitarian field engagement including flood-relief coordination, distribution support, and community outreach.",
  },
  {
    role: "Graphic Designer (Volunteer)",
    organization: "CARO",
    period: "March 2024 — March 2025",
    description: "Supported visual communication for education, governance, development, and community initiatives.",
  },
];
