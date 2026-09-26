import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

const socials = [
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Armaan. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-neutral-400 hover:text-indigo-600 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-indigo-600 transition-colors"
        >
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
