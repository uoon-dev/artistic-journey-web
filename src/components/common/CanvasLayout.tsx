import React from 'react';
import { Canvas } from '@react-three/fiber';

interface Props {
  children: React.ReactNode;
}

function CanvasLayout({ children }: Props) {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [0, 0, 3] }}>
      {children}
    </Canvas>
  );
}

export default CanvasLayout;
