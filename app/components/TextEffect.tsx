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
  // 表示状態を管理（false: 非表示, true: 表示）
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 指定されたdelayミリ秒後に表示フラグをtrueにする
    const timer = setTimeout(() => setVisible(true), delay);

    // コンポーネントがアンマウントされた際、タイマーを破棄してメモリリークを防ぐ
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        // visibleの状態に応じてスタイルを切り替え
        // opacity: 不透明度
        // scale: 拡大率（小さく→通常サイズ）
        // translate-y: Y軸方向の移動距離（下→元の位置）
        visible
          ? "opacity-100 scale-100 translate-y-0" // 表示：不透明・通常サイズ・元の位置
          : "opacity-0 scale-75 translate-y-3"    // 非表示：透明・少し小さく・下に配置
      }`}
    >
      {text}
    </span>
  );

}

/**
 * テキスト回転・拡大エフェクト
 * 180度回転しながら拡大→縮小し、フェードインして定位置に収まります。
 */
export function TextEffectRotate({ text, delay = 0 }: TextEffectProps) {
  // 表示フラグの管理
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // delayミリ秒後にアニメーションを開始
    const timer = setTimeout(() => setVisible(true), delay);
    // クリーンアップ（メモリリーク防止）
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out transform ${
        visible
          ? // 【表示後の状態】
            // opacity-100: 不透明
            // scale-100: 等倍（元のサイズ）
            // translate-y-0: 元の高さ
            // rotate-0: 回転なし
            "opacity-100 scale-100 translate-y-0 rotate-0"
          : // 【表示前の状態】
            // opacity-0: 透明
            // scale-125: 1.25倍に拡大
            // translate-y-3: 少し下に配置（3ユニット分）
            // rotate-180: 180度回転させた状態からスタート
            "opacity-0 scale-300 translate-y-3 rotate-180"
      }`}
    >
      {text}
    </span>
  );
}

