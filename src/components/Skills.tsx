import { Code2, Sparkles, Palette, Zap, Box, Globe } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "primary",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    title: "3D Development",
    icon: Box,
    color: "secondary",
    skills: ["Three.js", "React Three Fiber", "WebGL", "Blender", "Spline"],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "primary",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Motion Design", "Prototyping"],
  },
  {
    title: "Performance",
    icon: Zap,
    color: "secondary",
    skills: ["Optimization", "Code Splitting", "Lazy Loading", "Web Vitals", "SEO"],
  },
  {
    title: "Creative Tech",
    icon: Sparkles,
    color: "primary",
    skills: ["Animation", "Shaders", "Particles", "Physics", "Interactive Art"],
  },
  {
    title: "Web Tech",
    icon: Globe,
    color: "secondary",
    skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "GraphQL"],
  },
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A blend of creativity and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative p-6 rounded-lg border border-border bg-card
                  transition-all duration-300 transform perspective-1000
                  ${isHovered ? "scale-105 shadow-lg" : ""}
                  ${category.color === "primary" ? "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]" : "hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"}
                `}
                style={{
                  transform: isHovered ? "rotateY(5deg) rotateX(5deg)" : "rotateY(0deg) rotateX(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <Icon className={category.color === "primary" ? "text-primary" : "text-secondary"} size={24} />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
