import * as React from 'react';
import { ArcCurve, Mesh, TextureLoader, Vector2 } from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, SpriteMaterialProps } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random';
const Sun = (props: JSX.IntrinsicElements['group']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <group>
      <mesh>
        <sphereGeometry args={[2, 100, 100]} />
        <meshPhongMaterial color="#ccc" />
      </mesh>
      <lineLoop></lineLoop>
    </group>
  );
};
// 金星
const Venus = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 水星
const Mercury = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 木星
const Jupiter = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 土星
const Saturn = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 火星
const Mars = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 地球
const Earth = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 天王星
const Uranus = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};
// 海王星
const Neptune = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.z += 0.006));
  return (
    <mesh rotation={[0, 10, 120]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshPhongMaterial color="#ccc" />
    </mesh>
  );
};

const Solar = () => {
  return (
    <Canvas>
      <ambientLight intensity={3.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={8} />
      <pointLight position={[0, 0, 0]} intensity={8} />
      <Sun position={[0, -17.5, 0]} />
      <Neptune />
    </Canvas>
  );
};

export default Solar;
