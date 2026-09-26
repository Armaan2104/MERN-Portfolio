import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/armaan2104", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/armaan2104", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:armaanalikhan9900@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
          Available for work
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
          Hi, I'm Armaan.
          <br />
          <span className="text-indigo-600">AI Full-Stack Developer</span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed">
          I build clean, fast, and user-friendly web applications.
          I love turning ideas into simple, elegant digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View My Work <ArrowRight size={17} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 font-medium px-6 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-neutral-400 hover:text-indigo-600 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
