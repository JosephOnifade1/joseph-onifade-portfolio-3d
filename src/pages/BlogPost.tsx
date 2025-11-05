import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = (platform?: 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleShare()}>
                <Share2 size={16} />
                Copy Link
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleShare('twitter')}>
                <Twitter size={16} />
                Share
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleShare('linkedin')}>
                <Linkedin size={16} />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="relative h-[400px] bg-muted border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/5" />
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>

              <h2>Introduction</h2>
              <p>
                This is a sample blog post demonstrating the blog system. In a real implementation,
                this content would be loaded from MDX files with full markdown support, code syntax
                highlighting, and interactive components.
              </p>

              <h2>Key Concepts</h2>
              <p>
                When working with {post.category.toLowerCase()}, there are several important
                concepts to understand. These form the foundation of creating professional-quality
                work in this field.
              </p>

              <h3>Getting Started</h3>
              <p>
                To begin, you'll need to understand the fundamentals. This includes setting up
                your development environment, understanding the core tools, and learning the
                best practices that professionals use.
              </p>

              <h3>Advanced Techniques</h3>
              <p>
                Once you've mastered the basics, you can explore more advanced techniques that
                will take your skills to the next level. These include optimization strategies,
                workflow improvements, and creative problem-solving approaches.
              </p>

              <h2>Conclusion</h2>
              <p>
                Mastering these concepts takes time and practice, but the results are worth it.
                Keep experimenting, learning, and pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-poppins font-bold mb-8 text-center">
              Related <span className="text-gradient-gold">Articles</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
