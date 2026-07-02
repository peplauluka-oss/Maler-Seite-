"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const TAU = Math.PI * 2;

/** Liest den Scroll-Fortschritt der Seite (0..1). */
function useScrollProgress() {
  const ref = useRef(0);
  useFrame((_, delta) => {
    if (typeof window === "undefined") return;
    const max = document.documentElement.scrollHeight - window.innerHeight || 1;
    const target = Math.min(Math.max(window.scrollY / max, 0), 1);
    ref.current += (target - ref.current) * Math.min(delta * 2.6, 1);
  });
  return ref;
}

/** Farbeimer aus 3D-Primitiven, mit glänzender Kupfer-Farboberfläche. */
function PaintBucket() {
  return (
    <group>
      {/* Eimerkörper (leicht konisch, offen oben) */}
      <mesh castShadow>
        <cylinderGeometry args={[0.92, 0.76, 1.15, 56, 1, true]} />
        <meshStandardMaterial color="#8a8f98" metalness={0.9} roughness={0.28} side={THREE.DoubleSide} />
      </mesh>
      {/* Oberer Rand */}
      <mesh position={[0, 0.575, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.92, 0.055, 16, 64]} />
        <meshStandardMaterial color="#c2854a" metalness={0.95} roughness={0.22} />
      </mesh>
      {/* Farboberfläche (emissives Kupfer, „flüssig") */}
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.86, 56]} />
        <meshStandardMaterial color="#f0c088" emissive="#e0a86a" emissiveIntensity={0.85} metalness={0.5} roughness={0.15} />
      </mesh>
      {/* Henkel */}
      <mesh position={[0, 0.75, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.9, 0.035, 12, 48, Math.PI]} />
        <meshStandardMaterial color="#9aa0a8" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Farbnase, die über den Rand läuft */}
      <mesh position={[0.9, 0.1, 0]} rotation={[0, 0, 0.2]}>
        <capsuleGeometry args={[0.06, 0.7, 6, 12]} />
        <meshStandardMaterial color="#e0a86a" emissive="#c2854a" emissiveIntensity={0.5} metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
}

/** Pinsel (Stiel, Zwinge, Borsten mit frischer Farbe). */
function Brush() {
  return (
    <group position={[1.55, 0.35, 0.2]} rotation={[0, 0, -0.5]}>
      {/* Stiel */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.075, 0.09, 1.6, 24]} />
        <meshStandardMaterial color="#2a2f38" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* Zwinge (Metall) */}
      <mesh position={[0, -0.13, 0]}>
        <cylinderGeometry args={[0.13, 0.12, 0.34, 24]} />
        <meshStandardMaterial color="#c2854a" metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Borsten */}
      <mesh position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.12, 0.17, 0.42, 24]} />
        <meshStandardMaterial color="#d9dde2" metalness={0.1} roughness={0.8} />
      </mesh>
      {/* Frische Farbe an der Spitze */}
      <mesh position={[0, -0.62, 0]}>
        <cylinderGeometry args={[0.17, 0.05, 0.16, 24]} />
        <meshStandardMaterial color="#f0c088" emissive="#e0a86a" emissiveIntensity={0.9} metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Rig({ reduce, mobile }: { reduce: boolean; mobile: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const scroll = useScrollProgress();

  useFrame((state) => {
    if (!rig.current) return;
    const p = scroll.current;
    const t = state.clock.elapsedTime;
    // Dreht sich mit dem Swipe, plus dezente Eigenrotation
    rig.current.rotation.y = p * TAU * 1.35 + (reduce ? 0 : t * 0.05);
    rig.current.rotation.x = Math.sin(p * Math.PI) * 0.18 + (reduce ? 0 : Math.sin(t * 0.4) * 0.02);
    if (mobile) {
      // Handy: Objekt zentral in der oberen Bildhälfte (Text sitzt darunter)
      rig.current.position.x = Math.cos(p * Math.PI) * 0.25;
      rig.current.position.y = 1.35 + Math.sin(p * Math.PI * 2) * 0.12 + (reduce ? 0 : Math.sin(t * 0.5) * 0.05);
    } else {
      // Desktop: Objekt rechts im freien Bereich neben dem Text
      rig.current.position.x = 0.9 + Math.cos(p * Math.PI) * 0.4;
      rig.current.position.y = -0.15 + Math.sin(p * Math.PI * 2) * 0.15 + (reduce ? 0 : Math.sin(t * 0.5) * 0.04);
    }
    const s = (mobile ? 0.92 : 1) + Math.sin(p * Math.PI) * 0.06;
    rig.current.scale.setScalar(s);
    // Kamera-Dolly: leichter Zoom in die Szene
    state.camera.position.z += ((mobile ? 6.8 : 6.4) - p * 1.3 - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, mobile ? 0.6 : 0, 0);
  });

  return (
    <group ref={rig}>
      <PaintBucket />
      <Brush />
    </group>
  );
}

export default function PaintJourneyScene() {
  const [reduce, setReduce] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dpr, setDpr] = useState<[number, number]>([1, 1.8]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const mm = window.matchMedia("(max-width: 720px)");
    setMobile(mm.matches);
    const onChange = () => setMobile(mm.matches);
    mm.addEventListener("change", onChange);
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) setDpr([1, 1.4]);
    return () => mm.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 6.4], fov: 44 }} gl={{ antialias: true, powerPreference: "high-performance" }}>
      <color attach="background" args={["#0b0c10"]} />
      <fog attach="fog" args={["#0b0c10", 7, 16]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 7, 6]} intensity={1.3} color="#fff0dd" />
      <pointLight position={[-5, -1, 4]} intensity={55} color="#e0a86a" />
      <pointLight position={[5, 3, -3]} intensity={34} color="#6d8aa8" />
      <Rig reduce={reduce} mobile={mobile} />
      <Sparkles count={70} scale={[11, 8, 7]} size={2.6} speed={reduce ? 0 : 0.28} color="#f0c088" opacity={0.7} />
      <EffectComposer>
        <Bloom intensity={0.85} luminanceThreshold={0.18} luminanceSmoothing={0.9} mipmapBlur radius={0.72} />
      </EffectComposer>
    </Canvas>
  );
}
