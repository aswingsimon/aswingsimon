import { useState, useEffect } from "react";

const skills = [
  "Windows Server",
  "Active Directory",
  "Microsoft 365",
  "Networking",
  "PowerShell",
  "IT Infrastructure",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = skills[skillIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setSkillIndex((prev) => (prev + 1) % skills.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, skillIndex]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;
