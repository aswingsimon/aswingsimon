import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const ResumeSection = () =>
<SectionWrapper id="resume" className="text-center">
    <motion.div
    className="glass p-12 max-w-xl mx-auto glow-box"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}>
    
      <motion.div
      className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity }}>
      
        <FileDown size={28} />
      </motion.div>
      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
        Download Full Resume
      </h2>
      <p className="text-muted-foreground mb-8">
        Get a comprehensive overview of my skills, experience, and certifications in PDF format.
      </p>
      <a

      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-box text-lg" href="https://drive.google.com/file/d/1e0rp6BTw6i7kUdehE3W0faKYsMHc6eeR/view?usp=drive_link">
      
        <FileDown size={20} />
        Download Resume (PDF)
      </a>
    </motion.div>
  </SectionWrapper>;


export default ResumeSection;