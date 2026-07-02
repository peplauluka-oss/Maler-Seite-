"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/** Langsam rotierende, verformte „Pigment-Welle" in Kupfer/Amber. */
function PigmentWave({ reduce }: { reduce: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const target =
      typeof window !== "undefined"
        ? Math.min(window.scrollY / (window.innerHeight || 1), 1.2)
        : 0;
    scrollRef.current += (target - scrollRef.current) * Math.min(delta * 3, 1);
    const s = scrollRef.current;
    const t = state.clock.elapsedTime;
    if (!reduce) {
      mesh.current.rotation.y = t * 0.12 + s * Math.PI * 0.8;
      mesh.current.rotation.z = Math.sin(t * 0.25) * 0.06;
    }
    mesh.current.position.y = -s * 1.4;
    mesh.current.scale.setScalar(1.5 - s * 0.15);
  });

  return (
    <Float speed={reduce ? 0 : 1.1} rotationIntensity={reduce ? 0 : 0.3} floatIntensity={reduce ? 0 : 0.6}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 24]} />
        <MeshDistortMaterial
          color="#c2854a"
          emissive="#e0a86a"
          emissiveIntensity={0.28}
          roughness={0.28}
          metalness={0.65}
          distort={reduce ? 0.18 : 0.4}
          speed={reduce ? 0 : 1.6}
        />
      </mesh>
    </Float>
  );
}

export default function PaintScene() {
  const [reduce, setReduce] = useState(false);
  const [dpr, setDpr] = useState<[number, number]>([1, 1.6]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    // schwächere Geräte: DPR deckeln
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) setDpr([1, 1.3]);
  }, []);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
      frameloop={reduce ? "demand" : "always"}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#fff0dd" />
      <pointLight position={[-5, -2, 3]} intensity={40} color="#e0a86a" />
      <pointLight position={[5, 3, -4]} intensity={26} color="#6d8aa8" />
      <PigmentWave reduce={reduce} />
      <Sparkles count={60} scale={[9, 7, 6]} size={2.6} speed={reduce ? 0 : 0.3} color="#f0c088" opacity={0.7} />
    </Canvas>
  );
}
