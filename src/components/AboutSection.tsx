import { motion } from "framer-motion";
import { Server, Shield, Network, Monitor, Headphones } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const focusAreas = [
  { icon: Monitor, label: "Endpoint Management" },
  { icon: Server, label: "Server Administration" },
  { icon: Network, label: "Network Infrastructure" },
  { icon: Shield, label: "Security & Compliance" },
  { icon: Headphones, label: "Remote Support" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
      About <span className="gradient-text">Me</span>
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mb-10" />

    <div className="grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-3">
        <div className="glass p-8 glow-box">
          <p className="text-muted-foreground leading-relaxed mb-6">
            With over 5 years of experience in IT support and systems administration, I bring a results-driven
            approach to managing enterprise infrastructure. I've supported organizations across healthcare,
            finance, and professional services, ensuring uptime, security, and seamless end-user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            My expertise spans Windows Server environments, Active Directory management, Microsoft 365 administration,
            and network troubleshooting. I thrive in high-pressure environments where SLA compliance and rapid
            incident resolution are critical to business continuity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Based in Ontario, Canada, I am passionate about building reliable, scalable IT infrastructure
            that empowers organizations to focus on their core mission.
          </p>
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-3">
        {focusAreas.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            className="glass p-4 flex items-center gap-4 hover:border-primary/40 transition-all cursor-default"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Icon size={20} />
            </div>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
