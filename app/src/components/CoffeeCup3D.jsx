import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeCup3D = () => {
  const group = useRef();
  
  // Clear, highly refractive glass material for the cup
  const cupMaterial = new THREE.MeshPhysicalMaterial({ 
    color: '#ffffff',
    transmission: 1.0,    // Fully transmissive glass
    opacity: 1,
    transparent: true,
    roughness: 0.05,      // Very smooth glass
    ior: 1.5,             // Glass Index of Refraction
    thickness: 0.5,       // Refraction thickness
    metalness: 0.0,
    clearcoat: 1.0,
  });

  // Dark amber/black coffee material (more transmissive so it looks like liquid in glass)
  const coffeeMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1a0b04',       // Very dark amber/brown coffee
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.8,      // Light passes through
    thickness: 2.0,
  });

  // Rich, golden-brown frothy crema material
  const cremaMaterial = new THREE.MeshStandardMaterial({
    color: '#d69e63',       // Golden-brown crema
    roughness: 0.9,         // Frothy and matte
    metalness: 0.1,
  });

  useFrame((state) => {
    if (group.current) {
      // Rotate ONLY around the vertical (Y) axis as requested
      group.current.rotation.y += 0.0025;
      
      // If you want it to respond to the mouse moving left/right (X-axis of screen):
      const targetY = (state.mouse.x * Math.PI) / 8;
      group.current.rotation.y += 0.025 * (targetY);
      
      // Keep X and Z completely flat
      group.current.rotation.x = 0;
      group.current.rotation.z = 0;
    }
  });

  return (
    <group ref={group} position={[2, -1, 0]} scale={0.75}>
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
        
        {/* Glass Cup Body (Tapered mug shape) */}
        <mesh position={[0, 1.2, 0]} material={cupMaterial} castShadow receiveShadow>
          {/* radiusTop, radiusBottom, height, radialSegments */}
          <cylinderGeometry args={[1.2, 0.9, 2.0, 64]} />
        </mesh>
        
        {/* Glass Cup Inner Hollow (Carves out the top) */}
        <mesh position={[0, 1.3, 0]} material={cupMaterial} castShadow>
          <cylinderGeometry args={[1.1, 0.8, 2.0, 64]} />
        </mesh>

        {/* Flared Glass Base (Pedestal) */}
        <mesh position={[0, 0.1, 0]} material={cupMaterial} castShadow receiveShadow>
          <cylinderGeometry args={[0.9, 1.0, 0.2, 64]} />
        </mesh>

        {/* Dark Coffee Liquid */}
        <mesh position={[0, 1.15, 0]} material={coffeeMaterial} receiveShadow>
          {/* Matches the inner taper of the cup */}
          <cylinderGeometry args={[1.05, 0.82, 1.6, 64]} />
        </mesh>

        {/* Full Frothy Crema Layer on Top of the Coffee */}
        <mesh position={[0, 1.95, 0]} material={cremaMaterial} receiveShadow>
          <cylinderGeometry args={[1.06, 1.05, 0.05, 64]} />
        </mesh>
        
        {/* Crema Edge Ring to blend it into the glass perfectly */}
        <mesh position={[0, 1.96, 0]} rotation={[Math.PI / 2, 0, 0]} material={cremaMaterial} receiveShadow>
          <torusGeometry args={[1.02, 0.04, 16, 64]} />
        </mesh>

        {/* Glass Cup Handle */}
        <mesh position={[1.15, 1.2, 0]} rotation={[0, 0, -Math.PI / 8]} material={cupMaterial} castShadow receiveShadow>
          {/* radius, tube, radialSegments, tubularSegments, arc */}
          <torusGeometry args={[0.6, 0.18, 32, 64, Math.PI * 1.2]} />
        </mesh>

        {/* Realistic Smoke/Steam Effect */}
        <Smoke />
      </Float>
    </group>
  );
};

// Advanced Steam Effect using wavy transparent planes
const Smoke = () => {
  const smokeGroup = useRef();
  
  // Custom material for soft, wispy steam
  const steamMaterial = new THREE.MeshBasicMaterial({ 
    color: '#ffffff', 
    transparent: true, 
    opacity: 0, 
    depthWrite: false,
    blending: THREE.AdditiveBlending 
  });

  useFrame(({ clock }) => {
    if (smokeGroup.current) {
      const time = clock.getElapsedTime();
      
      smokeGroup.current.children.forEach((child, i) => {
        // Rise up slowly
        const yOffset = (time * 0.4 + i * 0.8) % 3;
        child.position.y = 2.0 + yOffset;
        
        // Sway gently left and right
        child.position.x = Math.sin(time * 1.5 + i) * 0.3;
        child.position.z = Math.cos(time * 1.2 + i) * 0.2;
        
        // Slowly rotate the steam planes
        child.rotation.y = time * 0.2 + i;
        child.rotation.z = Math.sin(time + i) * 0.1;

        // Scale up as it rises
        const scale = 1 + yOffset * 0.5;
        child.scale.setScalar(scale);

        // Fade in at bottom, fade out at top
        if (yOffset < 0.5) {
          child.material.opacity = yOffset * 0.3; // Fade in
        } else {
          child.material.opacity = Math.max(0, (3 - yOffset) / 2.5) * 0.15; // Fade out
        }
      });
    }
  });

  return (
    <group ref={smokeGroup}>
      {/* Generate 5 steam "puffs" */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, 2, 0]} material={steamMaterial.clone()}>
          <sphereGeometry args={[0.3, 16, 16]} />
        </mesh>
      ))}
    </group>
  );
};

export default CoffeeCup3D;
