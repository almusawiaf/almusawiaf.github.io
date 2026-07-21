import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
              <span>{t.contact.badge}</span>
            </div>
            <h3 className="text-2xl font-display font-semibold tracking-tight text-slate-100">
              {t.contact.title}
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="space-y-4 border-t border-white/5 pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#161618] rounded-lg border border-white/5 text-accent-blue shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">{t.contact.directEmails}</span>
                <a href="mailto:almusawiaf@vcu.edu" className="text-xs font-mono text-slate-300 hover:text-accent-blue block transition-colors">
                  almusawiaf@vcu.edu
                </a>
                <a href="mailto:almusawiaf@utq.edu.iq" className="text-xs font-mono text-slate-300 hover:text-accent-blue block transition-colors">
                  almusawiaf@utq.edu.iq
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#161618] rounded-lg border border-white/5 text-accent-teal shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">{t.contact.officeLocation}</span>
                <p className="text-xs text-slate-300 leading-snug mt-0.5">
                  {t.contact.locationDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#161618] rounded-lg border border-white/5 text-accent-emerald shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block uppercase">{t.contact.hours}</span>
                <p className="text-xs text-slate-300 leading-snug mt-0.5">
                  {t.contact.hoursDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#161618]/40 border border-white/5 rounded-xl p-6">
          {submitStatus === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-semibold text-white">
                {t.contact.badge}
              </h4>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                {t.contact.successMessage}
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-4 px-4 py-2 bg-[#111112] border border-white/10 text-xs text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitStatus === "error" && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t.contact.errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.formNamePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#111112] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formEmail} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.formEmailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#111112] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formInst}
                  </label>
                  <input
                    type="text"
                    name="institution"
                    placeholder={t.contact.formInstPlaceholder}
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full bg-[#111112] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.formSubject}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#111112] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue"
                  >
                    <option value="research">{t.contact.formSubjectResearch}</option>
                    <option value="collab">{t.contact.formSubjectCollab}</option>
                    <option value="teaching">{t.contact.formSubjectTeaching}</option>
                    <option value="other">{t.contact.formSubjectOther}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.contact.formMessage} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.formMessagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#111112] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-blue/30 focus:border-accent-blue resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>{t.contact.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
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
