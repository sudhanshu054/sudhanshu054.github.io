import { useState } from 'react';
import axios from 'axios';
import {
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';

const resumeUrl =
  'https://drive.google.com/file/d/12fQGuEjU1of9SlRCB18dg-QS6wHqfsUh/view?usp=drive_link';

const projects = [
  {
    number: '01',
    title: 'MyHospital',
    tag: 'AI + BACKEND',
    description:
      'An enterprise-ready hospital operations platform with role-based access, appointments, bed tracking, AI medical consultation, and deployment-ready Docker configuration.',
    impact: 'Full-stack clinical workflows',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'React'],
    url: 'https://github.com/sudhanshu054/MyHospital',
    liveUrl: 'https://hospital-management-2be.pages.dev/login',
  },
  {
    number: '02',
    title: 'IntelliHire',
    tag: 'PRODUCT + AI',
    description:
      'An AI-powered hiring and career workspace combining resume analysis, role recommendations, coding practice, career roadmaps, recruiter job posting, and applications.',
    impact: 'Full-stack career workspace',
    stack: ['Java', 'Spring Boot', 'React', 'JWT'],
    url: 'https://github.com/sudhanshu054/IntelliHire',
    liveUrl: 'https://intelli-hire-one.vercel.app/',
  },
  {
    number: '03',
    title: 'FindCollege',
    tag: 'COLLEGE DISCOVERY',
    description:
      'A college discovery platform to search, filter, compare, and save colleges with detailed pages for courses, placements, and reviews.',
    impact: 'Live product + authenticated APIs',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    url: 'https://github.com/sudhanshu054/FindCollege',
    liveUrl: 'https://find-college-chi.vercel.app/',
  },
  {
    number: '04',
    title: 'Hostel Management System',
    tag: 'FULL-STACK',
    description:
      'A role-based hostel operations platform for students, rooms, fees, attendance, complaints, dashboards, reports, and notifications.',
    impact: 'Docker-ready Spring Boot app',
    stack: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    url: 'https://github.com/sudhanshu054/Hostel-Management-System',
    liveUrl: 'https://hostel-management-system-frontend-cyan.vercel.app/',
  },
  {
    number: '05',
    title: 'School Management System',
    tag: 'FULL-STACK',
    description:
      'A dynamic school operations app with data visualizations, calendar scheduling, Docker containerization, and a four-person Agile team.',
    impact: 'Led a 4-member team',
    stack: ['React', 'Java', 'Docker', 'Recharts'],
  },
];

const skills = [
  'Java',
  'Python',
  'C',
  'SQL',
  'Spring Boot',
  'ReactJS',
  'REST APIs',
  'MySQL',
  'Redis',
  'Apache Kafka',
  'Docker',
  'AWS',
  'Git',
  'DSA',
  'OOP',
  'System Design',
];

const links = {
  linkedin: 'https://linkedin.com/in/sudhanshu-pal-898683259',
  github: 'https://github.com/sudhanshu054',
  leetcode: 'https://leetcode.com/u/ssudhanshu_pal',
};

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-testid={`project-card-${project.number}`}>
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-tag">{project.tag}</span>
        <ArrowUpRight size={20} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-impact">↳ {project.impact}</div>
      <div className="stack-row">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {project.url && (
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noreferrer" data-testid={`project-github-link-${project.number}`}>
            GitHub <ArrowUpRight size={13} />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" data-testid={`project-live-link-${project.number}`}>
              Live demo <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" data-testid="portfolio-navigation">
      <div className="brand-group" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <a className="brand" href="#top" data-testid="brand-link">
          <span>SP</span>
          <b>Sudhanshu Pal</b>
        </a>
        <div
          className="brand-socials"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            paddingLeft: 17,
            borderLeft: '1px solid var(--line)',
          }}
        >
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            data-testid="top-github-link"
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 29,
              height: 29,
              color: 'var(--muted)',
              border: '1px solid var(--line)',
            }}
          >
            <Github size={16} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            data-testid="top-linkedin-link"
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 29,
              height: 29,
              color: 'var(--muted)',
              border: '1px solid var(--line)',
            }}
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        data-testid="mobile-menu-button"
      >
        {open ? <X /> : <Menu />}
      </button>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#work" data-testid="nav-projects-link" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#skills" data-testid="nav-skills-link" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#about" data-testid="nav-about-link" onClick={() => setOpen(false)}>
          About
        </a>
        <a className="nav-cta" href="#contact" data-testid="nav-contact-link" onClick={() => setOpen(false)}>
          Let&apos;s connect <ArrowUpRight size={16} />
        </a>
      </div>
    </nav>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState('idle');

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      await axios.post('/api/contact', form);
      setState('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') {
    return (
      <div className="success-message" data-testid="contact-success">
        <Check size={24} /> Thanks — your message has been received.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="contact-form" data-testid="contact-form">
      <div className="form-grid">
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            data-testid="contact-name-input"
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            data-testid="contact-email-input"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label>
        Message
        <textarea
          required
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          data-testid="contact-message-input"
          placeholder="Tell me about the role or opportunity..."
        />
      </label>
      <button className="button primary" type="submit" disabled={state === 'sending'} data-testid="contact-submit-button">
        {state === 'sending' ? 'Sending...' : 'Send message'} <ArrowUpRight size={17} />
      </button>
      {state === 'error' && (
        <p className="error-message" data-testid="contact-error">
          Something went wrong. Please email me directly.
        </p>
      )}
    </form>
  );
}

