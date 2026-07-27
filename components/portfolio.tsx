"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  achievements,
  certifications,
  education,
  experience,
  modes,
  projects,
  research,
  site,
  skills,
  volunteering,
  type PortfolioMode,
} from "@/data/site";

const modeIcon = {
  research: BookOpen,
  engineering: Code2,
  leadership: Users,
} satisfies Record<PortfolioMode, typeof BookOpen>;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [mode, setMode] = useState<PortfolioMode>("research");
  const [menuOpen, setMenuOpen] = useState(false);
  const [github, setGithub] = useState<{ public_repos: number; followers: number } | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${site.githubUsername}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data) setGithub({ public_repos: data.public_repos ?? 0, followers: data.followers ?? 0 });
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const selectedMode = useMemo(() => modes[mode], [mode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Abdullah Al Mahmud home">
            {site.shortName}<span>.</span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#research" onClick={closeMenu}>Research</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#certifications" onClick={closeMenu}>Certificates</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label="Toggle color theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      <div id="main-content">
        <section id="home" className="hero shell">
          <Reveal className="hero-copy">
            <p className="eyebrow"><span>Project Ascend</span>Digital identity portfolio</p>
            <h1>Abdullah<br />Al <em>Mahmud</em></h1>
            <p className="hero-statement">{site.hero}</p>
            <p className="hero-role">{site.title}</p>
            <div className="button-row">
              <a className="button button-primary" href="#research">Explore my journey <ArrowDown size={17} /></a>
              <a className="button button-secondary" href="/resume/abdullah-al-mahmud-cv.pdf" target="_blank" rel="noreferrer">View resume <Download size={17} /></a>
            </div>
            <div className="hero-meta" aria-label="Professional summary">
              <span><MapPin size={15} />{site.location}</span>
              <span><Sparkles size={15} />AI · Research · Software · Leadership</span>
            </div>
          </Reveal>

          <Reveal className="portrait-wrap" delay={0.12}>
            <div className="portrait-frame">
              <Image
                src="/images/abdullah-portrait.jpg"
                alt="Abdullah Al Mahmud wearing professional attire"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 42vw"
                className="portrait-image"
              />
              <div className="portrait-shade" />
              <div className="portrait-caption">
                <span>Personal motto</span>
                <strong>{site.motto}</strong>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mode-section shell" aria-labelledby="mode-title">
          <div className="mode-panel">
            <div>
              <p className="eyebrow"><span>Choose a perspective</span>Tailored for every visitor</p>
              <h2 id="mode-title">One journey. Three ways to explore it.</h2>
            </div>
            <div className="mode-grid">
              {(Object.keys(modes) as PortfolioMode[]).map((key) => {
                const Icon = modeIcon[key];
                return (
                  <button
                    className={`mode-card ${mode === key ? "is-active" : ""}`}
                    type="button"
                    key={key}
                    onClick={() => setMode(key)}
                    aria-pressed={mode === key}
                  >
                    <Icon size={21} />
                    <strong>{modes[key].title}</strong>
                    <span>{modes[key].copy}</span>
                  </button>
                );
              })}
            </div>
            <div className="mode-result" aria-live="polite">
              <span>Current emphasis</span>
              <strong>{selectedMode.title}</strong>
              <p>{selectedMode.copy}</p>
            </div>
          </div>
        </section>

        <section id="about" className="section shell">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="About"
              title={<>An undergraduate building a foundation for <em>long-term impact.</em></>}
              copy={site.description}
            />
          </Reveal>
          <div className="about-grid">
            <Reveal className="quote-card">
              <p>“Technology becomes meaningful when it solves a real problem, supports people, and creates opportunities for others to move forward.”</p>
            </Reveal>
            <Reveal className="fact-grid" delay={0.08}>
              <article><span>Discipline</span><strong>Information & Communication Engineering</strong></article>
              <article><span>Research direction</span><strong>AI · Computer Vision · Biomedical applications</strong></article>
              <article><span>Languages</span><strong>Bangla · English</strong></article>
              <article><span>Current focus</span><strong>Learning, building, publishing, and serving</strong></article>
            </Reveal>
          </div>
        </section>

        <section id="research" className="section shell">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Research"
              title={<>Academic curiosity with a <em>real-world purpose.</em></>}
              copy="Research is presented honestly by status, role, and evidence—without claiming acceptance or publication before confirmation."
            />
          </Reveal>
          {research.map((item) => (
            <Reveal key={item.title} className="research-card">
              <div className="research-main">
                <div className="status-line"><span className="status-dot" />{item.period}</div>
                <h3>{item.title}</h3>
                <p className="research-subtitle">{item.subtitle}</p>
                <p>{item.summary}</p>
                <div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              <aside className="research-meta">
                <div><span>Status</span><strong>{item.status}</strong></div>
                <div><span>Role</span><strong>{item.role}</strong></div>
                <div><span>Evaluation</span><strong>{item.evaluation}</strong></div>
              </aside>
            </Reveal>
          ))}
        </section>

        <section id="projects" className="section shell">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Engineering"
              title={<>Systems designed around <em>people and problems.</em></>}
              copy="The engineering portfolio starts with one focused campus problem and will grow as implementation work becomes publicly available."
            />
          </Reveal>
          <div className="project-grid">
            {projects.map((project) => (
              <Reveal className="project-card" key={project.title}>
                <div className="project-top"><span className="tag">{project.status}</span><Code2 size={22} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="feature-list">
                  {project.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
                </ul>
                <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </Reveal>
            ))}
            <Reveal className="github-card" delay={0.08}>
              <div className="project-top"><span className="tag">Live GitHub profile</span><Github size={22} /></div>
              <h3>@{site.githubUsername}</h3>
              <p>Public repositories and follower numbers are loaded from the GitHub API when available.</p>
              <div className="stat-grid">
                <div><strong>{github?.public_repos ?? "—"}</strong><span>Public repositories</span></div>
                <div><strong>{github?.followers ?? "—"}</strong><span>Followers</span></div>
              </div>
              <a className="text-link" href={site.githubUrl} target="_blank" rel="noreferrer">Open GitHub profile <ArrowUpRight size={17} /></a>
            </Reveal>
          </div>
        </section>

        <section id="journey" className="section shell">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="Journey"
              title={<>Technology first. <em>Leadership with impact.</em></>}
              copy="A developing professional journey across research engagement, communication, journalism, youth development, and organizational leadership."
            />
          </Reveal>
          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal className="timeline-item" key={`${item.role}-${item.organization}`} delay={index * 0.04}>
                <div className="timeline-period">{item.period}</div>
                <div><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p><p>{item.description}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell">
          <Reveal>
            <SectionHeading index="05" eyebrow="Education & skills" title={<>Learning across <em>technical and human systems.</em></>} />
          </Reveal>
          <div className="education-skills-grid">
            <div className="education-list">
              {education.map((item) => (
                <Reveal className="education-card" key={item.institution}>
                  <GraduationCap size={22} />
                  <div><span>{item.period}</span><h3>{item.institution}</h3><p>{item.qualification}</p></div>
                </Reveal>
              ))}
            </div>
            <Reveal className="skills-card">
              {Object.entries(skills).map(([group, items]) => (
                <div className="skill-group" key={group}>
                  <span>{group}</span>
                  <div className="tag-row">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="certifications" className="section shell">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Credentials"
              title={<>Certifications and <em>measurable milestones.</em></>}
              copy="Certificate previews and verification links can be added as the original PDF or image files become available."
            />
          </Reveal>
          <div className="credentials-grid">
            <Reveal className="credential-panel">
              <h3>Certifications</h3>
              <ol>{certifications.map((certificate, index) => <li key={certificate}><span>{String(index + 1).padStart(2, "0")}</span>{certificate}</li>)}</ol>
            </Reveal>
            <Reveal className="credential-panel" delay={0.08}>
              <h3>Awards & achievements</h3>
              <ol>{achievements.map((achievement, index) => <li key={achievement}><span>{String(index + 1).padStart(2, "0")}</span>{achievement}</li>)}</ol>
            </Reveal>
          </div>
        </section>

        <section className="section shell">
          <Reveal>
            <SectionHeading index="07" eyebrow="Community" title={<>Service that keeps the portfolio <em>human.</em></>} />
          </Reveal>
          <div className="volunteer-grid">
            {volunteering.map((item) => (
              <Reveal className="volunteer-card" key={`${item.role}-${item.organization}`}>
                <Users size={24} />
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.organization}</strong>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section shell contact-section">
          <Reveal className="contact-card">
            <p className="eyebrow"><span>08</span>Connect</p>
            <h2>Let’s create something <em>meaningful.</em></h2>
            <p>Open to research collaboration, academic connections, technical opportunities, and impact-driven initiatives.</p>
            <div className="button-row">
              <a className="button button-primary" href={`mailto:${site.email}`}><Mail size={17} />Email me</a>
              <a className="button button-secondary" href={`tel:${site.phone}`}><Phone size={17} />{site.phone}</a>
            </div>
            <div className="social-row">
              <a href={site.githubUrl} target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a>
              <a href={site.linktreeUrl} target="_blank" rel="noreferrer"><ArrowUpRight size={18} />Linktree</a>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Project Ascend · Built for research, engineering, and impact.</span>
      </footer>
    </main>
  );
}
