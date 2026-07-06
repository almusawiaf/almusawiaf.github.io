import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "research",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        institution: "",
        subject: "research",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-[#111112] border border-white/5 rounded-2xl p-6 md:p-8 shadow-sm mb-12 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-1.5 text-accent-blue text-xs font-mono tracking-widest uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
            <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
              Collaboration & Inquiries
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Whether you are interested in discussing complex networks, clinical predictive models, potential paper reviews, or educational collaborations, feel free to drop a message.
            </p>
          </div>

          {/* Core address blocks */}
          <div className="space-y-4 py-4 border-y border-white/5">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-slate-400">
                <span className="font-semibold text-slate-100 block">Academic Affiliation</span>
                <span className="block text-slate-200">University of Thi Qar (UTQ)</span>
                <span className="block text-xs">College of Computer Science and Mathematics</span>
                <span className="block text-xs text-slate-400">Department of Information Technology</span>
                <span className="block text-slate-500 text-xs mt-0.5">Nasiriyah, Thi Qar, Iraq</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
              <div className="space-y-1 text-slate-400 font-mono text-xs">
                <span className="font-sans font-semibold text-slate-100 block text-sm">Inquiry Coordinates</span>
                <a href="mailto:almusawiaf@vcu.edu" className="block hover:text-accent-blue hover:underline">
                  almusawiaf@vcu.edu
                </a>
                <a href="mailto:almusawiaf@utq.edu.iq" className="block hover:text-accent-blue hover:underline">
                  almusawiaf@utq.edu.iq
                </a>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-slate-500">
            *Direct emails will receive priority response within 24-48 business hours.
          </p>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-[#161618]/50 border border-white/5 rounded-xl p-6 md:p-8">
          {submitStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4 animate-fadeIn">
              <div className="p-3 bg-emerald-500/10 text-accent-emerald rounded-full border border-accent-emerald/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-slate-100">Message Sent Successfully!</h4>
                <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
                  Thank you for your academic inquiry. Dr. Ahmad F. Al Musawi will review and respond to you as soon as possible.
                </p>
              </div>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="text-xs font-semibold text-accent-blue hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300 font-sans block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Doe"
                    className="w-full bg-[#111112] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 font-sans block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane.doe@university.edu"
                    className="w-full bg-[#111112] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Institution */}
                <div className="space-y-1">
                  <label htmlFor="institution" className="text-xs font-semibold text-slate-300 font-sans block">
                    Affiliation / Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Massachusetts Institute of Technology"
                    className="w-full bg-[#111112] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-300 font-sans block">
                    Inquiry Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#111112] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 rounded-lg p-2.5 text-xs text-slate-300 focus:outline-none transition-all [&>option]:bg-[#111112] [&>option]:text-white"
                  >
                    <option value="research">Research Collaboration</option>
                    <option value="review">Journal / Conference Peer Review</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="student">Graduate Student Inquiry</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 font-sans block">
                  Inquiry Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your collaboration proposal, review request, or speaking guidelines..."
                  className="w-full bg-[#111112] border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/20 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Status Indicator */}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 bg-rose-500/10 text-rose-400 text-xs px-3 py-2.5 rounded-lg border border-rose-500/20 font-sans">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Please fill out all required fields marked with an asterisk (*).</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold text-xs py-3 rounded-lg transition-all shadow-sm cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending inquiry...</span>
                ) : (
                  <>
                    <span>Transmit Secure Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
