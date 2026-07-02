"use client";

import React, { useState } from "react";
import { Typography } from "@/shared/components/ui/Typography";

interface ContactFormProps {
  formLabels: {
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ formLabels }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20 text-accent animate-fade-in">
        <Typography variant="body-large" className="font-semibold text-accent mb-2">
          Success
        </Typography>
        <Typography variant="body-small" className="text-foreground/80">
          {formLabels.formSuccess}
        </Typography>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {formLabels.formName}
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
          placeholder="e.g. Alex Bergmann"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {formLabels.formEmail}
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
          {formLabels.formMessage}
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Describe your project automation requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-accent/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : null}
        {formLabels.formSubmit}
      </button>
    </form>
  );
};
