import Reveal from "./Reveal";
import {
  Layout,
  Server,
  Database,
  GitBranch,
  Palette,
  Smartphone,
  Cloud,
  Terminal,
} from "lucide-react";

const skills = [
  { icon: Layout, name: "React & Next.js", color: "#0ea5e9" },
  { icon: Palette, name: "HTML, CSS & Tailwind", color: "#f43f5e" },
  { icon: Terminal, name: "JavaScript & TypeScript", color: "#f59e0b" },
  { icon: Server, name: "Node.js & Express", color: "#10b981" },
  { icon: Database, name: "MongoDB & SQL", color: "#8b5cf6" },
  { icon: GitBranch, name: "Git & GitHub", color: "#f97316" },
  { icon: Smartphone, name: "Responsive Design", color: "#6366f1" },
  { icon: Cloud, name: "Deployment & CI/CD", color: "#14b8a6" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Skills</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-neutral-900">
            Technologies I work with
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto">
            A toolkit I've built over the years to take projects from idea to launch.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(({ icon: Icon, name, color }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="group flex items-center gap-4 bg-white border border-neutral-200 rounded-xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <span
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${color}1a`, color }}
                >
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-neutral-800 text-sm">{name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
