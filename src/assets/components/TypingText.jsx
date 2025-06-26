import { useState, useEffect } from "react";


export const TypingText = ({ words, speed = 100, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return <span className="text-color text-style">{text}<span className="animate-blink ml-1">| </span></span>;
};
