import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HeartShape = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1);

  // Анимация сердца
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale);
    }
    setScale(1 + 0.1 * Math.sin(Date.now() * 0.002));
  });

  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0.5);
  heartShape.bezierCurveTo(1, 2, 3, 1.5, 3, 0);
  heartShape.bezierCurveTo(3, -1.5, 1, -1.5, 0, -3);
  heartShape.bezierCurveTo(-2, -1.5, -3, -1.5, -3, 0);
  heartShape.bezierCurveTo(-3, 1.5, -1, 1.5, 0, 0);

  return (
    <mesh ref={meshRef} position={[0, 2, -8]} {...props}>
      <extrudeGeometry args={[heartShape, { depth: 0.4, bevelEnabled: false }]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default function HeartModel() {
    return (
      <Canvas style={{ flex: 1, width: '100%'}}>
        <ambientLight />
        <pointLight position={[0, 1, -8]} />
        <HeartShape />
      </Canvas>
    );
  }