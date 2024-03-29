import React, { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';

function DrawLine() {
  const renderRef = useRef<HTMLDivElement>(null);
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );

  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  points.push(new THREE.Vector3(-10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  scene.add(line);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    // line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    renderer.render(scene, camera);
  }, []);

  useEffect(() => {
    renderRef.current?.appendChild(renderer.domElement);

    animate();
  }, []);

  return <div ref={renderRef}></div>;
}

export default DrawLine;
