import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const fragmentShader = `
uniform sampler2D uTexture;
uniform float uHover;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Distortion intensity (0 when not hovered, rises to 0.03 max on hover)
  float intensity = uHover * 0.03;
  
  // Liquid wave math applied to the UV coordinates
  uv.x += sin(uv.y * 15.0 + uTime) * intensity;
  uv.y += sin(uv.x * 15.0 + uTime) * intensity;
  
  // Chromatic aberration separated by hover intensity
  float r = texture2D(uTexture, uv + vec2(intensity * 0.8, 0.0)).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - vec2(intensity * 0.8, 0.0)).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

function ShaderPlane({ image }: { image: string }) {
    const mesh = useRef<THREE.Mesh>(null);
    const texture = useTexture(image);
    const { viewport } = useThree();
    const [hovered, setHover] = useState(false);

    const uniforms = useMemo(() => ({
        uTexture: { value: texture },
        uTime: { value: 0 },
        uHover: { value: 0 }
    }), [texture]);

    useFrame((state) => {
        if (mesh.current) {
            const material = mesh.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.elapsedTime * 1.5;

            // Smoothly interpolate the hover state for fluid entry/exit
            material.uniforms.uHover.value = THREE.MathUtils.lerp(
                material.uniforms.uHover.value,
                hovered ? 1 : 0,
                0.05
            );
        }
    });

    return (
        <mesh
            ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <planeGeometry args={[viewport.width, viewport.height]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export default function LiquidImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    // Detect mobile/touch devices where hover shaders are unnecessary and too heavy
    const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isMobile) {
        return (
            <img
                src={src}
                alt={alt}
                className={className + " object-cover"}
                loading="lazy"
            />
        );
    }

    return (
        <div className={className}>
            <Canvas orthographic camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                <ShaderPlane image={src} />
            </Canvas>
        </div>
    );
}
