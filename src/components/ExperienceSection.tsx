import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const roles = [
  {
    company: "Megasys Biotek / Akesiss Pharma",
    title: "Senior IT Executive",
    location: "Kochi, IN",
    duration: "Nov 2018 – Dec 2023",
    bullets: [
      "Managed Active Directory environment supporting 500+ users across 3 office locations",
      "Reduced unplanned server downtime by 40% through proactive monitoring and patch management",
      "Deployed Microsoft 365 tenant-wide, migrating 300+ mailboxes with zero data loss",
      "Automated routine IT tasks using PowerShell, saving 15+ hours weekly",
      "Maintained 99.5% SLA compliance for Tier 2/3 escalation tickets",
      "Led network segmentation project, improving security posture across all departments",
    ],
  },
  {
    company: "SOD IT Services",
    title: "L2 IT Support Specialist",
    location: "Kochi, IN",
    duration: "2020 – 2022",
    bullets: [
      "Provided Tier 1/2 support for 200+ users in a hybrid work environment",
      "Resolved an average of 25+ tickets daily with 95% first-contact resolution rate",
      "Deployed and configured 150+ endpoints using standardized imaging procedures",
      "Managed Group Policy Objects to enforce security baselines across all workstations",
      "Implemented MFA rollout for all staff, reducing phishing-related incidents by 70%",
    ],
  },
  {
    company: "Web Care Designers' Hub",
    title: "Junior IT Technician",
    location: "Thrissur, IN",
    duration: "2019 – 2020",
    bullets: [
      "Assisted with hardware/software troubleshooting and desktop support",
      "Documented IT procedures and created knowledge base articles",
      "Supported VPN setup for 80+ remote users during rapid transition to remote work",
      "Maintained inventory of 200+ devices using asset management tools",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
      Professional <span className="gradient-text">Experience</span>
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-10" />

    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            className="md:pl-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass p-6 hover:glow-box transition-shadow duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">{role.title}</h3>
                </div>
                <span className="text-xs font-mono text-primary">{role.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {role.company} · {role.location}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((b, bi) => (
                  <li key={bi} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
