"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo, Suspense, useState } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

// Mouse tracker for reactive movement
function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Store mouse position in a way that other components can access
  useFrame((state) => {
    const mouse = state.mouse;
    setMousePosition({ x: mouse.x, y: mouse.y });
    // Store in state for other components to use
    (state as unknown as { mousePosition: { x: number; y: number } }).mousePosition = mousePosition;
  });

  return null;
}

// Simplified Orb component
function Orb({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const originalPosition = useRef(new Vector3(...position));
  
  useFrame((state) => {
    if (meshRef.current) {
      const mouse = state.mouse;
      const time = state.clock.elapsedTime;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;
      
      // Mouse reactivity
      const mouseInfluence = 0.3;
      meshRef.current.position.x = originalPosition.current.x + mouse.x * mouseInfluence;
      meshRef.current.position.y = originalPosition.current.y + mouse.y * mouseInfluence;
      
      // Floating movement
      meshRef.current.position.y += Math.sin(time + position[0]) * 0.002;
      meshRef.current.position.x += Math.cos(time + position[1]) * 0.001;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color={color}
          transparent 
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Simplified Glow component
function Glow({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const originalPosition = useRef(new Vector3(...position));
  
  useFrame((state) => {
    if (meshRef.current) {
      const mouse = state.mouse;
      const time = state.clock.elapsedTime;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.01;
      
      // Mouse reactivity
      const mouseInfluence = 0.2;
      meshRef.current.position.x = originalPosition.current.x + mouse.x * mouseInfluence;
      meshRef.current.position.y = originalPosition.current.y + mouse.y * mouseInfluence;
      
      // Pulsing effect
      const pulse = Math.sin(time * 1.5) * 0.05;
      meshRef.current.scale.setScalar(scale + pulse);
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

// Simplified Particle component
function Particle({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const originalPosition = useRef(new Vector3(...position));
  
  useFrame((state) => {
    if (meshRef.current) {
      const mouse = state.mouse;
      const time = state.clock.elapsedTime;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.01;
      
      // Mouse reactivity
      const mouseInfluence = 0.4;
      meshRef.current.position.x = originalPosition.current.x + mouse.x * mouseInfluence;
      meshRef.current.position.y = originalPosition.current.y + mouse.y * mouseInfluence;
      
      // Floating movement
      meshRef.current.position.y += Math.sin(time * 2 + position[0]) * 0.002;
      meshRef.current.position.x += Math.cos(time * 1.5 + position[1]) * 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}



// Simplified star field
function StarField() {
  const starsRef = useRef<Mesh>(null);
  
  const starPositions = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      
      // Subtle twinkling
      const material = starsRef.current.material as unknown as { size: number };
      material.size = 0.08 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={starPositions}
          itemSize={3}
          args={[starPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.08} transparent opacity={0.6} />
    </points>
  );
}

// Simplified 3D Scene with minimal objects
function Scene() {
  const galaxyObjects = useMemo(() => [
    // Blue orbs
    { type: "orb", position: [-6, 4, -4], scale: 0.6, color: "#4285f4" },
    { type: "orb", position: [5, -3, -6], scale: 0.8, color: "#1a73e8" },
    { type: "orb", position: [-3, -5, 2], scale: 0.5, color: "#0d47a1" },
    
    // Purple orbs
    { type: "orb", position: [4, 6, -3], scale: 0.7, color: "#9c27b0" },
    { type: "orb", position: [-7, -2, 4], scale: 0.4, color: "#673ab7" },
    
    // Glowing elements
    { type: "glow", position: [-4, 7, -5], scale: 0.8, color: "#3f51b5" },
    { type: "glow", position: [6, -6, 3], scale: 0.6, color: "#5e35b1" },
    
    // Particles
    { type: "particle", position: [-1, -3, -3], scale: 0.2, color: "#7986cb" },
    { type: "particle", position: [3, 8, -2], scale: 0.15, color: "#9575cd" },
    { type: "particle", position: [-8, 1, 2], scale: 0.18, color: "#64b5f6" },
  ], []);

  return (
    <>
      {/* Soft galaxy lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} intensity={0.5} color="#4285f4" distance={40} />
      <pointLight position={[-8, -8, -8]} intensity={0.4} color="#9c27b0" distance={35} />
      <pointLight position={[0, 0, 15]} intensity={0.3} color="#673ab7" distance={25} />
      
      {/* Mouse tracker */}
      <MouseTracker />
      
      {/* Star field background */}
      <StarField />
      
      {/* Galaxy objects */}
      {galaxyObjects.map((obj, index) => {
        const position = obj.position as [number, number, number];
        const scale = obj.scale;
        const color = obj.color;
        
        switch (obj.type) {
          case "orb":
            return (
              <Orb
                key={`orb-${index}`}
                position={position}
                scale={scale}
                color={color}
              />
            );
          case "glow":
            return (
              <Glow
                key={`glow-${index}`}
                position={position}
                scale={scale}
                color={color}
              />
            );
          case "particle":
            return (
              <Particle
                key={`particle-${index}`}
                position={position}
                scale={scale}
                color={color}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

// Fallback component for when 3D fails to load
function Fallback() {
  return null;
}

// Main component with performance optimizations and error handling
export default function FloatingObjects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          gl={{ 
            alpha: true, 
            antialias: false, // Disable for better performance on mobile
            powerPreference: "high-performance",
            stencil: false,
            depth: true // Enable for proper 3D object rendering
          }}
          style={{ background: "transparent" }}
          frameloop="always" // Continuous animation
          performance={{ min: 0.3 }} // More aggressive performance scaling
          dpr={[1, 2]} // Limit pixel ratio for performance
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}