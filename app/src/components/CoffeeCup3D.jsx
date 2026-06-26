import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeCup3D = () => {
  const group = useRef();
  
  // Create a procedural coffee cup since we don't have a 3D model file
  const cupMaterial = new THREE.MeshStandardMaterial({ 
    color: '#F5F5F0', // Cream cup
    roughness: 0.2,
    metalness: 0.1,
  });

  const coffeeMaterial = new THREE.MeshStandardMaterial({
    color: '#3E2723', // Dark coffee
    roughness: 0.8,
  });

  useFrame((state) => {
    if (group.current) {
      // Idle slow rotation
      group.current.rotation.y += 0.002;
      
      // Parallax effect on mouse move
      const targetX = (state.mouse.x * Math.PI) / 10;
      const targetY = (state.mouse.y * Math.PI) / 10;
      
      group.current.rotation.x += 0.02 * (targetY - group.current.rotation.x);
      group.current.rotation.z += 0.02 * (targetX - group.current.rotation.z);
    }
  });

  return (
    <group ref={group} position={[2, -1, 0]} scale={1.5}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Cup Body */}
        <mesh position={[0, 1, 0]} material={cupMaterial} castShadow receiveShadow>
          <cylinderGeometry args={[1.2, 0.9, 2, 32]} />
        </mesh>
        
        {/* Cup Inner (Hollow out the top) */}
        <mesh position={[0, 1.05, 0]} material={cupMaterial} castShadow>
          <cylinderGeometry args={[1.1, 0.8, 2, 32]} />
        </mesh>

        {/* Coffee Liquid */}
        <mesh position={[0, 1.8, 0]} material={coffeeMaterial} receiveShadow>
          <cylinderGeometry args={[1.12, 1.12, 0.1, 32]} />
        </mesh>

        {/* Cup Handle */}
        <mesh position={[1.2, 1, 0]} rotation={[0, 0, -Math.PI / 8]} material={cupMaterial} castShadow receiveShadow>
          <torusGeometry args={[0.5, 0.15, 16, 32, Math.PI]} />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.1, 0]} material={cupMaterial} castShadow receiveShadow>
          <cylinderGeometry args={[2, 1.5, 0.2, 32]} />
        </mesh>
        <mesh position={[0, -0.05, 0]} material={cupMaterial} receiveShadow>
           <cylinderGeometry args={[1.8, 1.8, 0.2, 32]} />
        </mesh>

        {/* Steam Particles (Simplified) */}
        <Steam />
      </Float>
    </group>
  );
};

// Simple steam effect using floating spheres that fade
const Steam = () => {
  const steamGroup = useRef();
  
  useFrame(({ clock }) => {
    if (steamGroup.current) {
      const time = clock.getElapsedTime();
      steamGroup.current.children.forEach((child, i) => {
        child.position.y = 2 + (time * 0.5 + i) % 2;
        child.position.x = Math.sin(time + i) * 0.2;
        child.material.opacity = 1 - (child.position.y - 2) / 2;
        child.scale.setScalar(1 + (child.position.y - 2) * 0.5);
      });
    }
  });

  return (
    <group ref={steamGroup}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, 2 + i * 0.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.5} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
};

export default CoffeeCup3D;
