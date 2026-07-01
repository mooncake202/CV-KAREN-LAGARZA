import React, { useEffect, useState, useCallback } from "react";
import { Cpu, Database, Cloud, GraduationCap, Briefcase, Terminal, Layers, Users, Mail, Github, Linkedin, Home, User, Award, Quote, Send, Download, Globe, ExternalLink } from "lucide-react";


const PROFILE = {
  name: "ANA KAREN LAGARZA ORTEGA",
  role: "Computer Systems Engineering Student",
  sub: "ESCOM · Instituto Politécnico Nacional",
  tagline: "Committed to continuous learning and excited to contribute to the team's success, delivering value while expanding my experience in industry projects.",
  email: "karenlagarza02@gmail.com",
  github: "github.com/mooncake202",
  linkedin: "www.linkedin.com/in/ana-karen-lagarza-ortega-685905218",
  
};

const ABOUT = {
  paragraphs: [
    "I have always been a computer science enthusiast, driven by the challenge of solving complex problems and creating efficient solutions. I approach each task with a methodical mindset, breaking down systems to understand their inner workings and identify areas for improvement. I thrive in collaborative environments, valuing the exchange of ideas and perspectives to enhance the quality of our work.",
    "Usually I take on leadership roles in group projects, where I can leverage my problem-solving skills and experience to guide the team towards successful outcomes. I believe in a results-driven approach, ensuring that tasks are completed efficiently and effectively.",
    
  ],
  highlights: [
    { label: "Currently", value: "Finishing my Final Project of an Service Social Management System in ESCOM  in order to graduate" },
    { label: "Focused on", value: "Expand my knowledge in cloud computing and software engineering" },
    { label: "Open to", value: "Internships / junior roles" },
  ],
};

const EXPERIENCE = [
  {
    company: "Inndot",
    role: "ServiceNow Consultant —  Internship",
    place: "Mexico City",
    date: "March 2026 — August 2026",
    points: [
      "Completed training on the ServiceNow platform, gaining hands-on knowledge of its tools, modules, and functionalities.",
      "Took part in practical client-facing simulations, applying consultant-level problem-solving and communication skills.",
    ],
  },
  {
    company: "Banco de México",
    role: "QA & Software Engineering — Social Service",
    place: "Mexico City",
    date: "Jun 2025 — Dec 2025",
    points: [
      "Evaluated the logic and behavior of institutional systems for critical financial auction processes.",
      "Designed and developed end-to-end (E2E) test scripts using C# and Ranorex, increasing operational efficiency and test coverage.",
    ],
  },
  
];

const PROJECTS = [
  {
    title: "Distributed Systems — Web App Deployment on Microsoft Azure",
    place: "ESCOM-IPN",
    
    points: [
      "Configured and administered virtual machines on Azure to host web applications.",
      "Implemented VM backups to ensure service continuity.",
      "Set up a load balancer to distribute traffic and improve availability of a cloud-based system.",
      "Built an application under serverless architecture, optimizing cloud resource usage.",
    ],
  },
  {
    title: "Service Social Management System in ESCOM - Capstone Project ",
    place: "ESCOM-IPN",
    
    points: [
      "Designed and specified a full-stack web platform (React, Node.js/Express, MariaDB, Redis) to digitize and track the internal service social process, coordinating three user roles: students, professors, and coordinators.",
      "Modeled system architecture end-to-end, including 7 functional modules, 60+ use cases, sequence diagrams, and a relational database schema supporting role-based access control via JWT.",
      "Defined a secure deployment architecture using Nginx as a reverse proxy and Cloudflare Tunnel to expose the internal server without direct public exposure, enforcing TLS 1.3 end-to-end encryption.",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Micro-Certification - Welcome to ServiceNow", issuer: "[ServiceNow]", date: "[2026]"},
];

const SKILLS = [
  { icon: Cpu, label: "Development & Logic", items: ["C#", "Java", "OOP"] },
  { icon: Database, label: "Databases & Analysis", items: ["SQL", "Data Modeling"] },
  { icon: Cloud, label: "Cloud & Systems", items: ["Microsoft Azure", "VMs", "Backups", "Serverless"] },
  { icon: Users, label: "Leadership & Teamwork", items: ["Team Lead", "Results-driven", "Collaborative"] },
];

const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Professional — B2" },
];

const EDUCATION = {
  school: "ESCOM — Instituto Politécnico Nacional",
  place: "Mexico City",
  date: "Feb 2022 — Feb 2027",
  degree: "Computer Systems Engineering",
  desc: "Training in data structures, algorithmic logic, object-oriented programming (OOP), databases, and distributed systems architecture. Developed skills in modeling complex processes and abstracting technical requirements.",
};


const NAV = [
  { key: "home", label: "Home", icon: Home },
  { key: "about", label: "About", icon: User },
  { key: "experience", label: "Experience", icon: Briefcase },
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "projects", label: "Projects", icon: Layers },
  { key: "certifications", label: "Certifications", icon: Award },
  { key: "skills", label: "Skills", icon: Terminal },
  { key: "contact", label: "Contact", icon: Send },
];

