"use client";

import { FormEvent, useState } from "react";
import { LinkIcon, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { language } = useLanguage();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");

    const form = event.currentTarget;
    try {
      const response = await fetch("https://formspree.io/f/mppapyog", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 bg-[#151e36] py-28">
      <div className="container">
        <div className="text-center">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            {language === "fr" ? "Prenons " : "Let’s get "}
            <span className="gradient-text">{language === "fr" ? "contact." : "in touch."}</span>
          </h2>
          <p className="mt-4 text-slate-400">
            {language === "fr" ? "Une opportunité QA ou un projet qualité ? Échangeons." : "A QA opportunity or quality project? Let’s talk."}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h3 className="text-xl font-bold text-white">{language === "fr" ? "Connectons-nous" : "Let’s connect"}</h3>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              {language === "fr" ? "Je suis ouvert aux nouvelles opportunités, aux missions QA et aux échanges autour de la qualité logicielle." : "I am open to new opportunities, QA assignments and conversations about software quality."}
            </p>
            <div className="mt-8 space-y-3">
              <ContactItem icon={Mail} label="EMAIL" value="hamza.aboullail@gmail.com" />
              <ContactItem icon={LinkIcon} label="LINKEDIN" value="linkedin.com/in/hamza-a-9a4546274" href="https://www.linkedin.com/in/hamza-a-9a4546274/" />
              <ContactItem icon={MapPin} label={language === "fr" ? "LOCALISATION" : "LOCATION"} value="Bois-Colombes, France" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
            <input type="hidden" name="_subject" value="Nouveau message depuis le portfolio" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" required label={language === "fr" ? "Votre nom" : "Your name"} placeholder={language === "fr" ? "Votre nom" : "Your name"} />
              <Field name="email" required label={language === "fr" ? "Adresse email" : "Email address"} placeholder="you@example.com" type="email" />
            </div>
            <div className="mt-5">
              <Field name="subject" required label={language === "fr" ? "Sujet" : "Subject"} placeholder={language === "fr" ? "Discussion de projet" : "Project discussion"} />
            </div>
            <label className="mt-5 block text-xs font-semibold text-slate-200">
              Message
              <textarea name="message" required rows={5} placeholder={language === "fr" ? "Parlez-moi de votre projet..." : "Tell me about your project..."} className="mt-2 w-full resize-none rounded-xl border border-slate-600/50 bg-[#071626] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500" />
            </label>

            <button type="submit" disabled={submitState === "sending"} className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3.5 text-sm font-bold text-[#04131c] shadow-[0_10px_30px_rgba(6,182,212,.2)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
              {submitState === "sending" ? (language === "fr" ? "Envoi en cours..." : "Sending...") : (language === "fr" ? "Envoyer le message" : "Send message")}
            </button>

            <div aria-live="polite" className="mt-3 min-h-5 text-center text-xs">
              {submitState === "success" && <p className="text-emerald-400">{language === "fr" ? "Message envoyé avec succès. Merci !" : "Message sent successfully. Thank you!"}</p>}
              {submitState === "error" && <p className="text-red-400">{language === "fr" ? "L’envoi a échoué. Réessayez ou contactez-moi par email." : "Message failed to send. Please try again or email me directly."}</p>}
              {submitState === "idle" && <p className="text-slate-500">{language === "fr" ? "Tous les champs sont obligatoires." : "All fields are required."}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = <><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400"><Icon size={18} /></span><div className="min-w-0"><p className="text-[10px] font-semibold tracking-wider text-slate-500">{label}</p><p className="mt-1 truncate text-sm font-semibold text-white">{value}</p></div></>;
  return href ? <a href={href} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-cyan-400/30">{content}</a> : <div className="glass flex items-center gap-4 rounded-xl p-4">{content}</div>;
}

function Field({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="block text-xs font-semibold text-slate-200">{label}<input name={name} required={required} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-slate-600/50 bg-[#071626] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-500" /></label>;
}
