import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <mesh>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.5}
          wireframe
        />
      </Sphere>
    </mesh>
  );
}

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
          Hi, I'm <span className="text-gradient-gold">Joseph Onifade</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-poppins font-semibold mb-4">
          Frontend & <span className="text-gradient-cyan">3D Developer</span> | Blender Artist
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          I create immersive web experiences, game assets, and 3D product visualizations 
          that blend technical excellence with artistic vision.
        </p>
        
        <div className="flex gap-4 justify-center mb-16">
          <Button variant="hero" size="xl" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button variant="glow" size="xl" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};
