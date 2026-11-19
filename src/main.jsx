import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, CheckCircle2, Code2, Terminal, Cloud, CalendarDays, Video, Target, Menu, Sparkles, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import "./styles.css";

// Replace this with your Google Form's published embed URL.
// Google Forms > Send > <> Embed HTML > copy the URL from the iframe src.

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebGL9IOaBc89Jt6eEeaaqgYpL5CM18DlJQmWbw8h8cSrj3Wg/viewform?embedded=true";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebGL9IOaBc89Jt6eEeaaqgYpL5CM18DlJQmWbw8h8cSrj3Wg/viewform?usp=sharing&ouid=108760673860447540673";

const courses = [
  { icon: Code2, number: "01", title: "Python Programming", tag: "Beginner to job-ready", desc: "Build strong programming fundamentals and learn to solve real problems with clean, practical Python.", topics: ["Core Python & OOP", "Problem solving", "APIs and projects"] },
  { icon: Terminal, number: "02", title: "React JS Development", tag: "Frontend mastery", desc: "Create responsive, production-style interfaces and understand how modern React applications work.", topics: ["JavaScript & React", "Hooks, routing & state", "Real-world UI projects"] },
  { icon: Cloud, number: "03", title: "DevOps Foundations", tag: "Tools to workflow", desc: "Understand the development-to-deployment lifecycle and get hands-on with essential DevOps tools.", topics: ["Git & CI/CD", "Docker fundamentals", "Cloud & deployment basics"] }
];

const steps = [
  ["01", "Share your goal", "Tell us your current level, learning goals and what you want to achieve."],
  ["02", "Plan your session", "Get a focused one-to-one learning plan based on your pace and priorities."],
  ["03", "Learn by doing", "Work through concepts, coding exercises and practical tasks with mentor guidance."]
];

