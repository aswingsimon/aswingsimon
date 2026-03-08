import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Phone, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("name")) newErrors.name = "Name is required";
    if (!data.get("email") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email") as string))
      newErrors.email = "Valid email is required";
    if (!data.get("message")) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded-full mb-10" />

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="glass p-12 text-center glow-box"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass p-8 space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-box"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "aswingeosimon@gmail.com", href: "mailto:aswingeosimon@gmail.com" },
            { icon: MapPin, label: "Location", value: "Ontario, Canada", href: "#" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aswingeosimon", href: "https://linkedin.com/in/aswingeosimon" },
            { icon: Github, label: "GitHub", value: "github.com/aswingsimon", href: "https://github.com/aswingsimon" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass p-4 flex items-center gap-4 hover:border-primary/40 transition-all block"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
