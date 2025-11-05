import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "3D Web Development": "bg-primary/10 text-primary border-primary/30",
      "Blender Tutorials": "bg-secondary/10 text-secondary border-secondary/30",
      "Game Development": "bg-accent/10 text-accent border-accent/30",
      "Frontend Techniques": "bg-primary/10 text-primary border-primary/30",
    };
    return colors[category] || "bg-muted text-muted-foreground border-border";
  };

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
    >
      {/* Cover Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-poppins font-bold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