function App() {
  return <div className="site-shell">
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home"><span className="brand-mark"><Code2 size={19}/></span><span>code<span className="brand-accent">mentor</span><small>PERSONAL TECH TRAINING</small></span></a>
        <div className="nav-links"><a href="#programs">Programs</a><a href="#approach">How it works</a><a href="#about">Why 1:1</a></div>
        <a className="nav-cta" href="#contact">Book a free discovery call <ArrowRight size={16}/></a>
        <a className="mobile-cta" href="#contact" aria-label="Contact"><Menu size={22}/></a>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> PERSONALIZED • LIVE • PRACTICAL</div>
          <h1>Build skills.<br/><span>Build confidence.</span><br/>Build your future.</h1>
          <p className="hero-lead">One-to-one tech training in Python, React JS and DevOps — designed around your goals, your pace and the way you learn.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#contact">Plan your first session <ArrowRight size={18}/></a><a className="text-link" href="#programs">Explore programs <ChevronRight size={17}/></a></div>
          <div className="trust-row"><div className="avatar-stack"><span>Py</span><span>JS</span><span>Ops</span></div><div><strong>Learn one concept at a time</strong><small>With practical exercises and personal guidance</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="code-window">
            <div className="window-bar"><div className="window-dots"><i></i><i></i><i></i></div><span>learning_path.py</span><span className="window-status">● LIVE SESSION</span></div>
            <div className="code-body">
              <div className="code-line"><b>01</b><span className="purple">class</span> <span className="yellow">YourGrowth</span>:</div>
              <div className="code-line indent"><b>02</b><span className="purple">def</span> <span className="blue">__init__</span>(self):</div>
              <div className="code-line indent2"><b>03</b>self.skills = [</div>
              <div className="code-line indent3"><b>04</b><span className="green">"Python"</span>,</div>
              <div className="code-line indent3"><b>05</b><span className="green">"React JS"</span>,</div>
              <div className="code-line indent3"><b>06</b><span className="green">"DevOps"</span></div>
              <div className="code-line indent2"><b>07</b>]</div>
              <div className="code-line gap-line"><b>08</b></div>
              <div className="code-line indent"><b>09</b><span className="purple">def</span> <span className="blue">learn</span>(self):</div>
              <div className="code-line indent2"><b>10</b><span className="purple">return</span> <span className="green">"Keep building."</span><span className="cursor"></span></div>
            </div>
            <div className="code-footer"><span><span className="green-dot"></span> Mentor connected</span><span>1:1 SESSION</span></div>
          </div>
          <div className="floating-card card-top"><span className="float-icon"><Video size={17}/></span><span><b>Live, one-to-one</b><small>Focused on you</small></span></div>
          <div className="floating-card card-bottom"><span className="float-icon purple-bg"><Target size={18}/></span><span><b>Learn by building</b><small>Practical from day one</small></span></div>
          <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        </div>
      </section>

      <section className="metrics container">
        <div><strong>1:1</strong><span>Personal attention</span></div><div><strong>3</strong><span>In-demand learning tracks</span></div><div><strong>100%</strong><span>Goal-focused sessions</span></div><div className="metric-note"><Sparkles size={17}/> Your pace. Your learning path.</div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">CHOOSE YOUR LEARNING PATH</div><h2>Skills that move<br/><span>you forward.</span></h2></div><p>Whether you're starting from scratch or sharpening your skills, each program is shaped around what you want to accomplish.</p></div>
          <div className="course-grid">{courses.map(({icon: Icon, number, title, tag, desc, topics}) => <article className="course-card" key={title}>
            <div className="course-top"><span className="course-icon"><Icon size={23}/></span><span className="course-number">{number}</span></div>
            <span className="course-tag">{tag}</span><h3>{title}</h3><p>{desc}</p>
            <ul>{topics.map(t=><li key={t}><CheckCircle2 size={15}/>{t}</li>)}</ul>
            <a href="#contact" className="course-link">Discuss this program <ArrowRight size={16}/></a>
          </article>)}</div>
        </div>
      </section>

      <section className="section approach-section" id="approach">
        <div className="container approach-grid">
          <div className="approach-copy"><div className="eyebrow">SIMPLE. FOCUSED. PERSONAL.</div><h2>A learning experience<br/>built <span>around you.</span></h2><p>No crowded batches or one-size-fits-all lectures. Get a dedicated session where you can ask questions, practice and move forward with clarity.</p><a href="#contact" className="btn btn-primary">Let's plan your learning <ArrowRight size={17}/></a></div>
          <div className="steps">{steps.map(([n,t,d])=><div className="step" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section why-section" id="about">
        <div className="container">
          <div className="center-heading"><div className="eyebrow">WHY ONE-TO-ONE TRAINING?</div><h2>More than lessons.<br/><span>Real progress.</span></h2></div>
          <div className="benefit-grid"><div className="benefit"><span>01</span><h3>Your questions matter</h3><p>Pause, revisit and ask questions whenever you need. The session is centered on your understanding.</p></div><div className="benefit"><span>02</span><h3>Practice with purpose</h3><p>Apply concepts through exercises and guided projects instead of only watching demonstrations.</p></div><div className="benefit"><span>03</span><h3>A plan that adapts</h3><p>Set a clear goal and adjust the learning path as your confidence and skills grow.</p></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><div className="eyebrow light-eyebrow">YOUR NEXT STEP STARTS HERE</div><h2>Let's talk about<br/><span>your goals.</span></h2><p>Tell us what you'd like to learn. We'll connect with you to understand your goals and discuss a suitable one-to-one session.</p>
            <div className="contact-points"><div><CalendarDays size={18}/><span>Flexible session planning</span></div><div><Video size={18}/><span>Live online learning</span></div><div><Target size={18}/><span>Personalized learning goals</span></div></div>
          </div>
          <div className="form-panel"><div className="form-panel-head"><div><span className="form-kicker">GET IN TOUCH</span><h3>Request a callback</h3></div><span className="form-icon"><Mail size={20}/></span></div>
            <p className="form-intro">Complete the short form and share what you're looking for.</p>
            <div className="google-form-wrap">
              <iframe title="Training enquiry Google Form" src={GOOGLE_FORM_EMBED_URL} loading="lazy" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
				  { /* <div className="form-fallback"><p><strong>Connect your Google Form</strong><br/>Replace the placeholder form URL in <code>src/main.jsx</code> with your Google Forms embed URL.</p><a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="btn btn-dark">Open enquiry form <ArrowRight size={16}/></a></div> */}
            </div>
            <small className="privacy-note">Your details will be used only to respond to your training enquiry.</small>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Code2 size={19}/></span><span>code<span className="brand-accent">mentor</span><small>PERSONAL TECH TRAINING</small></span></a><p>Learn with purpose. Grow with confidence.</p><span>© {new Date().getFullYear()} CodeMentor. All rights reserved.</span></div></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);