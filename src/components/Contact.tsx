import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Clock, Copy, Check, ExternalLink, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "research",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [preparedMail, setPreparedMail] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string, type: "email" | "draft") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(text);
      setTimeout(() => setCopiedEmail(null), 2000);
    } else {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    const subjectMap: Record<string, string> = {
      research: t.contact.formSubjectResearch,
      collab: t.contact.formSubjectCollab,
      teaching: t.contact.formSubjectTeaching,
      other: t.contact.formSubjectOther,
    };

    const subjectTitle = subjectMap[formData.subject] || formData.subject;
    const fullSubject = `[Academic Inquiry] ${formData.name} - ${subjectTitle}`;
    
    const fullBody = `Dear Dr. Ahmad Al Musawi,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}\nInstitution/Affiliation: ${formData.institution || "Not specified"}\nSubject Topic: ${subjectTitle}`;

    const recipients = "almusawiaf@vcu.edu,almusawiaf@utq.edu.iq";
    const mailtoUrl = `mailto:${recipients}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipients)}&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;

    setPreparedMail({
      subject: fullSubject,
      body: fullBody,
      mailtoUrl,
      gmailUrl,
    });

    // Trigger user mail client directly
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.log("Mailto triggered", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 600);
  };

  const handleResetForm = () => {
    setSubmitStatus("idle");
    setPreparedMail(null);
    setFormData({
      name: "",
      email: "",
      institution: "",
      subject: "research",
      message: "",
    });
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
              <div className="space-y-1.5 w-full">
                <span className="text-xs font-mono text-slate-500 block uppercase">{t.contact.directEmails}</span>
                
                {/* VCU Email */}
                <div className="flex items-center justify-between gap-2 bg-[#161618] px-2.5 py-1.5 rounded-lg border border-white/5 group">
                  <a href="mailto:almusawiaf@vcu.edu" className="text-xs font-mono text-slate-300 hover:text-accent-blue transition-colors truncate">
                    almusawiaf@vcu.edu
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("almusawiaf@vcu.edu", "email")}
                    className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail === "almusawiaf@vcu.edu" ? (
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* UTQ Email */}
                <div className="flex items-center justify-between gap-2 bg-[#161618] px-2.5 py-1.5 rounded-lg border border-white/5 group">
                  <a href="mailto:almusawiaf@utq.edu.iq" className="text-xs font-mono text-slate-300 hover:text-accent-blue transition-colors truncate">
                    almusawiaf@utq.edu.iq
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("almusawiaf@utq.edu.iq", "email")}
                    className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail === "almusawiaf@utq.edu.iq" ? (
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
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
          {submitStatus === "success" && preparedMail ? (
            <div className="h-full flex flex-col items-center justify-center py-6 px-2 space-y-5 text-center">
              <div className="w-14 h-14 rounded-full bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30 flex items-center justify-center shadow-lg shadow-accent-emerald/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg">
                <h4 className="text-xl font-display font-bold text-white">
                  {language === "ar" ? "تم تجهيز رسالتك وفتح البريد الإلكتروني!" : "Email Client Ready & Launching!"}
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {language === "ar"
                    ? "تم إعداد رسالتك وتوجيهها مباشرة إلى د. أحمد الموسوي (almusawiaf@vcu.edu & almusawiaf@utq.edu.iq). يمكنك الإرسال مباشرة أو استخدام أحد الخيارات أدناه:"
                    : "Your message has been formatted and addressed to Dr. Ahmad Al Musawi (almusawiaf@vcu.edu & almusawiaf@utq.edu.iq). You can send it directly using any option below:"}
                </p>
              </div>

              {/* Prepared Message Box */}
              <div className="w-full bg-[#111112] border border-white/10 rounded-xl p-4 text-left text-right space-y-2 max-h-48 overflow-y-auto font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[11px] text-slate-400">
                  <span className="font-bold text-accent-blue truncate max-w-[80%]">{preparedMail.subject}</span>
                  <span className="text-slate-500 shrink-0">Draft Ready</span>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
                  {preparedMail.body}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                <a
                  href={preparedMail.mailtoUrl}
                  className="px-4 py-2.5 bg-accent-blue hover:bg-accent-blue/90 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === "ar" ? "تأكيد الإرسال عبر تطبيق البريد" : "Send via Desktop/Mobile Mail"}</span>
                </a>

                <a
                  href={preparedMail.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === "ar" ? "فتح في جي ميل (Gmail Web)" : "Open in Web Gmail"}</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(preparedMail.body, "draft")}
                  className="px-4 py-2.5 bg-[#161618] hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-accent-emerald" />
                      <span className="text-accent-emerald">{language === "ar" ? "تم نسخ المسودة!" : "Draft Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{language === "ar" ? "نسخ نص المسودة" : "Copy Message Draft"}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2.5 bg-[#161618] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{language === "ar" ? "إرسال رسالة جديدة" : "Send Another Message"}</span>
                </button>
              </div>
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

