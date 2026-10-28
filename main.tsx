import * as React from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import MarginaliaPortfolioTemplate from "./marginalia-portfolio-template"
import portraitImg from "./vedika.jpg"

const U = "https://images.unsplash.com/photo-"

export default function App() {
  return (
    <MarginaliaPortfolioTemplate
      name="Vedika Rana"
      role="Aspiring Full-Stack Developer"
      year="2026"
      location="Greater Noida, India"
      title="Portfolio"
      docLabel="Curriculum Vitae"
      portrait={portraitImg}
      traits={["curious", "AI & web dev", "builder", "problem solver", "adaptable", "creative"]}
      greeting="Hey, I'm Vedika."
      bio="I am a second-year B.Tech CSE student at IILM University, Greater Noida, and an *aspiring full-stack developer*. Recently interned at [In Amigos as an AI Web Developer], building intelligent, user-first web applications. Driven by curiosity and code, I focus on web development, AI, and cloud computing."
      educationIntro="B.Tech CSE student with real-world development experience and industry-recognized certifications."
      education={[
        {
          title: "AI Web Developer Intern",
          place: "In Amigos",
          period: "2026",
          circled: true,
        },
        {
          title: "B.Tech in Computer Science & Engineering (2nd Year)",
          place: "IILM University, Greater Noida",
          period: "2024 — 2026+ (Present)",
          circled: true,
        },
        {
          title: "AI Prompt Engineering Master Class",
          place: "Featured by Microsoft",
          period: "2026",
          circled: true,
        },
        {
          title: "AI Fundamentals Certification",
          place: "Credential / Certified",
          period: "2026",
        },
        {
          title: "CAIF Certification",
          place: "Certified Associate in Information Fundamentals",
          period: "2026",
        },
        {
          title: "Adobe Digital Marketing Certification",
          place: "Adobe Certified",
          period: "2026",
        },
        {
          title: "Deloitte Data Analyst Job Simulation",
          place: "Deloitte / Forage",
          period: "2026",
        },
      ]}
      cvUrl="https://github.com/vedika-rana"
      cvNote="scan for my GitHub & CV"
      languages={[
        { name: "English", level: "professional", value: 0.95 },
        { name: "Hindi", level: "native", value: 1.0 },
      ]}
      tools={[
        { name: "JavaScript", mark: "JS", bg: "#f7df1e", fg: "#000000", note: "DOM manipulation & asynchronous programming" },
        { name: "Node.js", mark: "node", bg: "#339933", fg: "#ffffff", note: "server-side JavaScript runtime & backend logic" },
        { name: "Express.js", mark: "ex", bg: "#1f1f1f", fg: "#ffffff", note: "robust routing, REST APIs & middleware" },
        { name: "C++", mark: "C++", bg: "#00599c", fg: "#ffffff", note: "data structures, algorithms & problem solving" },
        { name: "Git & GitHub", mark: "git", bg: "#f05032", fg: "#ffffff", note: "version control, branching & repositories" },
        { name: "Bootstrap", mark: "B", bg: "#7952b3", fg: "#ffffff", note: "rapid responsive layout & UI components" },
      ]}
      toolNote="hover a tool to see my focus"
      skillsIntro="Building full-stack web experiences from front-end layout to back-end routes and database integrations."
      skills={[
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "EJS Templating",
        "Bootstrap",
        "C++",
        "Git & GitHub",
        "Cloud Computing",
        "AI Fundamentals",
        "RESTful APIs",
      ]}
      books={[
        { title: "Eloquent JavaScript", color: "#e0613a" },
        { title: "Grokking Algorithms", color: "#1f2a2b" },
        { title: "Clean Code", color: "#2f3b52" },
        { title: "Designing Data-Intensive Apps", color: "#efe8dc" },
      ]}
      booksNote="bookshelf & technical reads"
      projectsNote="featured academic & capstone builds"
      projects={[
        {
          name: "Personal Blog",
          tagline: "Technical articles in a sleek navy theme.",
          kind: "Full-Stack Web App · Node.js, Express & EJS",
          year: "2026",
          summary: "A personal technical blogging platform designed with a sleek *navy blue aesthetic* using [Node.js, Express, and EJS]. Features markdown post rendering, full CRUD article authoring, and a distraction-free reading experience.",
          challenge: "Build high-contrast dark navy reading modes with zero-runtime client bloat.",
          stats: [
            { value: 100, suffix: "%", label: "responsive dark navy layout" },
            { value: 4, suffix: " CRUD", label: "complete article workflows" },
          ],
          images: [
            U + "1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
            U + "1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80",
            U + "1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80",
          ],
          screens: ["detail", "feed", "cover"],
          accent: "#0f2b5c",
          tag: "navy blog",
        },
        {
          name: "Crestwood University",
          tagline: "Professional academic & campus portal.",
          kind: "Web Application · HTML, CSS, JavaScript & Bootstrap",
          year: "2026",
          summary: "A professional, modern college web portal built for *Crestwood University*. Consolidates [academic departments, faculty profiles, admissions, and campus notices] into an accessible, responsive hub.",
          challenge: "Structure comprehensive university portals and multi-tier department navigations with clean Bootstrap components.",
          stats: [
            { value: 12, suffix: "+", label: "integrated academic sections" },
            { value: 99, suffix: "%", label: "cross-browser compatibility" },
          ],
          images: [
            U + "1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
            U + "1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
            U + "1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
          ],
          screens: ["cover", "detail", "stats"],
          accent: "#1b3a4b",
          tag: "crestwood university",
        },
      ]}
      facts={[
        { doodle: "pencil", text: "Known as Vedu by friends and peers" },
        { doodle: "globe", text: "Interned at In Amigos as an AI Web Developer" },
        { doodle: "book", text: "2nd-year B.Tech CSE student at IILM University, Greater Noida" },
        { doodle: "coffee", text: "Microsoft AI Prompt Engineering & AI Fundamentals certified" },
        { doodle: "cat", text: "Loves debugging late at night with lo-fi beats and clean code" },
      ]}
      factsNote="beyond the code"
      thanks="Thank you for stopping by."
      email="vedikarana001@gmail.com"
      links={[
        { label: "GitHub", href: "https://github.com/vedika-rana" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/vedika-rana-3306b2379/" },
      ]}
      letter={
        "Building things that live on the web is my favorite kind of magic.\n\nWhether infusing AI into full-stack web apps, architecting clean Node.js backends, or solving problems in C++ — I'm driven by persistent curiosity and clean code.\n\nAlways excited to build something impactful. Let's create together!"
      }
      signature="Vedika Rana (Vedu)"
    />
  )
}

const rootElement = document.getElementById("root")
if (rootElement) {
  createRoot(rootElement).render(<App />)
}
