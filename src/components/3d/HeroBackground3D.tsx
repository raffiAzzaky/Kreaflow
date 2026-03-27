"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleData {
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
    scale: number;
    rotXSpeed: number;
    rotYSpeed: number;
    rotZSpeed: number;
    floatSpeed: number;
    floatOffset: number;
}

function InstancedShapes() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const count = 20; // 5 kolom x 4 baris

    // State Management: Inisialisasi data posisi HANYA di dalam useEffect menggunakan useState.
    // Ini menghindari Hydration Error karena nilai acak (Math.random) tereksekusi secara berbeda
    // di dalam SSR versus Client saat menggunakan useMemo.
    const [particles, setParticles] = useState<ParticleData[]>([]);

    useEffect(() => {
        const data: ParticleData[] = [];

        // Spesifikasi Distribusi (Anti-Clumping) dengan Sistem Kuadran / Grid.
        // Membagi ruang menjadi grid agar tidak menumpuk di 0,0,0
        const rows = 4;
        const cols = 5;
        const spacingX = 8;
        const spacingY = 6;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            // Menentukan base position setiap grid
            const baseX = (col - (cols - 1) / 2) * spacingX;
            const baseY = (row - (rows - 1) / 2) * spacingY;

            // Memberikan nilai acak (jitter) tapi tetap tertahan di batasan grid masing-masing
            const x = baseX + (Math.random() - 0.5) * spacingX * 0.8;
            const y = baseY + (Math.random() - 0.5) * spacingY * 0.8;

            // Distribusi Z di rentang -10 hingga 2
            const z = -10 + Math.random() * 12;

            data.push({
                x, y, z,
                // Random rotasi awal
                rx: Math.random() * Math.PI * 2,
                ry: Math.random() * Math.PI * 2,
                rz: Math.random() * Math.PI * 2,
                // Skala antara 0.5 hingga 2.5
                scale: 0.5 + Math.random() * 2,
                // Kecepatan putaran dan melayang
                rotXSpeed: (Math.random() - 0.5) * 0.3,
                rotYSpeed: (Math.random() - 0.5) * 0.3,
                rotZSpeed: (Math.random() - 0.5) * 0.3,
                floatSpeed: 0.5 + Math.random() * 1.5,
                floatOffset: Math.random() * Math.PI * 2,
            });
        }
        setParticles(data);
    }, []);

    const { geometry, material } = useMemo(() => {
        // Spesifikasi Teknis Geometri (Astroid Shape)
        const shape = new THREE.Shape();
        // Koordinat yang diminta: (0, 1), (0.2, 0.2), (1, 0), (0.2, -0.2), (0, -1), (-0.2, -0.2), (-1, 0), (-0.2, 0.2)
        shape.moveTo(0, 1);
        shape.quadraticCurveTo(0.2, 0.2, 1, 0);
        shape.quadraticCurveTo(0.2, -0.2, 0, -1);
        shape.quadraticCurveTo(-0.2, -0.2, -1, 0);
        shape.quadraticCurveTo(-0.2, 0.2, 0, 1);

        const extrudeSettings = {
            depth: 0.1,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 2,
        };

        const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geo.center(); // Memastikan object pivot berada di tengah

        // Material murni yang mensupport gradasi pantulan melalui lighting tinggi
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#152A47"),
            emissive: new THREE.Color("#325E95"),
            emissiveIntensity: 0.2,
            metalness: 0.9,     // Nilai sangat tinggi seperti kaca logam (metallic shine)
            roughness: 0.15,    // Mulus sempurna agar cahaya memantul jelas
        });

        return { geometry: geo, material: mat };
    }, []);

    // Resource Cleanup: Wajib panggil dispose saat unmount.
    useEffect(() => {
        return () => {
            geometry.dispose();
            material.dispose();
            if (meshRef.current) {
                meshRef.current.dispose();
            }
        };
    }, [geometry, material]);

    // Object3D dummy yang hanya diinisialisasi sekali karena penggunaan useMemo tanpa dependensi.
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        // Pastikan partikel sudah selesai digenerate dari useEffect
        if (!meshRef.current || particles.length === 0) return;

        // Mencegah array out of bounds
        const renderCount = Math.min(particles.length, count);
        const time = state.clock.elapsedTime;

        for (let i = 0; i < renderCount; i++) {
            const p = particles[i];

            // Mengupdate rotasi di memori internal variabel
            p.rx += p.rotXSpeed * delta;
            p.ry += p.rotYSpeed * delta;
            p.rz += p.rotZSpeed * delta;

            // Menghitung Floating Y-Axis via Math.sin()
            const floatY = Math.sin(time * p.floatSpeed + p.floatOffset) * 0.4;

            dummy.position.set(p.x, p.y + floatY, p.z);
            dummy.rotation.set(p.rx, p.ry, p.rz);
            dummy.scale.set(p.scale, p.scale, p.scale);
            dummy.updateMatrix();

            // Update instanced matrix
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }

        // Memberitahu renderer bahwa matrix sudah berubah dan bersiap untuk frame berikutnya
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    // Tunda rendering instanced mesh hingga inisiasi particles selesai
    if (particles.length === 0) return null;

    return (
        <instancedMesh
            ref={meshRef}
            args={[geometry, material, count]}
            dispose={null} // Disposing diatur oleh strict useEffect di atas
        />
    );
}

export default function HeroBackground3D() {
    return (
        // Interaksi UI: Tambahkan pointer-events-none agar tidak menghalangi tombol "Get Started"
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-[#02050f] pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                dpr={[1, 1.5]}
                // Canvas alpha: true memastikan background warna dark CSS tembus ke belakang view
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <ambientLight intensity={0.4} color="#ffffff" />

                {/* Lighting Specification: Menggunakan intensitas tinggi untuk efek metallic shine */}
                <pointLight position={[10, 15, 10]} intensity={45} color="#00fbff" /> {/* Cyan */}
                <pointLight position={[-10, 0, 5]} intensity={50} color="#4488ff" />  {/* Blue */}
                <pointLight position={[0, -10, -5]} intensity={35} color="#ffffff" /> {/* White */}

                <InstancedShapes />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02050f] opacity-80 pointer-events-none" />
        </div>
    );
}