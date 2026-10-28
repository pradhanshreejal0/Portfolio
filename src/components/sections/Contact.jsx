import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Mail, Github, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate message sending
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-6">
      <SectionHeading
        badge="Connect"
        title="Get In Touch"
        subtitle="Have a question, project proposal, or want to collaborate? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              Direct Channels
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:pradhanshreejal@gmail.com"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-white transition group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Me</div>
                  <div className="text-sm font-semibold text-slate-200">
                    pradhanshreejal@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/pradhanshreejal0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-white transition group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">GitHub</div>
                  <div className="text-sm font-semibold text-slate-200">
                    github.com/pradhanshreejal0
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-300">
                <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Role & Focus</div>
                  <div className="text-sm font-semibold text-slate-200">
                    MERN-Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                Thank you for reaching out, {formData.name || "friend"}. I will review your message and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Fullstack opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/30"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
