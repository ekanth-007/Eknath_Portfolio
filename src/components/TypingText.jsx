import React, { useEffect, useState } from "react";

export default function TypingText({ texts = ["Full Stack Java Developer"], typingSpeed = 150 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    let speed = isDeleting ? 100 : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      speed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
      speed = 500;
    }

    const timer = setTimeout(() => {
      const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(nextIndex);
      setDisplay(currentText.substring(0, nextIndex));
    }, speed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed]);

  return <span>{display}</span>;
}
