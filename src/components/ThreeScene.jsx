import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

function GridLines() {
    const linesRef = useRef()
    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.y = state.clock.elapsedTime * 0.03
        }
    })
    const gridPoints = useMemo(() => {
        const pts = []
        for (let i = -5; i <= 5; i++) {
            pts.push(new THREE.Vector3(i * 2, -3, -10), new THREE.Vector3(i * 2, 3, -10))
            pts.push(new THREE.Vector3(-10, i * 0.6, -10), new THREE.Vector3(10, i * 0.6, -10))
        }
        return pts
    }, [])

    return (
        <lineSegments ref={linesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={gridPoints.length}
                    array={new Float32Array(gridPoints.flatMap(p => [p.x, p.y, p.z]))}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color="#00f5c4" transparent opacity={0.08} />
        </lineSegments>
    )
}

function NeonSphere({ position, color, scale, distort }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.2
            ref.current.rotation.y = state.clock.elapsedTime * 0.3
        }
    })
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere ref={ref} args={[1, 128, 128]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={1.5}
                    roughness={0}
                    metalness={0.9}
                    transparent
                    opacity={0.5}
                    wireframe={false}
                />
            </Sphere>
        </Float>
    )
}

function WireframeTorus({ position, scale, color }) {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.4
            ref.current.rotation.z = state.clock.elapsedTime * 0.25
        }
    })
    return (
        <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
            <Torus ref={ref} args={[1, 0.3, 16, 80]} position={position} scale={scale}>
                <meshStandardMaterial color={color} wireframe roughness={0.2} metalness={0.9} transparent opacity={0.6} />
            </Torus>
        </Float>
    )
}

function ParticleCloud() {
    const ref = useRef()
    const count = 1500
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 25
            arr[i * 3 + 1] = (Math.random() - 0.5) * 25
            arr[i * 3 + 2] = (Math.random() - 0.5) * 25
        }
        return arr
    }, [])

    useFrame((s) => {
        if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.04
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#00f5c4" transparent opacity={0.5} sizeAttenuation />
        </points>
    )
}

export default function ThreeScene() {
    return (
        <Canvas camera={{ position: [0, 0, 9], fov: 55 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#00f5c4" />
            <pointLight position={[-5, -5, 5]} intensity={1} color="#7c3aed" />
            <pointLight position={[0, 0, -5]} intensity={0.5} color="#c8ff00" />

            <Stars radius={80} depth={60} count={2000} factor={3} saturation={0} fade speed={0.5} />
            <GridLines />
            <ParticleCloud />

            <NeonSphere position={[-4.5, 1.5, -3]} color="#00f5c4" scale={1.6} distort={0.45} />
            <NeonSphere position={[4.5, -1, -4]} color="#7c3aed" scale={1.2} distort={0.5} />
            <NeonSphere position={[1, -3, -6]} color="#c8ff00" scale={0.8} distort={0.3} />

            <WireframeTorus position={[3.5, 2.5, -4]} scale={0.9} color="#00f5c4" />
            <WireframeTorus position={[-3, -2.5, -5]} scale={0.6} color="#ff4d6d" />
        </Canvas>
    )
}
