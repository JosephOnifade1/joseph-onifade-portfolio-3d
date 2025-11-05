import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Immersive 3D Portfolio",
    description: "A fully interactive 3D portfolio website with smooth animations and WebGL shaders.",
    tags: ["Three.js", "React", "GSAP", "WebGL"],
    category: "Web Development",
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Sci-Fi Weapon Pack",
    description: "Complete set of game-ready sci-fi weapons with PBR textures and LODs for Unity/Unreal.",
    tags: ["Blender", "Substance Painter", "Game Assets", "PBR"],
    category: "Game Assets",
    featured: false,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Product Visualization Suite",
    description: "High-quality 3D product renders for e-commerce and marketing campaigns.",
    tags: ["Blender", "Cycles", "Product Design", "Commercial"],
    category: "3D Products",
    featured: false,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Interactive 3D Configurator",
    description: "Real-time 3D product configurator with material customization and AR preview.",
    tags: ["Three.js", "React", "WebGL", "AR"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Fantasy Character Collection",
    description: "Stylized game characters with rigging, animations, and customizable materials.",
    tags: ["Blender", "Character Design", "Rigging", "Animation"],
    category: "Game Assets",
    featured: false,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Architectural Visualization",
    description: "Photorealistic architectural renders for real estate and interior design projects.",
    tags: ["Blender", "V-Ray", "Architecture", "Photorealism"],
    category: "3D Products",
    featured: false,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "WebGL Particle System",
    description: "High-performance particle effects library with custom shaders and physics.",
    tags: ["Three.js", "WebGL", "Shaders", "GLSL"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Modular Environment Kit",
    description: "Complete modular environment assets for creating expansive game worlds.",
    tags: ["Blender", "Unity", "Level Design", "Modular"],
    category: "Game Assets",
    featured: false,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Web development, game assets, and 3D product visualizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group relative rounded-lg overflow-hidden bg-card border border-border
                transition-all duration-300 transform
                ${hoveredIndex === index ? "scale-105 shadow-2xl" : ""}
                ${project.featured ? "md:col-span-2 lg:col-span-3" : ""}
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`
                    w-full h-full object-cover
                    transition-transform duration-500
                    ${hoveredIndex === index ? "scale-110" : "scale-100"}
                  `}
                />
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent
                  transition-opacity duration-300
                  ${hoveredIndex === index ? "opacity-90" : "opacity-60"}
                `} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-poppins font-bold mb-2 group-hover:text-gradient-gold transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  </Button>
                  <Button variant="glow" size="sm" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