export default function App() {
  return (
    <div className="portfolio bento" id="top">
      <Navigation />
      <main>
        <section className="hero section-wrap" data-testid="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING ROLES
            </p>
            <h1>
              Building digital
              <br />
              <em>systems that matter.</em>
            </h1>
            <p className="hero-summary">
              I&apos;m Sudhanshu — a Computer Science engineer who turns complex problems into clean, reliable software.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button primary" data-testid="hero-projects-button">
                View my work <ArrowUpRight size={18} />
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="button secondary" data-testid="hero-resume-button">
                <Download size={17} /> Resume
              </a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="code-window" data-testid="hero-code-card">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>developer.java</small>
              </div>
              <pre>
                <code>
                  <i>class</i> SudhanshuPal {'{'}
                  {'\n'}  <i>String</i> focus = <strong>&quot;build&quot;</strong>;{'\n'}  <i>boolean</i> learning = <strong>true</strong>;{'\n'}  <i>int</i> projects = <strong>03</strong>;{'\n'}  <i>String</i> next = <strong>&quot;ship&quot;</strong>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="availability-card">
              <Sparkles size={17} />
              <span>
                Currently exploring
                <br />
                <b>Java · React · Systems</b>
              </span>
            </div>
          </div>
        </section>

        <section className="metrics section-wrap" data-testid="metrics-section">
          <div>
            <strong>7.15</strong>
            <span>CGPA · B.Tech CSE</span>
          </div>
          <div>
            <strong>60+</strong>
            <span>DSA problems solved</span>
          </div>
          <div>
            <strong>4★</strong>
            <span>HackerRank Java</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Featured projects</span>
          </div>
        </section>

        <section id="work" className="content-section section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Things I&apos;ve built.</h2>
            </div>
            <p className="section-note">A few projects where curiosity met execution.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.number} project={p} />
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE TOOLKIT</p>
              <h2>Skills with intent.</h2>
            </div>
            <p className="section-note">Not just buzzwords — tools I&apos;ve used to ship projects.</p>
          </div>
          <div className="skills-layout">
            <div className="skill-cloud">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={i < 4 ? 'featured-skill' : ''}
                  data-testid={`skill-${skill.toLowerCase().replaceAll(' ', '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="focus-panel">
              <p className="eyebrow">CORE FOCUS</p>
              <div className="focus-item">
                <span>01</span>
                <b>Backend architecture</b>
                <small>APIs, databases &amp; async systems</small>
              </div>
              <div className="focus-item">
                <span>02</span>
                <b>Problem solving</b>
                <small>DSA, clean code &amp; first principles</small>
              </div>
              <div className="focus-item">
                <span>03</span>
                <b>Product thinking</b>
                <small>Useful experiences, not just features</small>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curious by default.
              <br />
              <em>Consistent by choice.</em>
            </h2>
            <p>
              As a Computer Science Engineering student at G. L. Bajaj Institute of Technology and Management, I enjoy going deep — from normalized schemas and cache strategies to the tiny details that make an interface feel right.
            </p>
            <p>My best work happens at the intersection of thoughtful engineering and genuine usefulness.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>2024</span>
              <div>
                <b>Android Development Virtual Intern</b>
                <small>AICTE-EduSkill · Jan — Mar 2024</small>
              </div>
            </div>
            <div className="timeline-item">
              <span>2022–26</span>
              <div>
                <b>B.Tech, Computer Science Engineering</b>
                <small>G. L. Bajaj Institute of Technology &amp; Management</small>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div>
            <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
            <h2>
              Let&apos;s make
              <br />
              <em>something useful.</em>
            </h2>
            <p className="contact-intro">
              Whether you&apos;re hiring, collaborating, or just want to talk systems — my inbox is open.
            </p>
            <div className="direct-links">
              <a href="mailto:sudhanshupal1001@gmail.com" data-testid="email-link">
                <Mail size={16} /> sudhanshupal1001@gmail.com
              </a>
              <a href="tel:+918858482878" data-testid="phone-link">
                <Phone size={16} /> +91 88584 82878
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© 2026 Sudhanshu Pal</span>
        <div>
          <a href={links.github} target="_blank" rel="noreferrer" data-testid="footer-github-link">
            <Github size={17} /> GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin-link">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href={links.leetcode} target="_blank" rel="noreferrer" data-testid="footer-leetcode-link">
            LeetCode ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