/* ---------------------------------------------------------
   GLOW CURSOR
--------------------------------------------------------- */
function useGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

/* ---------------------------------------------------------
   PANELS
--------------------------------------------------------- */
function HomePanel() {
  return (
    <div className="panel" key="home">
      <div className="hero-kicker">// curriculum vitae</div>
      <h1 className="hero-name">{PROFILE.name}</h1>
      <div className="hero-role">{PROFILE.role}</div>
      <div className="hero-sub">{PROFILE.sub}</div>
      <p className="hero-tagline">{PROFILE.tagline}</p>
      <div className="hero-links">
        <a className="pill" href={`mailto:${PROFILE.email}`}><Mail size={14} /> {PROFILE.email}</a>
        <a className="pill" href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer"><Github size={14} /> {PROFILE.github}</a>
        <a className="pill" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer"><Linkedin size={14} /> {PROFILE.linkedin}</a>
        
      </div>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="panel" key="about">
      <Eyebrow><User size={13} /> About</Eyebrow>
      {ABOUT.paragraphs.map((p, i) => (
        <p className="about-text" key={i}>{p}</p>
      ))}
      <div className="highlight-grid">
        {ABOUT.highlights.map((h, i) => (
          <div className="highlight-block" key={i}>
            <div className="highlight-label">{h.label}</div>
            <div className="highlight-value">{h.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="panel" key="experience">
      <Eyebrow><Briefcase size={13} /> Work Experience</Eyebrow>
      {EXPERIENCE.map((exp, i) => (
        <div className="entry" key={i}>
          <div className="entry-head">
            <div className="entry-title">{exp.company}</div>
            <div className="entry-date">{exp.date}</div>
          </div>
          <div className="entry-role">{exp.role}</div>
          <div className="entry-place">{exp.place}</div>
          <ul>
            {exp.points.map((p, j) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function EducationPanel() {
  return (
    <div className="panel" key="education">
      <Eyebrow><GraduationCap size={13} /> Education</Eyebrow>
      <div className="entry">
        <div className="entry-head">
          <div className="entry-title">{EDUCATION.school}</div>
          <div className="entry-date">{EDUCATION.date}</div>
        </div>
        <div className="entry-role">{EDUCATION.degree}</div>
        <div className="entry-place">{EDUCATION.place}</div>
        <ul><li>{EDUCATION.desc}</li></ul>
      </div>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <div className="panel" key="projects">
      <Eyebrow><Layers size={13} /> Relevant Projects</Eyebrow>
      {PROJECTS.map((proj, i) => (
        <div className="entry" key={i}>
          <div className="entry-head">
            <div className="entry-title">{proj.title}</div>
          </div>
          <div className="entry-place">
            {proj.place}
            {proj.link && (
              <a className="inline-link" href={proj.link} target="_blank" rel="noreferrer">
                <ExternalLink size={11} /> View project
              </a>
            )}
          </div>
          <ul>
            {proj.points.map((p, j) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CertificationsPanel() {
  return (
    <div className="panel" key="certifications">
      <Eyebrow><Award size={13} /> Certifications</Eyebrow>
      {CERTIFICATIONS.map((c, i) => (
        <a className="cert-row" key={i} href={c.link} target="_blank" rel="noreferrer">
          <div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-meta">{c.issuer} · {c.date}</div>
          </div>
          <ExternalLink size={14} className="cert-arrow" />
        </a>
      ))}
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="panel" key="skills">
      <Eyebrow><Terminal size={13} /> Skills & Technologies</Eyebrow>
      <div className="skills-grid">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div className="skill-block" key={i}>
              <div className="skill-icon"><Icon size={20} /></div>
              <div className="skill-label">{s.label}</div>
              <div className="skill-tags">
                {s.items.map((it, j) => <span className="skill-tag" key={j}>{it}</span>)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="lang-section">
        <div className="lang-title"><Globe size={14} /> Languages</div>
        <div className="lang-list">
          {LANGUAGES.map((l, i) => (
            <div className="lang-row" key={i}>
              <span>{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function ContactPanel() {
  return (
    <div className="panel" key="contact">
      <Eyebrow><Send size={13} /> Contact</Eyebrow>
      <p className="about-text">
        Open to internships and junior roles. Feel free to reach out.
      </p>
      
      
      <a 
        href="mailto:karenlagarza02@gmail.com" 
        className="pill pill-solid form-submit"
        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', gap: '8px', width: 'fit-content' }}
      >
        <Send size={14} /> Send me an email
      </a>
    </div>
  );
}

const PANELS = {
  home: HomePanel,
  about: AboutPanel,
  experience: ExperiencePanel,
  education: EducationPanel,
  projects: ProjectsPanel,
  certifications: CertificationsPanel,
  skills: SkillsPanel,
  contact: ContactPanel,
};

/* ---------------------------------------------------------
   MAIN
--------------------------------------------------------- */
export default function CVSite() {
  const glow = useGlow();
  const [active, setActive] = useState("home");
  const [animKey, setAnimKey] = useState(0);

  const go = useCallback((key) => {
    if (key === active) return;
    setActive(key);
    setAnimKey((k) => k + 1);
  }, [active]);

  const ActivePanel = PANELS[active];

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

        :root {
          --bg: #040108;
          --panel-line: rgba(255,46,196,0.16);
          --magenta: #ff2ec4;
          --magenta-soft: #ff7ad9;
          --violet: #9b3cff;
          --text: #f3ecf6;
          --text-dim: #a292b3;
          --mono: 'JetBrains Mono', monospace;
        }

        * { box-sizing: border-box; }

        .page {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,46,196,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,46,196,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 30% 30%, black 40%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        .glow-cursor {
          position: fixed;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,46,196,0.12) 0%, rgba(155,60,255,0.05) 40%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        /* SIDEBAR NAV */
        .sidebar {
          position: relative;
          z-index: 10;
          width: 300px;
          min-width: 300px;
          height: 100vh;
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--panel-line);
          overflow-y: auto;
        }
        .sidebar-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--text);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .sidebar-role {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--magenta-soft);
          letter-spacing: 0.08em;
          margin-bottom: 40px;
        }

        .navlist {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .navitem {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          color: var(--text-dim);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          text-align: left;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          position: relative;
          transition: color 0.25s ease, background 0.25s ease;
        }
        .navitem:hover {
          color: var(--text);
          background: rgba(255,46,196,0.06);
        }
        .navitem.is-active {
          color: var(--text);
          background: rgba(255,46,196,0.1);
        }
        .navitem.is-active::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 7px;
          bottom: 7px;
          width: 2px;
          background: var(--magenta);
          box-shadow: 0 0 12px var(--magenta);
          border-radius: 2px;
        }
        .navitem .nicon { color: inherit; opacity: 0.8; }
        .navitem.is-active .nicon { color: var(--magenta); opacity: 1; }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 24px;
          font-family: var(--mono);
          font-size: 11px;
          color: var(--text-dim);
          letter-spacing: 0.08em;
        }

        /* CONTENT AREA */
        .content {
          position: relative;
          z-index: 10;
          flex: 1;
          height: 100vh;
          overflow-y: auto;
          padding: 80px 72px;
          display: flex;
          align-items: flex-start;
        }

        .panel {
          width: 100%;
          max-width: 640px;
          animation: enter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes enter {
          from { opacity: 0; transform: translateX(28px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .eyebrow {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--magenta);
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: '';
          width: 22px;
          height: 1px;
          background: var(--magenta);
          display: inline-block;
        }

        /* HOME PANEL */
        .hero-kicker {
          font-family: var(--mono);
          color: var(--text-dim);
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 0.98;
          margin: 0 0 18px 0;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #ffd8f4 40%, var(--magenta) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          cursor: default;
        }
        .hero-name:hover { animation: glitch 0.5s steps(2, end) 1; }
        @keyframes glitch {
          0% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 2px); }
          40% { clip-path: inset(60% 0 10% 0); transform: translate(3px, -2px); }
          60% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 1px); }
          80% { clip-path: inset(40% 0 30% 0); transform: translate(2px, -1px); }
          100% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
        }
        .hero-role {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(17px, 1.8vw, 22px);
          color: var(--magenta-soft);
          font-weight: 500;
          margin-bottom: 8px;
        }
        .hero-sub {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--text-dim);
          margin-bottom: 26px;
        }
        .hero-tagline {
          font-size: 16px;
          color: var(--text-dim);
          max-width: 460px;
          line-height: 1.6;
          border-left: 2px solid var(--panel-line);
          padding-left: 20px;
        }
        .hero-links {
          margin-top: 36px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 12px;
          padding: 10px 16px;
          border: 1px solid var(--panel-line);
          border-radius: 999px;
          color: var(--text);
          text-decoration: none;
          background: rgba(255,46,196,0.03);
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .pill:hover {
          border-color: var(--magenta);
          background: rgba(255,46,196,0.12);
          box-shadow: 0 0 24px rgba(255,46,196,0.25);
          transform: translateY(-2px);
        }
        .pill-solid {
          background: linear-gradient(135deg, rgba(255,46,196,0.25), rgba(155,60,255,0.2));
          border-color: var(--magenta);
        }

        /* ABOUT */
        .about-text {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dim);
          margin-bottom: 18px;
          max-width: 560px;
        }
        .highlight-grid {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .highlight-block {
          display: flex;
          gap: 20px;
          padding: 16px 0;
          border-top: 1px solid var(--panel-line);
        }
        .highlight-label {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--magenta);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          min-width: 110px;
        }
        .highlight-value {
          font-size: 14px;
          color: var(--text-dim);
        }

        /* ENTRIES */
        .entry {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--panel-line);
        }
        .entry:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .entry-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 4px;
        }
        .entry-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--text);
        }
        .entry-date {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--magenta-soft);
          white-space: nowrap;
        }
        .entry-role {
          color: var(--magenta-soft);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .entry-place {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-dim);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .inline-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--magenta-soft);
          text-decoration: none;
          border-bottom: 1px dotted var(--magenta-soft);
        }
        .inline-link:hover { color: var(--magenta); }
        .entry ul { margin: 0; padding-left: 0; list-style: none; }
        .entry li {
          position: relative;
          padding-left: 22px;
          margin-bottom: 10px;
          color: var(--text-dim);
          font-size: 15px;
          line-height: 1.65;
        }
        .entry li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: var(--magenta);
          font-weight: 700;
        }

        /* CERTIFICATIONS */
        .cert-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 4px;
          border-bottom: 1px solid var(--panel-line);
          text-decoration: none;
          color: var(--text);
          transition: padding-left 0.25s ease, color 0.25s ease;
        }
        .cert-row:last-child { border-bottom: none; }
        .cert-row:hover { padding-left: 12px; color: var(--magenta-soft); }
        .cert-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .cert-meta {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--text-dim);
        }
        .cert-arrow { color: var(--magenta); flex-shrink: 0; }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
        }
        .skill-icon { color: var(--magenta); margin-bottom: 10px; }
        .skill-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 12px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-tag {
          font-family: var(--mono);
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(255,46,196,0.08);
          color: var(--magenta-soft);
          border: 1px solid var(--panel-line);
        }
        .lang-section {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid var(--panel-line);
        }
        .lang-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: var(--magenta);
          margin-bottom: 16px;
        }
        .lang-list { display: flex; flex-direction: column; gap: 10px; max-width: 280px; }
        .lang-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--text-dim);
        }
        .lang-level { color: var(--magenta-soft); font-family: var(--mono); font-size: 12px; }

        /* CONTACT */
        .contact-form {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 440px;
        }
        .form-row { display: flex; flex-direction: column; gap: 8px; }
        .form-row label {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-dim);
        }
        .form-row input, .form-row textarea {
          background: rgba(255,46,196,0.03);
          border: 1px solid var(--panel-line);
          border-radius: 8px;
          padding: 12px 14px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          resize: vertical;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .form-row input:focus, .form-row textarea:focus {
          border-color: var(--magenta);
          box-shadow: 0 0 20px rgba(255,46,196,0.15);
        }
        .form-submit { align-self: flex-start; margin-top: 4px; }
        .form-note {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--text-dim);
          opacity: 0.7;
        }

        @media (max-width: 860px) {
          .page { flex-direction: column; height: auto; overflow: visible; }
          .sidebar { width: 100%; height: auto; border-right: none; border-bottom: 1px solid var(--panel-line); padding: 28px 24px; overflow: visible; }
          .content { height: auto; padding: 44px 24px; overflow: visible; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bg-grid" />
      <div className="glow-cursor" style={{ left: glow.x, top: glow.y }} />

      <nav className="sidebar">
        <div className="sidebar-name">{PROFILE.name}</div>
        <div className="sidebar-role">{PROFILE.role}</div>
        <div className="navlist">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                className={`navitem${isActive ? " is-active" : ""}`}
                onClick={() => go(item.key)}
              >
                <Icon className="nicon" size={16} />
                {item.label}
              </button>
            );
          })}
        </div>
        <div className="sidebar-footer">waiting to be part of the team:)</div>
      </nav>

      <main className="content">
        <ActivePanel key={animKey} />
      </main>
    </div>
  );
}
