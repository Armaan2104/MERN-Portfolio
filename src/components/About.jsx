import Reveal from "./Reveal";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const facts = [
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Degree", value: "Computer Science and Engineering" },
  { icon: MapPin, label: "Location", value: "Jalandhar, India" },
];

const stats = [
  { number: "7+", label: "Projects Completed" },
  { number: "3+", label: "Production Ready" },
  { number: "2+", label: "Years Dev Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">About Me</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-neutral-900">
            A little bit about myself
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={100}>
            <p className="text-neutral-600 leading-relaxed">
              I'm a full-stack developer who enjoys building things for the web.
              My journey started with simple HTML pages, and today I create
              complete applications — from responsive front-ends to reliable
              back-end APIs.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              I care about writing clean code, keeping interfaces simple, and
              making sure every project I ship is something I'm proud of.
              When I'm not coding, you'll find me reading tech blogs or
              exploring the outdoors.
            </p>

            <ul className="mt-8 space-y-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-white border border-neutral-200 text-indigo-600 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-neutral-800">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 gap-4">
              {stats.map(({ number, label }) => (
                <div
                  key={label}
                  className="bg-white border border-neutral-200 rounded-xl p-6 flex items-center gap-5 hover:border-indigo-300 transition-colors"
                >
                  <p className="font-display text-4xl font-bold text-indigo-600">{number}</p>
                  <p className="text-neutral-600 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
