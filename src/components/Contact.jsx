import { useState } from "react";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "armaanalikhan9900@gmail.com", href: "mailto:armaanalikhan9900@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8899196557", href: "tel:+918899196557" },
  { icon: MapPin, label: "Location", value: "Jalandhar, India", href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Contact</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-neutral-900">
            Let's work together
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <Reveal delay={100} className="md:col-span-2">
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-neutral-800 group-hover:text-indigo-600 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="pt-4">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  I usually reply within 24 hours. Whether it's a freelance
                  project, a full-time role, or a collaboration — I'd love to
                  hear from you.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={200} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={17} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// import React from "react";

// function App() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "0cca2907-2b32-4afe-8248-d1593ba0a9f2");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="name" required/>
//         <input type="email" name="email" required/>
//         <textarea name="message" required></textarea>

//         <button type="submit">Submit Form</button>

//       </form>
//       <span>{result}</span>

//     </div>
//   );
// }

// export default App;