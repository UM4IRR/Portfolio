"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Icosahedron, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle rotation based on time
    groupRef.current.rotation.x += 0.001;
    groupRef.current.rotation.y += 0.002;
    
    // Subtle mouse influence
    groupRef.current.rotation.x += (state.pointer.y * 0.1 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (state.pointer.x * 0.1 - groupRef.current.rotation.y) * 0.05;
    
    // Gentle bobbing motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Central floating icosahedron */}
      <Icosahedron args={[1.2, 4]} scale={0.8}>
        <MeshWobbleMaterial
          color="#14b8a6"
          factor={0.2}
          speed={1.5}
          wireframe={false}
          metalness={0.7}
          roughness={0.3}
        />
      </Icosahedron>

      {/* Orbiting elements */}
      <group>
        <mesh position={[3, 0, 0]} scale={0.4}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#0d9488"
            metalness={0.6}
            roughness={0.4}
            emissive="#14b8a6"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        <mesh position={[-3, 0, 0]} scale={0.3}>
          <octahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.6}
            roughness={0.4}
            emissive="#06b6d4"
            emissiveIntensity={0.1}
          />
        </mesh>

        <mesh position={[0, 3, 2]} scale={0.35}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#14b8a6"
            metalness={0.5}
            roughness={0.5}
            emissive="#14b8a6"
            emissiveIntensity={0.15}
          />
        </mesh>
      </group>
    </group>
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
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={[isLight ? "#e9eef8" : "#000000"]} />
        
        {/* Professional lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 8, 6]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, -8, -8]} intensity={0.6} color="#14b8a6" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#06b6d4" distance={20} />
        
        <Environment preset="city" />
        <FloatingGeometry />
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, transparent, var(--scene-overlay-end))`,
        }}
      />
    </div>
  );
}
