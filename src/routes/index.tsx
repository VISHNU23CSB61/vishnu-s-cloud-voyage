import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Server,
  Code2,
  Boxes,
  Brain,
  Users,
  Compass,
  Flag,
  Award,
  GraduationCap,
  Rocket,
  ExternalLink,
  ArrowRight,
  Container,
  GitBranch,
  Workflow,
  Network,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu S — Cloud & DevOps Portfolio" },
      {
        name: "description",
        content:
          "Vishnu S — AWS Certified Cloud Practitioner & Solutions Architect Associate. Computer Science student building cloud, DevOps and scalable systems.",
      },
      { property: "og:title", content: "Vishnu S — Cloud & DevOps Portfolio" },
      {
        property: "og:description",
        content:
          "Cloud engineering, DevOps and developer projects by Vishnu S, B.E. CSE @ KGISL Institute of Technology.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

/* ---------- Background: floating clouds ---------- */
function CloudShape({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 100" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        fill="url(#cg)"
        d="M40 75c-16 0-28-11-28-25 0-13 10-23 23-24 4-13 17-22 32-22 17 0 31 12 33 28 3-1 6-1 9-1 14 0 25 10 25 23s-12 23-26 23H40z"
      />
    </svg>
  );
}

function CloudBackground() {
  const clouds = [
    { top: "8%", size: 180, dur: 90, delay: 0, opacity: 0.7 },
    { top: "22%", size: 110, dur: 70, delay: 20, opacity: 0.55 },
    { top: "44%", size: 220, dur: 110, delay: 5, opacity: 0.45 },
    { top: "62%", size: 140, dur: 85, delay: 35, opacity: 0.5 },
    { top: "78%", size: 200, dur: 120, delay: 12, opacity: 0.4 },
    { top: "90%", size: 90, dur: 60, delay: 28, opacity: 0.55 },
  ];
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 500px at 80% -10%, rgba(167,139,250,0.25), transparent 60%), radial-gradient(900px 500px at 0% 110%, rgba(125,211,252,0.35), transparent 60%)",
        }}
      />
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: c.top,
            left: 0,
            width: c.size,
            opacity: c.opacity,
            animation: `float-cloud ${c.dur}s linear ${c.delay}s infinite`,
          }}
        >
          <CloudShape className="w-full h-auto drop-shadow-[0_8px_24px_rgba(120,150,220,0.25)]" />
        </div>
      ))}
      {/* subtle grid / network pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1e3a8a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Typing effect ---------- */
function Typed({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span className="text-gradient">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    ["about", "About"],
    ["education", "Education"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["roadmap", "Grand Line"],
    ["contact", "Contact"],
  ];
  return (
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
      <nav className="glass-strong rounded-full px-3 py-2 flex items-center gap-1 md:gap-2 shadow-glass">
        <a href="#top" className="flex items-center gap-2 px-3 py-1.5 rounded-full">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary text-white">
            <Cloud className="h-4 w-4" />
          </span>
          <span className="font-display font-semibold text-sm hidden sm:block">Vishnu S</span>
        </a>
        <div className="hidden md:flex items-center">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm px-3 py-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/60 transition"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-1.5 text-sm bg-gradient-primary text-white px-4 py-1.5 rounded-full hover-glow transition"
        >
          Hire me <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="reveal text-center mb-12">
      <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs font-medium text-[color:var(--navy)]">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{desc}</p>}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to Cloud / DevOps / Developer roles
        </div>
        <h1 className="reveal mt-6 text-5xl md:text-7xl font-bold tracking-tight">
          Vishnu S
        </h1>
        <p className="reveal mt-4 text-lg md:text-2xl font-medium min-h-[2.5rem]">
          <Typed
            words={[
              "AWS Certified Cloud Practitioner",
              "AWS Solutions Architect – Associate",
              "Cloud & Developer Enthusiast",
              "Building my own Grand Line in Cloud & DevOps.",
            ]}
          />
        </p>
        <p className="reveal mt-6 max-w-2xl mx-auto text-muted-foreground">
          Computer Science student passionate about cloud engineering, DevOps,
          scalable architecture, and building production-grade solutions.
        </p>

        <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-5 py-3 rounded-full font-medium hover-glow transition"
          >
            <Rocket className="h-4 w-4" /> View Projects
          </a>
          <a
            href="/Vishnu-S-Resume.pdf"
            className="inline-flex items-center gap-2 glass-strong px-5 py-3 rounded-full font-medium hover-lift"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass px-5 py-3 rounded-full font-medium hover-lift"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>

        {/* floating accents */}
        <div className="relative mt-16 h-40">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 animate-float-y">
            <div className="glass-strong rounded-2xl px-5 py-4 flex items-center gap-3 shadow-glow">
              <Cloud className="h-6 w-6 text-[color:var(--navy)]" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Currently sailing</div>
                <div className="text-sm font-semibold">AWS · Docker · Kubernetes · CI/CD</div>
              </div>
            </div>
          </div>
          <div className="absolute left-6 md:left-24 top-16 animate-float-y" style={{ animationDelay: "1s" }}>
            <div className="glass rounded-xl p-3 flex items-center gap-2">
              <Flag className="h-4 w-4 text-rose-500" />
              <span className="text-xs font-medium">Pirate-flag cloud</span>
            </div>
          </div>
          <div className="absolute right-6 md:right-24 top-20 animate-float-y" style={{ animationDelay: "2s" }}>
            <div className="glass rounded-xl p-3 flex items-center gap-2">
              <Compass className="h-4 w-4 animate-spin-slow text-[color:var(--navy)]" />
              <span className="text-xs font-medium">Charting the Grand Line</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title={<>A developer with a <span className="text-gradient">cloud-first</span> mindset</>}
        />
        <div className="reveal glass-strong rounded-3xl p-8 md:p-10">
          <p className="text-base md:text-lg leading-relaxed text-foreground/80">
            I'm a Computer Science undergraduate with hands-on experience across{" "}
            <strong>AWS, Docker, Kubernetes, Jenkins and Git</strong>, building
            microservices, CI/CD pipelines and scalable architectures. I enjoy
            translating real problems into clean, production-grade systems —
            from container orchestration to highly-available cloud topologies.
            I'm actively seeking <strong>Developer and Cloud Engineering</strong>{" "}
            roles where I can ship reliable software and keep growing into a
            full-fledged Cloud / DevOps engineer.
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            “Every project is one step closer to my One Piece — a great tech career.”
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education & Certifications ---------- */
function Education() {
  const edu = [
    {
      degree: "B.E. Computer Science and Engineering",
      school: "KGISL Institute of Technology",
      period: "Sep 2023 – Present",
      score: "CGPA: 8.78 / 10",
    },
    {
      degree: "Grade 12 — Computer Science",
      school: "S.E.S Matric & Higher Secondary School, Ganapathy",
      period: "Completed",
      score: "Percentage: 91.7%",
    },
  ];
  const certs = [
    { name: "AWS Certified Cloud Practitioner", year: "2025" },
    { name: "AWS Certified Solutions Architect – Associate", year: "2026" },
  ];
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Education & Certifications" title="Foundations & credentials" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal space-y-5">
            {edu.map((e) => (
              <div key={e.degree} className="glass-strong rounded-2xl p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{e.degree}</h3>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <span className="glass px-2.5 py-1 rounded-full">{e.period}</span>
                      <span className="glass px-2.5 py-1 rounded-full font-medium">{e.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal space-y-5">
            {certs.map((c) => (
              <div
                key={c.name}
                className="glass-strong rounded-2xl p-6 hover-lift hover-glow relative overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full bg-gradient-primary text-white flex items-center justify-center animate-pulse-glow">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Certification · {c.year}
                    </div>
                    <h3 className="font-semibold text-lg">{c.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
const skillGroups: { title: string; icon: React.ReactNode; items: string[] }[] = [
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    items: ["Java", "Python"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      "AWS EC2",
      "S3",
      "IAM",
      "VPC",
      "CloudFormation",
      "Lambda",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
    ],
  },
  {
    title: "Concepts",
    icon: <Boxes className="h-5 w-5" />,
    items: [
      "CI/CD Pipelines",
      "Containerization",
      "Microservices",
      "Agile Development",
      "REST APIs",
    ],
  },
  {
    title: "Problem Solving",
    icon: <Brain className="h-5 w-5" />,
    items: [
      "Data Structures & Algorithms",
      "LeetCode 170+",
      "CodeChef 200+",
      "Competitive Programming",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-5 w-5" />,
    items: [
      "Critical Thinking",
      "Leadership",
      "Attention to Detail",
      "Team Collaboration",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title={<>The <span className="text-gradient">tech stack</span> I sail with</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="reveal glass-strong rounded-2xl p-6 hover-lift hover-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                  {g.icon}
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full glass border border-white/60 hover:bg-white/80 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const projects = [
    {
      name: "CIRRUS — Intelligent AI Travel Co-Pilot",
      desc: "AI-powered travel assistant built on a microservices architecture with personalized recommendation engines, Docker containerization, a Jenkins CI/CD pipeline, Git workflow, load balancing, high availability and monitoring.",
      tags: ["Microservices", "Docker", "Jenkins", "CI/CD", "AI"],
      icon: <Network className="h-5 w-5" />,
    },
    {
      name: "Expense Tracker",
      desc: "Python-based personal finance tracker with complete CRUD, persistent file storage, a CLI interface, input validation, error handling, category-wise analysis and date-range filtering.",
      tags: ["Python", "CLI", "CRUD", "File I/O"],
      icon: <Server className="h-5 w-5" />,
    },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped on the cloud"
          desc="A look at the systems I've designed and built end-to-end."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="reveal group relative glass-strong rounded-3xl p-7 hover-lift hover-glow overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-25 transition" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-xl">{p.name}</h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-foreground/75 leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full glass">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-[color:var(--navy)] text-white px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-full hover:bg-white/80 transition"
                >
                  <ExternalLink className="h-4 w-4" /> Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Competitive Programming ---------- */
function CP() {
  const stats = [
    { label: "LeetCode", value: "170+", sub: "problems solved" },
    { label: "CodeChef", value: "200+", sub: "problems solved" },
    { label: "Contests", value: "Active", sub: "competitive programmer" },
  ];
  const topics = [
    "Arrays",
    "Dynamic Programming",
    "Graphs",
    "Trees",
    "Sliding Window",
    "Recursion",
    "Greedy",
    "Binary Search",
    "Two Pointers",
  ];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Competitive Programming" title="Sharpened on real problems" />
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="reveal glass-strong rounded-2xl p-7 text-center hover-lift">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-2 text-5xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-foreground/70">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 glass rounded-2xl p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Core strengths
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1.5 rounded-full glass-strong hover-lift"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Roadmap ---------- */
function Roadmap() {
  const steps = [
    { title: "AWS Fundamentals", desc: "EC2, S3, IAM, VPC, core services", icon: <Cloud className="h-5 w-5" /> },
    { title: "DevOps Tools", desc: "Git, Jenkins, build automation", icon: <GitBranch className="h-5 w-5" /> },
    { title: "Docker & Kubernetes", desc: "Containers, orchestration, scaling", icon: <Container className="h-5 w-5" /> },
    { title: "CI/CD Pipelines", desc: "End-to-end delivery automation", icon: <Workflow className="h-5 w-5" /> },
    { title: "Cloud Architecture", desc: "HA, load balancing, IaC", icon: <Network className="h-5 w-5" /> },
    { title: "Future Goal", desc: "Cloud / DevOps Engineer", icon: <Flag className="h-5 w-5" /> },
  ];
  return (
    <section id="roadmap" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="The Journey"
          title={<>My <span className="text-gradient">Cloud Grand Line</span></>}
          desc="A roadmap of the islands I've crossed and the ones still ahead."
        />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--navy)]/30 to-transparent" />
          <ol className="space-y-8">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.title} className="reveal relative">
                  <div className={`md:flex ${left ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6`}>
                    <div className="md:w-1/2">
                      <div className={`glass-strong rounded-2xl p-5 hover-lift ml-12 md:ml-0 ${left ? "md:mr-8" : "md:ml-8"}`}>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Stage {i + 1}</div>
                            <h3 className="font-semibold">{s.title}</h3>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-foreground/75">{s.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 h-4 w-4 rounded-full bg-gradient-primary ring-4 ring-white" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const cards = [
    {
      label: "Phone",
      value: "6382444821",
      href: "tel:6382444821",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "Email",
      value: "vishnu821vichu@gmail.com",
      href: "mailto:vishnu821vichu@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      label: "GitHub",
      value: "See my code",
      href: "https://github.com/",
      icon: <Github className="h-5 w-5" />,
    },
  ];
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something on the <span className="text-gradient">cloud</span></>}
          desc="Open to internships, full-time roles and collaborations in Cloud, DevOps and Software Development."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="reveal glass-strong rounded-2xl p-6 hover-lift hover-glow flex items-center gap-4 group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center">
                {c.icon}
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </div>
                <div className="font-medium">{c.value}</div>
              </div>
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="py-10 border-t border-white/40 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cloud className="h-5 w-5 animate-float-y text-[color:var(--navy)]" />
          <Compass className="h-5 w-5 animate-spin-slow text-[color:var(--navy)]" />
          <span className="text-sm text-foreground/75">
            Designed and built by <strong>Vishnu S</strong>
          </span>
        </div>
        <p className="text-xs text-muted-foreground italic">
          “Building my own Grand Line in Cloud and DevOps.”
        </p>
      </div>
    </footer>
  );
}

function Portfolio() {
  useReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="relative min-h-screen font-body">
      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <CloudBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CP />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
