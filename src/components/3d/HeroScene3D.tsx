"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvasTest = document.createElement("canvas");
      const gl = canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl");
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    let animationFrameId: number;
    let isVisible = true;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08090c);
    scene.fog = new THREE.FogExp2(0x08090c, 0.045);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(3.8, 2.2, 5.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0x475569, 2.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.2);
    directionalLight.position.set(5, 10, 6);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Front warm illumination
    const frontLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
    frontLight.position.set(-4, 6, 8);
    scene.add(frontLight);

    // Saffron accent light from the side
    const saffronRimLight = new THREE.PointLight(0xff7700, 4.0, 14);
    saffronRimLight.position.set(-3, 3, 2);
    scene.add(saffronRimLight);

    // ROAD SURFACE
    const roadGroup = new THREE.Group();
    const roadGeometry = new THREE.PlaneGeometry(8, 60, 1, 60);
    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x181e29,
      roughness: 0.8,
      metalness: 0.2,
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.receiveShadow = true;
    roadGroup.add(road);

    // Dashed center road stripes
    const dashCount = 20;
    const dashMeshes: THREE.Mesh[] = [];
    const dashMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    for (let i = 0; i < dashCount; i++) {
      const dashGeo = new THREE.PlaneGeometry(0.18, 1.4);
      const dash = new THREE.Mesh(dashGeo, dashMaterial);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, 0.01, -25 + i * 3);
      roadGroup.add(dash);
      dashMeshes.push(dash);
    }

    // Outer road shoulder borders
    const borderMaterial = new THREE.MeshBasicMaterial({ color: 0x475569 });
    const leftBorder = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 60), borderMaterial);
    leftBorder.rotation.x = -Math.PI / 2;
    leftBorder.position.set(-3.6, 0.01, 0);
    roadGroup.add(leftBorder);

    const rightBorder = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 60), borderMaterial);
    rightBorder.rotation.x = -Math.PI / 2;
    rightBorder.position.set(3.6, 0.01, 0);
    roadGroup.add(rightBorder);

    scene.add(roadGroup);

    // REALISTIC WHITE SWIFT CAR MODEL
    const carGroup = new THREE.Group();

    // Body Paint: Crisp Pearl White
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Crisp White Swift Paint
      metalness: 0.25,
      roughness: 0.18,
    });

    const saffronDecalMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.5,
      roughness: 0.3,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0a101d,
      metalness: 0.2,
      roughness: 0.05,
      transmission: 0.8,
      transparent: true,
      opacity: 0.92,
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.1,
    });

    // Main Chassis lower body
    const lowerBodyGeo = new THREE.BoxGeometry(1.8, 0.45, 3.8);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyMaterial);
    lowerBody.position.y = 0.52;
    lowerBody.castShadow = true;
    carGroup.add(lowerBody);

    // Saffron side accent line
    const decalGeo = new THREE.BoxGeometry(1.82, 0.06, 3.6);
    const decal = new THREE.Mesh(decalGeo, saffronDecalMaterial);
    decal.position.y = 0.5;
    carGroup.add(decal);

    // Cabin / Greenhouse (roof and windows)
    const cabinGeo = new THREE.BoxGeometry(1.5, 0.45, 2.0);
    const cabin = new THREE.Mesh(cabinGeo, glassMaterial);
    cabin.position.set(0, 0.92, -0.2);
    cabin.castShadow = true;
    carGroup.add(cabin);

    // Roof top panel
    const roofGeo = new THREE.BoxGeometry(1.48, 0.06, 1.9);
    const roof = new THREE.Mesh(roofGeo, bodyMaterial);
    roof.position.set(0, 1.16, -0.2);
    carGroup.add(roof);

    // Roof Taxi Light Bar (Har Har Taxi branding glow)
    const taxiLightGeo = new THREE.BoxGeometry(0.7, 0.12, 0.25);
    const taxiLightMat = new THREE.MeshStandardMaterial({
      color: 0xff8800,
      emissive: 0xff6600,
      emissiveIntensity: 1.8,
      roughness: 0.2,
    });
    const taxiLight = new THREE.Mesh(taxiLightGeo, taxiLightMat);
    taxiLight.position.set(0, 1.25, -0.2);
    carGroup.add(taxiLight);

    // Front Headlights
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.1), headlightMat);
    headlightL.position.set(-0.65, 0.55, 1.91);
    const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.1), headlightMat);
    headlightR.position.set(0.65, 0.55, 1.91);
    carGroup.add(headlightL);
    carGroup.add(headlightR);

    // Headlight Spotlights projecting forward
    const spotL = new THREE.SpotLight(0xfffaed, 8, 16, Math.PI / 7, 0.4);
    spotL.position.set(-0.65, 0.55, 1.9);
    spotL.target.position.set(-0.65, 0, 8);
    scene.add(spotL);
    scene.add(spotL.target);

    const spotR = new THREE.SpotLight(0xfffaed, 8, 16, Math.PI / 7, 0.4);
    spotR.position.set(0.65, 0.55, 1.9);
    spotR.target.position.set(0.65, 0, 8);
    scene.add(spotR);
    scene.add(spotR.target);

    // Rear Taillights (Red LED glow)
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xff1122,
      emissive: 0xee0011,
      emissiveIntensity: 2.0,
    });
    const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.08), taillightMat);
    taillightL.position.set(-0.65, 0.58, -1.91);
    const taillightR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.08), taillightMat);
    taillightR.position.set(0.65, 0.58, -1.91);
    carGroup.add(taillightL);
    carGroup.add(taillightR);

    // Front Grille & Chrome trims
    const grille = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 0.05), chromeMaterial);
    grille.position.set(0, 0.45, 1.92);
    carGroup.add(grille);

    // WHEELS
    const wheelGroup = new THREE.Group();
    const wheels: THREE.Mesh[] = [];
    const tireGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x1c1e24,
      roughness: 0.9,
    });
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.9,
      roughness: 0.2,
    });

    const wheelPositions = [
      [-0.92, 0.34, 1.15],
      [0.92, 0.34, 1.15],
      [-0.92, 0.34, -1.15],
      [0.92, 0.34, -1.15],
    ];

    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(tireGeo, tireMat);
      wheel.position.set(pos[0], pos[1], pos[2]);
      wheel.castShadow = true;

      // Rim
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.27, 8), rimMat);
      rim.rotateZ(Math.PI / 2);
      wheel.add(rim);

      carGroup.add(wheel);
      wheels.push(wheel);
    });

    carGroup.position.set(0.7, 0, 0.8);
    carGroup.rotation.y = -Math.PI * 0.08;
    scene.add(carGroup);

    // FLOATING JABALPUR WAYPOINT MARKERS ON HIGHWAY SHOULDER
    const waypointsGroup = new THREE.Group();
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0xff7a00,
      emissive: 0xff5500,
      emissiveIntensity: 0.8,
    });
    const waypointPositions = [-18, -8, 2, 12];
    const waypoints: THREE.Mesh[] = [];

    waypointPositions.forEach((z) => {
      const marker = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.2, 8), markerMat);
      marker.position.set(-3.7, 1.1, z);
      waypointsGroup.add(marker);
      waypoints.push(marker);
    });
    scene.add(waypointsGroup);

    // MOUSE INTERACTION
    let targetCameraX = 3.8;
    let targetCameraY = 2.2;
    let targetCarSteer = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetCameraX = 3.8 + normX * 0.7;
      targetCameraY = 2.2 + normY * 0.4;
      targetCarSteer = normX * 0.05;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // INTERSECTION OBSERVER TO PAUSE ANIMATION WHEN OUT OF SIGHT
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    setIsLoaded(true);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    const speed = 14; // simulated speed km units

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();

      // Smooth camera motion
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.lookAt(0, 0.6, 0);

      // Car gentle suspension float & steer reaction
      const time = clock.getElapsedTime();
      carGroup.position.y = Math.sin(time * 6) * 0.015;
      carGroup.rotation.y = -Math.PI * 0.08 + targetCarSteer;
      carGroup.rotation.z = Math.sin(time * 5) * 0.008;

      // Wheel rotation
      wheels.forEach((w) => {
        w.rotation.x += speed * delta;
      });

      // Animate road dashed lines
      dashMeshes.forEach((dash) => {
        dash.position.z -= speed * delta * 0.5;
        if (dash.position.z < -25) {
          dash.position.z += 30;
        }
      });

      // Animate shoulder markers
      waypoints.forEach((wp) => {
        wp.position.z -= speed * delta * 0.5;
        if (wp.position.z < -25) {
          wp.position.z += 30;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[520px] overflow-hidden rounded-2xl">
      {/* 3D WebGL Canvas Mount */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Fallback if WebGL unavailable */}
      {!webGlSupported && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal-900 text-center p-6 border border-charcoal-700/50 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center text-saffron-400 mb-3">
            🚕
          </div>
          <h4 className="text-lg font-bold text-white font-display">
            Har Har Taxi Services &bull; Jabalpur
          </h4>
          <p className="text-xs text-slate-400 max-w-sm mt-1">
            Premium Executive Sedan &bull; Clean AC Fleet &bull; Dumna Airport & Kanha Transfers
          </p>
        </div>
      )}

      {/* Subtle overlay elements */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-transparent hidden lg:block" />

      {/* Floating 3D status badge */}
      <div className="absolute bottom-4 left-4 sm:left-6 pointer-events-none z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-charcoal-700/80 text-xs text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-medium text-slate-200">Live Active Fleet &bull; Jabalpur MP</span>
      </div>

      {/* Distance tag HUD indicator */}
      <div className="absolute top-4 right-4 pointer-events-none z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-charcoal-900/75 backdrop-blur-md border border-saffron-500/30 text-[11px] text-saffron-300">
        <span>📍 NH-30 Expressway Corridor</span>
      </div>
    </div>
  );
}
