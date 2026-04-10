"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ParticleBackground({ count = 2000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points positions={positions} ref={pointsRef}>
      <PointMaterial
        transparent
        color="#14b8a6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GridBackground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#14b8a6"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

export default function Scene3D() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      setIsLight(root.getAttribute("data-theme") === "light");
    };
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={[isLight ? "#f8fafc" : "#020617"]} />
        
        <ambientLight intensity={0.5} />
        <PointLightBackground isLight={isLight} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <ParticleBackground />
        </Float>
        
        <GridBackground />
      </Canvas>
      
      {/* Narrative Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-radial-[at_50%_50%] from-transparent via-transparent to-background/80" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-background" />
    </div>
  );
}

function PointLightBackground({ isLight }: { isLight: boolean }) {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (!lightRef.current) return;
    lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
    lightRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.5) * 5;
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={isLight ? 0.8 : 1.5}
      color="#14b8a6"
      distance={15}
    />
  );
}

