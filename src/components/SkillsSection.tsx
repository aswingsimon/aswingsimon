import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Systems & Servers",
    skills: ["Windows Server", "Active Directory", "Group Policy", "DNS / DHCP", "RDS", "Hyper-V"],
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "VLAN", "VPN", "Firewall Basics", "Routing & Switching"],
  },
  {
    title: "Cloud & SaaS",
    skills: ["Microsoft 365", "Azure Fundamentals", "Exchange Online"],
  },
  {
    title: "Tools",
    skills: ["PowerShell", "Remote Desktop Services", "Ticketing Systems", "Monitoring Tools"],
  },
  {
    title: "Security",
    skills: ["Patch Management", "MFA", "Endpoint Security", "Access Control"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
      Technical <span className="gradient-text">Skills</span>
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-10" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="glass p-6 hover:glow-box transition-shadow duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.1 }}
        >
          <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
