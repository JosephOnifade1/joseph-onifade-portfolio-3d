import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFD700"
        emissiveIntensity={0.3}
        wireframe
      />
    </Box>
  );
}

export const ThreeDShowcase = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Canvas */}
          <div className="h-[500px] rounded-lg overflow-hidden bg-card border border-border animate-fade-in">
            <Canvas camera={{ position: [5, 5, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
              <RotatingCube />
              <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
              <gridHelper args={[10, 10, "#FFD700", "#333333"]} />
            </Canvas>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Design Meets <span className="text-gradient-cyan">Depth</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I create <span className="text-foreground font-semibold">immersive web experiences</span> that 
                go beyond traditional 2D interfaces. By leveraging the power of WebGL and Three.js, 
                I bring depth and interactivity to the web.
              </p>
              <p>
                Whether it's a product showcase, an interactive portfolio, or a full-fledged 
                3D game, I combine technical expertise with creative vision to deliver 
                experiences that captivate and engage.
              </p>
              <p className="text-foreground font-semibold">
                The web is a canvas. Let's paint it in three dimensions.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-primary/20">
                <div className="text-3xl font-poppins font-bold text-gradient-gold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">3D Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-secondary/20">
                <div className="text-3xl font-poppins font-bold text-gradient-cyan mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
