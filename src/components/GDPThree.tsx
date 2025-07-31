import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
  const { scene } = useGLTF('/models/GDP.glb');
  return <primitive object={scene} scale={0.3} position={[8.5, -2, 0]} rotation={[Math.PI, 0, 0]} />;
};

const GDPThree: React.FC = () => {
  const maxRotationAngle = (10 * Math.PI) / 180;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas 
        style={{ height: '100%', width: '100%', background: 'transparent' }}
        camera={{ position: [0, 0, 20], fov: 100 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false
        }}
        onCreated={() => {
          console.log('Canvas created successfully');
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        <Suspense >
          <Model />
        </Suspense>
        
        <OrbitControls 
          autoRotate 
          enableZoom={false}
          enablePan={false}
          minDistance={3}
          maxDistance={15}
          minPolarAngle={Math.PI / 2 - maxRotationAngle}
          maxPolarAngle={Math.PI / 2 + maxRotationAngle} 
          minAzimuthAngle={-maxRotationAngle}
          maxAzimuthAngle={maxRotationAngle} 
        />
      </Canvas>
    </div>
  );
};

if (typeof window !== 'undefined') {
  useGLTF.preload('/models/GDP.glb');
}

export default GDPThree;
