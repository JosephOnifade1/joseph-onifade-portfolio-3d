import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Immersive 3D Portfolio",
    description: "A fully interactive 3D portfolio website with smooth animations and WebGL shaders.",
    tags: ["Three.js", "React", "GSAP", "WebGL"],
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with seamless checkout and stunning product displays.",
    tags: ["Next.js", "Stripe", "Tailwind", "TypeScript"],
    featured: false,
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI Dashboard",
    description: "Data visualization dashboard with real-time analytics and AI-powered insights.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Interactive Game",
    description: "Browser-based 3D game with physics simulation and multiplayer capabilities.",
    tags: ["Three.js", "Socket.io", "Physics", "WebGL"],
    featured: false,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Creative Studio Site",
    description: "Award-winning website for creative agency with smooth transitions and animations.",
    tags: ["Next.js", "Framer Motion", "Sanity CMS"],
    featured: false,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AR Experience",
    description: "Augmented reality web experience for product visualization and interaction.",
    tags: ["WebXR", "Three.js", "AR.js", "React"],
    featured: false,
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
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
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing creativity through code
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
