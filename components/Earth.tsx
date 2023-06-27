import * as React from 'react';
import { Mesh, TextureLoader, Vector2 } from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, SpriteMaterialProps } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
const Box = (props: JSX.IntrinsicElements['group']) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.z += 0.0006));

  const spriteMaterial: SpriteMaterialProps = {
    map: useLoader(TextureLoader, '/texture/earth-glow.png'),
    transparent: true,
    opacity: 0.4
  };

  return (
    <group {...props}>
      <mesh onPointerOver={event => hover(true)} onPointerOut={event => hover(false)} rotation={[0, 10, 120]}>
        <sphereGeometry args={[15, 3000, 3000]} />
        <meshPhongMaterial
          map={useLoader(TextureLoader, '/texture/earth_diff.webp')}
          specularMap={useLoader(TextureLoader, '/texture/earth_clouds.webp')}
        />
      </mesh>
      <mesh ref={ref} onPointerOver={event => hover(true)} onPointerOut={event => hover(false)} rotation={[0, 120, 0]}>
        <sphereGeometry args={[15.08, 3000, 3000]} />
        <meshPhongMaterial
          map={useLoader(TextureLoader, '/texture/earth_clouds.webp')}
          transparent={true}
          opacity={0.4}
        />
      </mesh>
      <sprite scale={20} position={[0, 7.2, 1.7]}>
        <spriteMaterial {...spriteMaterial}></spriteMaterial>
      </sprite>
    </group>
  );
};

const Stars = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 20 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 410;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const Earth = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, -17.5, 0]} />
      <Stars />
    </Canvas>
  );
};

export default Earth;
