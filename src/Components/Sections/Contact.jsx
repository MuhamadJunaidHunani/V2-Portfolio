import React, { useState } from "react";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaXTwitter />, href: "https://x.com/", label: "X (Twitter)" },
];

const CONTACT_EMAIL = "hello@junaidhunani.dev";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] bg-[#0d0d0d] text-white grid md:grid-cols-2"
        >
          <div className="absolute top-[-80px] left-[10%] w-[280px] h-[280px] bg-accent opacity-40 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-[-100px] right-[5%] w-[280px] h-[280px] bg-accent opacity-30 blur-[140px] rounded-full"></div>

          {/* Left: pitch */}
          <div className="relative z-10 flex flex-col gap-6 p-8 md:p-12 justify-center">
            <div className="kicker !bg-white/10 !border-white/15 !text-white w-max">
              <span className="dot !bg-accent"></span>
              Let&rsquo;s Work Together
            </div>

            <h2 className="text-[32px]/[40px] md:text-[38px]/[46px] font-bold max-w-md">
              Got a project in mind? Let&rsquo;s build it together.
            </h2>

            <p className="text-[16px]/[27px] text-white/60 max-w-md">
              Tell me what you&rsquo;re trying to build. I&rsquo;ll reply within a day with honest thoughts —
              whether that&rsquo;s a plan, a price, or a reason it might not be the right fit yet.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <button
                onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
                className="flex items-center cursor-pointer group justify-center gap-2 bg-linear-to-b rounded-full to-accent from-accent/70 text-white font-medium pl-4 pr-1 py-1"
              >
                Book a 30-min Call
                <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white text-black/60 text-[22px] leading-none">
                  <RxArrowTopRight className="absolute transition-all duration-300 group-hover:-top-full group-hover:-right-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" strokeWidth={0.4} />
                  <RxArrowTopRight className="absolute transition-all duration-300 top-full right-full group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:-translate-y-1/2" strokeWidth={0.4} />
                </span>
              </button>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-[15px] text-white/70 hover:text-white transition-colors border border-white/15 rounded-full px-4 py-2"
              >
                <HiOutlineMail />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="relative z-10 p-8 md:p-12 flex items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-white/60">Your name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[14.5px] outline-none focus:border-accent/60 transition-colors placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-white/60">Email address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[14.5px] outline-none focus:border-accent/60 transition-colors placeholder:text-white/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-white/60">Project details</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you're building..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[14.5px] outline-none focus:border-accent/60 transition-colors resize-none placeholder:text-white/30"
                />
              </div>
              <button
                type="submit"
                className="mt-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/85 transition-colors rounded-full text-white font-semibold py-2.5"
              >
                Send Message
                <RxArrowTopRight />
              </button>
              {sent && (
                <p className="text-[13px] text-accent text-center">Opening your email client…</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
