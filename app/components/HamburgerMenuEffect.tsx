//12/22 小倉作成

"use client";

import { useEffect, useState } from "react";

interface HamburgerMenuEffectProps {
  open: boolean;               // メニューの開閉状態
  children: React.ReactNode;   // メニューの中身
  delay?: number;              // 表示遅延（任意）
}

export function HamburgerMenuEffect({
  open,
  children,
  delay = 0,
}: HamburgerMenuEffectProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      // 開くとき：delay後に表示
      timer = setTimeout(() => setVisible(true), delay);
    } else {
      // 閉じるとき：アニメーション後に非表示
      timer = setTimeout(() => setVisible(false), 300);
    }

    return () => clearTimeout(timer);
  }, [open, delay]);

  return (
        <div
        className={`
            fixed top-0 right-0 h-screen w-[250px] bg-[#b9f5f7] p-6 z-[1002]

            /* ✅ スライドは速い */
            transition-transform duration-300 ease-out

            /* ✅ フェードは遅い（1秒） */
            transition-opacity duration-1000 ease-out

            ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            ${visible ? "pointer-events-auto" : "pointer-events-none"}
        `}
        >


      {children}
    </div>
  );
}
