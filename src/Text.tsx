import React, { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import sampleRegularFont from './fonts/sample_regular.typeface.json';

function DrawLine() {
  const renderRef = useRef<HTMLDivElement>(null);
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  );

  camera.position.set(0, 0, 600);
  camera.lookAt(0, 0, 0);

  const loader = new THREE.FontLoader();

  const font = loader.parse(sampleRegularFont);

  const geometry = new THREE.TextGeometry('hello world!', {
    font,
    size: 20,
    height: 1,
  });
  const material = new THREE.MeshBasicMaterial({ color: 0x035b59 });
  const text = new THREE.Mesh(geometry, material);
  scene.add(text);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    // text.rotation.x += 0.01;
    renderer.render(scene, camera);
  }, []);

  useEffect(() => {
    renderRef.current?.appendChild(renderer.domElement);

    animate();
  }, []);

  return <div ref={renderRef}></div>;
}

export default DrawLine;
