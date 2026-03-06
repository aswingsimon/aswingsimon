import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import TypingEffect from "./TypingEffect";
import profileImg from "@/assets/profile.png";

const HeroSection = () =>
<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ParticleBackground />

    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

    <div className="section-container relative z-10 text-center">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>

        {/* Profile picture */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-br from-primary to-accent">
            <img
            src={profileImg}
            alt="John Anderson - IT Support Specialist"
            className="w-full h-full rounded-full object-cover" />

            <div className="absolute inset-0 rounded-full glow-box" />
          </div>
        </div>

        <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Welcome to my portfolio</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 leading-tight">Aswin Geo Simon

      </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-heading font-light mb-2">
          IT Support Specialist | System Administrator
        </p>
        <div className="text-lg sm:text-xl h-8 mb-8">
          <TypingEffect />
        </div>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10">
          Infrastructure support professional specializing in Windows Server administration,
          Active Directory management, network troubleshooting, and SLA-driven ticket resolution.
          Delivering enterprise-grade IT solutions across Canada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
          href="https://drive.google.com/file/d/1e0rp6BTw6i7kUdehE3W0faKYsMHc6eeR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-box">

            <Download size={18} />
            Download Resume
          </a>
          <a
          href="#contact"
          className="flex items-center gap-2 glass border-primary/30 text-foreground px-8 py-3 rounded-lg font-medium hover:border-primary/60 transition-all">

            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {[
        { icon: Linkedin, href: "https://linkedin.com/in/aswingeosimon", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/aswingsimon", label: "GitHub" },
        { icon: Mail, href: "mailto:aswingeosimon@gmail.com", label: "Email" }].
        map(({ icon: Icon, href, label }) =>
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">

              <Icon size={18} />
            </a>
        )}
        </div>
      </motion.div>

      <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}>

        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </div>
  </section>;


export default HeroSection;