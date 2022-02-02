import React, { useRef } from 'react';
import * as THREE from 'three';
import vertex from 'containers/flame/shaders/ImageFire/vertex.glsl';
import fragment from 'containers/flame/shaders/ImageFire/fragment.glsl';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, ShaderMaterial } from 'three';

function FlameMesh() {
  const ref = useRef<Mesh>(null);
  const [noiseTexture, texture01, texture02] = useLoader(THREE.TextureLoader, [
    '/imgs/noise.png',
    '/imgs/flame/image01.jpg',
    '/imgs/flame/image02.jpg',
  ]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const material = ref?.current?.material as ShaderMaterial;
    material.uniforms.time.value = time;
  });

  return (
    <>
      <mesh ref={ref}>
        <shaderMaterial
          ref={ref}
          uniforms={{
            time: { value: 0 },
            progress: { value: 0 },
            resolution: { value: new THREE.Vector4() },
            noiseTexture: { value: noiseTexture },
            texture01: { value: texture01 },
            texture02: { value: texture02 },
          }}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
        <planeGeometry args={[3, 3, 1]} />
      </mesh>
    </>
  );
}

export default FlameMesh;
