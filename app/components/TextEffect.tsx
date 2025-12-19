"use client";
import { useEffect, useState } from "react";

interface TextEffectProps {
  text: string;
  delay?: number;
}

// 下から浮き上がりながらフェードイン
export function TextEffect({ text, delay = 0 }: TextEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {text}
    </span>
  );
}

// 手前から出てくる（scaleを使った拡大演出）
export function TextEffect3D({ text, delay = 0 }: TextEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-3"
      }`}
    >
      {text}
    </span>
  );
}
