import Reveal from "./Reveal";
import { ExternalLink, BriefcaseBusiness, HeartHandshake, BrainCircuit, SportShoe } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    icon: BriefcaseBusiness,
    gradient: "from-indigo-500 to-purple-500",
    title: "Internhub - Online jobs and internship portal",
    description:
      "A full-stack internship portal that connects students with internship opportunities through a user-friendly platform for discovering and managing internship listing",
    tags: ["React", "Node.js", "MongoDB", "Cloudnary"],
  },
  {
    icon: SportShoe,
    gradient: "from-sky-500 to-cyan-400",
    title: "Fitness Challenge Tracker",
    description:
      "A gamified MERN fitness platform for tracking workouts, joining challenges, earning XP and achievements, competing on leaderboards, and getting AI-powered fitness recommendations",
    tags: ["React", "Node", "Tailwind", "REST API", "MongoDB"],
  },
  {
    icon: BrainCircuit,
    gradient: "from-emerald-500 to-teal-400",
    title: "AI - Resume Builder",
    description:
      "AI-powered resume builder that generates ATS-optimized resumes with smart content suggestions, real-time preview, customizable templates, ATS scoring, and PDF export",
    tags: ["React", "TypeScript", "MongoDB", "Groq API"],
  },
  {
    icon: HeartHandshake,
    gradient: "from-amber-500 to-orange-400",
    title: "Smart Helper",
    description:
      "A service-booking platform connecting customers with local helpers, featuring service requests, booking tracking, helper job management, dashboards, and interactive map integration",
    tags: ["React", "Next.js", "Socket.io", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Projects</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-neutral-900">
            Some things I've built
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto">
            A few selected projects that show what I can do.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {projects.map(({ icon: Icon, gradient, title, description, tags }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Card header */}
                <div className={`h-40 bg-linear-to-br ${gradient} flex items-center justify-center`}>
                  <Icon size={52} className="text-white/90 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-neutral-900">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">{description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-5">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
                    >
                      <GithubIcon size={15} /> Source
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
