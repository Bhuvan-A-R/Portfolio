
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const WireframeShape: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const getDimensions = () => {
      const size = Math.min(window.innerWidth * 0.8, 600);
      return { width: size, height: size };
    };

    let { width, height } = getDimensions();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x4f46e5, 
      transparent: true, 
      opacity: 0.5,
      linewidth: 1
    });
    
    const icosahedron = new THREE.LineSegments(wireframe, material);
    scene.add(icosahedron);

    camera.position.z = 5;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const onResize = () => {
      const dims = getDimensions();
      width = dims.width;
      height = dims.height;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const speed = hoverRef.current ? 0.02 : 0.005;
      icosahedron.rotation.x += speed;
      icosahedron.rotation.y += speed;

      icosahedron.rotation.x += mousePos.current.y * 0.005;
      icosahedron.rotation.y += mousePos.current.x * 0.005;

      renderer.render(scene, camera);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="flex items-center justify-center pointer-events-none opacity-40 mix-blend-screen overflow-hidden"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    />
  );
};
