import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogCard } from "./BlogCard";
import { getAllPosts } from "@/lib/blog";
import { Button } from "./ui/button";

export const Blog = () => {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Latest <span className="text-gradient-gold">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tutorials, tips, and deep dives into 3D web development, Blender workflows, 
            and frontend techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/blog" className="inline-flex items-center gap-2">
              View All Posts
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
