import React, { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Cube() {
  const renderRef = useRef<HTMLDivElement>(null);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }, []);

  useEffect(() => {
    renderRef.current?.appendChild(renderer.domElement);
    animate();
  }, []);

  return <div ref={renderRef}></div>;
}

export default Cube;
