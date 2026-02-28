import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Active Directory Deployment",
    problem: "Needed a centralized identity management system for a growing 200+ user organization with no domain infrastructure.",
    environment: "Windows Server 2022, Hyper-V, DNS, DHCP",
    actions: [
      "Designed and deployed a multi-site Active Directory forest",
      "Configured Group Policy Objects for security and compliance",
      "Implemented OU structure aligned with organizational hierarchy",
      "Set up DNS and DHCP with failover clustering",
    ],
    technologies: ["Windows Server 2022", "Active Directory", "Group Policy", "DNS", "DHCP"],
    outcome: "Reduced user onboarding time by 60% and established centralized access control for all endpoints.",
  },
  {
    title: "Remote Desktop Gateway Setup",
    problem: "Remote workforce needed secure access to internal applications without VPN complexity.",
    environment: "Windows Server 2019, RDS, SSL Certificates",
    actions: [
      "Deployed RD Gateway with NPS integration",
      "Configured Connection Authorization and Resource Authorization Policies",
      "Implemented SSL certificates for secure connections",
      "Created user documentation and training materials",
    ],
    technologies: ["RDS", "NPS", "SSL", "Windows Server 2019"],
    outcome: "Enabled secure remote access for 150+ users, reducing VPN support tickets by 75%.",
  },
  {
    title: "Microsoft 365 Migration",
    problem: "Legacy on-premise Exchange server reaching end-of-life with growing maintenance overhead.",
    environment: "Exchange 2016 → Exchange Online, Azure AD Connect",
    actions: [
      "Planned phased migration strategy for 300+ mailboxes",
      "Deployed Azure AD Connect for hybrid identity",
      "Migrated mailboxes with zero data loss during cutover",
      "Configured security policies and DLP in M365 Admin Center",
    ],
    technologies: ["Microsoft 365", "Azure AD Connect", "Exchange Online", "PowerShell"],
    outcome: "Completed migration with 99.9% uptime and $40K annual infrastructure cost savings.",
  },
  {
    title: "Network Segmentation Implementation",
    problem: "Flat network topology creating security risks and broadcast storm issues across 5 floors.",
    environment: "Cisco switches, pfSense firewall, managed infrastructure",
    actions: [
      "Designed VLAN architecture for departmental isolation",
      "Configured inter-VLAN routing with ACLs",
      "Implemented network monitoring and alerting",
      "Documented all configurations and created network diagrams",
    ],
    technologies: ["VLAN", "ACL", "pfSense", "Network Monitoring"],
    outcome: "Eliminated broadcast storms and reduced lateral attack surface by 80%.",
  },
  {
    title: "Helpdesk Ticket Automation",
    problem: "Manual ticket routing causing 45-min average first response time and SLA breaches.",
    environment: "PowerShell, REST APIs, Ticketing System",
    actions: [
      "Built PowerShell scripts for automatic ticket categorization",
      "Integrated with REST API for real-time ticket assignment",
      "Created automated escalation workflows",
      "Implemented SLA tracking dashboard",
    ],
    technologies: ["PowerShell", "REST API", "Automation", "Reporting"],
    outcome: "Reduced average first response time to 8 minutes, achieving 98% SLA compliance.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="glass p-6 hover:glow-box transition-shadow duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-heading font-semibold text-foreground">{project.title}</h3>
        {expanded ? (
          <ChevronUp size={18} className="text-primary shrink-0 mt-1" />
        ) : (
          <ChevronDown size={18} className="text-muted-foreground shrink-0 mt-1" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-3"><span className="text-primary font-mono text-xs">PROBLEM:</span> {project.problem}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mb-3">
              <span className="text-primary font-mono text-xs">ENVIRONMENT:</span> {project.environment}
            </p>

            <div className="mb-3">
              <span className="text-primary font-mono text-xs">ACTIONS:</span>
              <ul className="mt-1 space-y-1">
                {project.actions.map((a, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">▸</span>{a}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              <span className="text-primary font-mono text-xs">OUTCOME:</span> {project.outcome}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((t) => (
          <span key={t} className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/10 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
      Enterprise <span className="gradient-text">Projects</span>
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-4" />
    <p className="text-muted-foreground mb-10 max-w-2xl">Click any project to view full case study details.</p>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
