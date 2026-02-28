import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certs = [
  { name: "CompTIA A+", org: "CompTIA", status: "Certified" },
  { name: "CompTIA Network+", org: "CompTIA", status: "Certified" },
  { name: "AZ-900: Azure Fundamentals", org: "Microsoft", status: "Certified" },
  { name: "MS-900: Microsoft 365 Fundamentals", org: "Microsoft", status: "Certified" },
  { name: "ITIL 4 Foundation", org: "Axelos", status: "Certified" },
  { name: "AZ-104: Azure Administrator", org: "Microsoft", status: "In Progress" },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
      <span className="gradient-text">Certifications</span>
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-10" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.name}
          className="glass p-5 flex items-start gap-4 hover:border-primary/40 hover:glow-box transition-all duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Award size={20} />
          </div>
          <div>
            <h3 className="text-sm font-heading font-semibold text-foreground">{cert.name}</h3>
            <p className="text-xs text-muted-foreground">{cert.org}</p>
            <span
              className={`inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded ${
                cert.status === "Certified"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {cert.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
