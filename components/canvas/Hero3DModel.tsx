import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from './CanvasLoader';

const Hero3DModel = () => {
  const model = useGLTF('/3dModels/laptopModel/scene.gltf');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 640');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight position={[10, 10, 10]} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.8 : 0.9}
        position={[0, -2, 2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputeModel = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [20, 5, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          reverseOrbit
          autoRotate={true}
          autoRotateSpeed={6}
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hero3DModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputeModel;

/* const TempComponten = () => {
  return <></>;
};

export default TempComponten;
 */
