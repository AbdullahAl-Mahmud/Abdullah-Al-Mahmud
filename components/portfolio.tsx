"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  FileText,
  Github,
  GraduationCap,
  Images,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Radio,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";
import {
  achievements,
  certifications,
  education,
  experience,
  galleryItems,
  modes,
  programmerVisuals,
  projects,
  research,
  site,
  skills,
  volunteering,
  type PortfolioMode,
} from "@/data/site";

const modeIcons = {
  research: BookOpen,
  engineering: Code2,
  leadership: Users,
} satisfies Record<PortfolioMode, typeof BookOpen>;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.66, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  index,
  label,
  title,
  copy,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <header className="section-header">
      <div className="section-index">{index}</div>
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
      </div>
    </header>
  );
}

export default function Portfolio() {
  const [mode, setMode] = useState<PortfolioMode>("research");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const [github, setGithub] = useState<{ public_repos: number; followers: number; html_url: string } | null>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const selectedMode = useMemo(() => modes[mode], [mode]);
  const selectedGallery = selectedGalleryIndex === null ? null : galleryItems[selectedGalleryIndex];

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${site.githubUsername}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!data) return;
        setGithub({
          public_repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          html_url: data.html_url ?? site.githubUrl,
        });
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (selectedGalleryIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedGalleryIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedGalleryIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));
      }
      if (event.key === "ArrowLeft") {
        setSelectedGalleryIndex((current) =>
          current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedGalleryIndex]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio" data-mode={mode}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="campus-background" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="log-brand" href="#home" onClick={closeMenu} aria-label="Abdullah Al Mahmud home">
            <span className="brand-a">A</span>
            <span>{site.brand.replace("A ", "")}</span>
          </a>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#log" onClick={closeMenu}>Log</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#source" onClick={closeMenu}>GitHub</a>
            <a href="#verified" onClick={closeMenu}>Certificates</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-resume" href="/resume/abdullah-al-mahmud-cv.pdf" target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-button"
              aria-label="Toggle color theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              type="button"
              className="icon-button menu-button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <div id="main-content">
        <section id="home" className="hero shell">
          <Reveal className="hero-copy">
            <p className="system-line"><span className="pulse-dot" /> ONLINE · PABNA, BANGLADESH</p>
            <p className="hero-kicker">Abdullah Al Mahmud</p>
            <h1>
              Research.<br />
              Engineering.<br />
              <em>Impact.</em>
            </h1>
            <p className="hero-statement">{site.hero}</p>
            <p className="hero-role">{site.title}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">All about me <ArrowDown size={16} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-links" aria-label="Quick links">
              <a href="#log">Experience</a>
              <a href="#work">Projects</a>
              <a href="#source">GitHub</a>
              <a href="#verified">Certificates</a>
              <a href="#gallery">Gallery</a>
              <a href="#skills">Skills</a>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={0.12}>
            <div className="hero-photo-frame">
              <Image
                src="/images/formal-portrait.webp"
                alt="Formal professional portrait of Abdullah Al Mahmud"
                fill
                priority
                sizes="(max-width: 920px) 92vw, 42vw"
                className="hero-photo"
              />
              <div className="hero-photo-gradient" />
              <div className="hero-photo-caption">
                <span>ICE Undergraduate, PUST</span>
                <strong>AI / ML Enthusiast · Researcher</strong>
              </div>
            </div>
            <div className="hero-campus-label">
              <MapPin size={16} />
              <span>{site.university}</span>
            </div>
          </Reveal>
        </section>

        <section className="mode-dock shell" aria-labelledby="mode-title">
          <Reveal className="mode-dock-inner">
            <div className="mode-intro">
              <p className="micro-label">VIEWING MODE</p>
              <h2 id="mode-title">One portfolio, three perspectives.</h2>
              <p>{selectedMode.copy}</p>
            </div>
            <div className="mode-buttons">
              {(Object.keys(modes) as PortfolioMode[]).map((key) => {
                const Icon = modeIcons[key];
                return (
                  <button
                    type="button"
                    key={key}
                    className={mode === key ? "is-active" : ""}
                    onClick={() => setMode(key)}
                    aria-pressed={mode === key}
                  >
                    <Icon size={17} />
                    {modes[key].label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section id="about" className="section shell focus-research focus-leadership">
          <Reveal>
            <SectionHeader
              index="01"
              label="About · Field notes"
              title={<>A student building a technical path through <em>curiosity and service.</em></>}
            />
          </Reveal>
          <div className="about-layout">
            <Reveal className="about-copy">
              <p>
                I&apos;m a first-year B.Sc. student in Information &amp; Communication Engineering at Pabna University of Science and Technology, working toward a career in AI and software engineering through research, applied projects, and continuous learning.
              </p>
              <p>
                My path has moved between the lab and the field: space-awareness programmes, an AI internship, research seminars, campus journalism, team coordination, debate, and humanitarian response. What connects those experiences is a habit of stepping into unfamiliar rooms and finding a useful way to contribute.
              </p>
              <blockquote>“{site.motto}”</blockquote>
            </Reveal>

            <Reveal className="about-portrait-card" delay={0.08}>
              <Image
                src="/images/gallery/campus-portrait.webp"
                alt="Abdullah Al Mahmud on a university campus"
                fill
                sizes="(max-width: 800px) 92vw, 36vw"
                className="about-portrait"
              />
              <div className="image-card-caption">University life · learning in motion</div>
            </Reveal>

            <Reveal className="fact-list" delay={0.14}>
              <div><span>Location</span><strong>{site.location}</strong></div>
              <div><span>University</span><strong>PUST — B.Sc. ICE</strong></div>
              <div><span>Focus</span><strong>AI / ML · Software Engineering</strong></div>
              <div><span>Languages</span><strong>Bangla · English · Turkish (basic)</strong></div>
              <div><span>Also active in</span><strong>Research · Journalism · Volunteering</strong></div>
            </Reveal>
          </div>
        </section>

        <section id="log" className="section shell focus-leadership focus-research">
          <Reveal>
            <SectionHeader
              index="02"
              label="Signal log · Experience"
              title={<>Roles, responsibilities, and <em>evidence of growth.</em></>}
              copy="A chronological log across research, communications, technology, and community work."
            />
          </Reveal>
          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal className={`timeline-row mode-${item.focus}`} delay={Math.min(index * 0.04, 0.2)} key={`${item.period}-${item.role}`}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-marker"><span /></div>
                <article>
                  <h3>{item.role}</h3>
                  <p className="timeline-org">{item.organization}</p>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="section shell focus-research focus-engineering">
          <Reveal>
            <SectionHeader
              index="03"
              label="Transmissions · Featured work"
              title={<>Applied research and products built around <em>real problems.</em></>}
            />
          </Reveal>

          <Reveal className="research-feature">
            <div className="research-copy">
              <div className="status-chip"><span />{research.status}</div>
              <p className="research-meta-line">PUST · {research.period}</p>
              <h3>{research.title}</h3>
              <p>{research.summary}</p>
              <p>{research.method}</p>
              <div className="method-flow" aria-label="Research method">
                <span>OpenCLIP encoder <small>frozen</small></span>
                <i>→</i>
                <span>Prompt-guided embedding</span>
                <i>→</i>
                <span>Linear probe</span>
                <i>→</i>
                <span>Waste class</span>
              </div>
              <div className="class-list">
                <strong>Classifies</strong>
                {research.classes.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="tag-list">{research.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>

            <aside className="research-side">
              <div>
                <span>Role</span>
                <strong>{research.role}</strong>
              </div>
              <div className="programmer-collage" aria-label="Editorial programmer visuals">
                {programmerVisuals.map((visual, index) => (
                  <Image key={visual.src} src={visual.src} alt={visual.alt} width={360} height={240} className={`visual-${index + 1}`} />
                ))}
              </div>
            </aside>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal className="project-card" delay={index * 0.08} key={project.title}>
                {index === 1 ? (
                  <div className="project-image">
                    <Image
                      src="/images/gallery/project-showcase.webp"
                      alt="Project presentation with a teammate beside two laptops"
                      fill
                      sizes="(max-width: 800px) 92vw, 48vw"
                    />
                  </div>
                ) : (
                  <div className="project-graphic"><Radio size={38} /><span>LIVE CAMPUS SIGNAL</span></div>
                )}
                <div className="project-body">
                  <span className="project-status">{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="source" className="section shell focus-engineering">
          <Reveal>
            <SectionHeader
              index="04"
              label="Source · GitHub"
              title={<>Code, experiments, and the <em>public build log.</em></>}
            />
          </Reveal>
          <Reveal className="github-panel">
            <div className="github-profile">
              <div className="github-avatar">AM</div>
              <div>
                <span>github.com</span>
                <h3>@{site.githubUsername}</h3>
              </div>
            </div>
            <div className="github-stats">
              <div><strong>{github?.public_repos ?? "—"}</strong><span>Public repositories</span></div>
              <div><strong>{github?.followers ?? "—"}</strong><span>Followers</span></div>
              <div><strong>Live</strong><span>GitHub API connection</span></div>
            </div>
            <a className="button button-primary" href={github?.html_url ?? site.githubUrl} target="_blank" rel="noreferrer">
              View profile <Github size={16} />
            </a>
          </Reveal>
        </section>

        <section id="verified" className="section shell">
          <Reveal>
            <SectionHeader
              index="05"
              label="Verified · Certificates"
              title={<>Training, workshops, and <em>continuous learning.</em></>}
              copy="Certificate PDFs, images, and verification links can be attached to these cards as they are collected."
            />
          </Reveal>
          <div className="certificate-grid">
            {certifications.map((certificate, index) => (
              <Reveal className="certificate-card" delay={Math.min(index * 0.025, 0.18)} key={certificate}>
                <FileText size={18} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{certificate}</h3>
                <p>Certificate record</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="gallery" className="section shell focus-leadership focus-engineering">
          <Reveal>
            <SectionHeader
              index="06"
              label="Field photos · Gallery"
              title={<>Debate, leadership, projects, and <em>university life.</em></>}
            />
          </Reveal>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <Reveal className={`gallery-item gallery-item-${index + 1}`} delay={Math.min(index * 0.06, 0.18)} key={item.src}>
                <button type="button" onClick={() => setSelectedGalleryIndex(index)} aria-label={`Open ${item.title} image`}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 92vw, 40vw" />
                  <div className="gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                    <Images size={19} />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="section shell focus-engineering">
          <Reveal>
            <SectionHeader
              index="07"
              label="Instrumentation · Skills & tools"
              title={<>The current toolkit—and the <em>learning queue.</em></>}
            />
          </Reveal>
          <div className="skills-grid">
            {[
              ["Programming & technical", skills.technical],
              ["Leadership & professional", skills.professional],
              ["Creative & communication", skills.creative],
              ["Languages", skills.languages],
            ].map(([title, items]) => (
              <Reveal className="skill-panel" key={title as string}>
                <h3>{title}</h3>
                <div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="record" className="section shell focus-research focus-leadership">
          <Reveal>
            <SectionHeader
              index="08"
              label="Record · Education & recognition"
              title={<>Academic foundations and <em>milestones earned.</em></>}
            />
          </Reveal>
          <div className="record-grid">
            <Reveal className="record-panel">
              <div className="record-panel-title"><GraduationCap size={20} /><h3>Education</h3></div>
              {education.map((item) => (
                <article key={item.institution}>
                  <span>{item.period}</span>
                  <h4>{item.qualification}</h4>
                  <p>{item.institution}</p>
                </article>
              ))}
            </Reveal>
            <Reveal className="record-panel" delay={0.08}>
              <div className="record-panel-title"><Award size={20} /><h3>Awards & achievements</h3></div>
              <ul>{achievements.map((achievement) => <li key={achievement}><Check size={15} />{achievement}</li>)}</ul>
              <div className="award-photo">
                <Image src="/images/gallery/debate-award.webp" alt="Debate tournament award moment" fill sizes="(max-width: 760px) 92vw, 38vw" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="leadership" className="section shell focus-leadership">
          <Reveal>
            <SectionHeader
              index="08.5"
              label="Community · Service"
              title={<>Leadership measured through <em>responsibility and action.</em></>}
            />
          </Reveal>
          <div className="service-grid">
            {volunteering.map((item) => (
              <Reveal className="service-card" key={item.organization}>
                <Users size={20} />
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>
              </Reveal>
            ))}
            <Reveal className="service-image-card">
              <Image src="/images/gallery/career-club-appointment.webp" alt="Receiving an appointment letter at PUST Career and Entrepreneurship Club" fill sizes="(max-width: 760px) 92vw, 48vw" />
              <div><span>PUST Career & Entrepreneurship Club</span><strong>Appointment and organizational journey</strong></div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section shell contact-section">
          <Reveal className="contact-card">
            <p className="section-label">09 — Open channel</p>
            <h2>Let&apos;s build, research, or <em>create impact together.</em></h2>
            <p>
              Open to research collaborations, internships, technical opportunities, academic connections, and conversations about AI, software, journalism, or community initiatives.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${site.email}`}><Mail size={16} />Email</a>
              <a className="button button-ghost" href={`tel:${site.phone}`}><Phone size={16} />Call</a>
              <a className="button button-ghost" href={site.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
              <a className="button button-ghost" href={site.githubUrl} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              <a className="button button-ghost" href="/resume/abdullah-al-mahmud-cv.pdf" target="_blank" rel="noreferrer"><Download size={16} />Resume</a>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Abdullah Al Mahmud · Built and logged from Pabna, Bangladesh.</span>
        <span>{site.brand} × Project Ascend</span>
      </footer>

      {selectedGallery ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedGallery.title}>
          <button className="lightbox-backdrop" type="button" aria-label="Close image viewer" onClick={() => setSelectedGalleryIndex(null)} />
          <div className="lightbox-content">
            <button className="lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setSelectedGalleryIndex(null)}><X size={21} /></button>
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              aria-label="Previous image"
              onClick={() => setSelectedGalleryIndex((selectedGalleryIndex! - 1 + galleryItems.length) % galleryItems.length)}
            >
              <ChevronLeft size={22} />
            </button>
            <div className="lightbox-image-wrap">
              <Image src={selectedGallery.src} alt={selectedGallery.alt} fill sizes="94vw" className="lightbox-image" />
            </div>
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              aria-label="Next image"
              onClick={() => setSelectedGalleryIndex((selectedGalleryIndex! + 1) % galleryItems.length)}
            >
              <ChevronRight size={22} />
            </button>
            <div className="lightbox-caption">
              <span>{selectedGallery.category}</span>
              <h3>{selectedGallery.title}</h3>
              <p>{selectedGallery.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
