"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import DnaModel from "./DnaModel";
import { useThemeMode } from "./useThemeMode";

const DNA_COLORS: Record<string, { a: string; b: string; rung: string }> = {
  warm: { a: "#e0a99a", b: "#d9b783", rung: "#f0e2d0" },
  cinematic: { a: "#a855f7", b: "#4f7bff", rung: "#7dd3fc" },
};
const PETAL_COLORS: Record<string, string[]> = {
  blossom: ["#f8b5cf", "#e7b3ef", "#ffd1e0", "#c9a7e8"],
  cozy: ["#e8b79c", "#d99a7f", "#f0d9c0", "#e6c48f"],
};

function DnaBackdrop({ colors, dark }: { colors: { a: string; b: string; rung: string }; dark: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (g.current) g.current.rotation.y += d * 0.05;
  });
  return (
    <group ref={g} rotation={[0, 0, 0.28]} position={[1.6, 0, 0]} scale={1.05}>
      <DnaModel steps={64} radius={1.8} gap={0.5} angleStep={0.34} tube={0.07} colorA={colors.a} colorB={colors.b} colorRung={colors.rung} emissive={dark ? 0.5 : 0.28} />
    </group>
  );
}

const P_COUNT = 42;
function PetalBackdrop({ colors }: { colors: string[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const data = useMemo(
    () =>
      Array.from({ length: P_COUNT }, () => ({
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 13,
        z: (Math.random() - 0.5) * 6,
        r: Math.random() * Math.PI,
        s: 0.14 + Math.random() * 0.2,
        spin: (Math.random() - 0.5) * 0.5,
        rise: 0.18 + Math.random() * 0.4,
        sway: Math.random() * Math.PI * 2,
      })),
    []
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const c = new THREE.Color();
    data.forEach((_, i) => ref.current!.setColorAt(i, c.set(colors[i % colors.length])));
    if (ref.current.instanceColor) ref.current.instanceColor.needsUpdate = true;
  }, [data, colors]);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    data.forEach((d, i) => {
      d.y += d.rise * delta;
      if (d.y > 7.5) d.y = -7.5;
      dummy.position.set(d.x + Math.sin(t * 0.35 + d.sway) * 0.6, d.y, d.z);
      dummy.rotation.set(d.r + t * d.spin, d.r + t * d.spin * 0.6, d.r);
      dummy.scale.set(d.s, d.s * 0.36, d.s * 0.72);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, P_COUNT]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial roughness={0.5} metalness={0.05} transparent opacity={0.8} />
    </instancedMesh>
  );
}

export default function BackdropScene() {
  const mode = useThemeMode();
  const feminine = mode === "blossom" || mode === "cozy";
  const dark = mode === "cinematic";

  return (
    <Canvas key={mode} dpr={[1, 1.6]} camera={{ position: [0, 0, 9], fov: 44 }} gl={{ antialias: true, alpha: true }} style={{ pointerEvents: "none" }}>
      <ambientLight intensity={feminine ? 0.9 : dark ? 0.4 : 0.7} />
      <directionalLight position={[4, 6, 5]} intensity={0.8} color={dark ? "#dfe7ff" : "#fff3e6"} />
      <pointLight position={[-5, -2, 3]} intensity={dark ? 42 : 22} color={feminine ? "#f6b6cf" : dark ? "#a855f7" : "#d99e90"} />
      {feminine ? (
        <PetalBackdrop colors={PETAL_COLORS[mode]} />
      ) : (
        <DnaBackdrop colors={DNA_COLORS[mode] ?? DNA_COLORS.warm} dark={dark} />
      )}
      {dark && (
        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur radius={0.6} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
