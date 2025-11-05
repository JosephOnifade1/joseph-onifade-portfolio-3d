import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  author: string;
  readTime: string;
  content?: string;
}

// Sample blog posts data (in production, this would be dynamically loaded from MDX files)
const blogPosts: BlogPost[] = [
  {
    slug: "creating-3d-portfolio",
    title: "Building an Interactive 3D Portfolio with Three.js",
    date: "2025-01-15",
    category: "3D Web Development",
    tags: ["Three.js", "React", "WebGL", "Portfolio"],
    excerpt: "Learn how to create a stunning 3D portfolio website using Three.js and React Three Fiber. We'll cover scene setup, lighting, and interactive animations.",
    coverImage: "/blog/3d-portfolio.jpg",
    author: "Joseph Onifade",
    readTime: "8 min read",
  },
  {
    slug: "blender-to-threejs-workflow",
    title: "Optimizing Blender Models for Web: The Complete Guide",
    date: "2025-01-10",
    category: "Blender Tutorials",
    tags: ["Blender", "Three.js", "GLTF", "Optimization"],
    excerpt: "Master the art of exporting Blender models for web use. Discover techniques for texture baking, LOD creation, and GLTF optimization to achieve buttery smooth performance.",
    coverImage: "/blog/blender-workflow.jpg",
    author: "Joseph Onifade",
    readTime: "12 min read",
  },
  {
    slug: "game-asset-optimization",
    title: "Creating Game-Ready 3D Assets: Best Practices",
    date: "2025-01-05",
    category: "Game Development",
    tags: ["Game Assets", "3D Modeling", "Optimization", "Unity"],
    excerpt: "A comprehensive guide to creating optimized game assets. Learn about proper topology, texture atlasing, and performance considerations for real-time rendering.",
    coverImage: "/blog/game-assets.jpg",
    author: "Joseph Onifade",
    readTime: "10 min read",
  },
  {
    slug: "advanced-react-patterns",
    title: "Advanced React Patterns for Better Performance",
    date: "2024-12-28",
    category: "Frontend Techniques",
    tags: ["React", "TypeScript", "Performance", "Hooks"],
    excerpt: "Dive deep into advanced React patterns including compound components, render props, and custom hooks. Learn how to write more maintainable and performant React code.",
    coverImage: "/blog/react-patterns.jpg",
    author: "Joseph Onifade",
    readTime: "15 min read",
  },
  {
    slug: "pbr-materials-threejs",
    title: "Creating Realistic PBR Materials in Three.js",
    date: "2024-12-20",
    category: "3D Web Development",
    tags: ["Three.js", "PBR", "Materials", "Shaders"],
    excerpt: "Understand physically-based rendering and create stunning realistic materials in Three.js. We'll cover metalness, roughness, and environment mapping.",
    coverImage: "/blog/pbr-materials.jpg",
    author: "Joseph Onifade",
    readTime: "11 min read",
  },
  {
    slug: "blender-procedural-textures",
    title: "Mastering Procedural Textures in Blender",
    date: "2024-12-15",
    category: "Blender Tutorials",
    tags: ["Blender", "Texturing", "Nodes", "Materials"],
    excerpt: "Unlock the power of procedural texturing in Blender. Learn how to create complex materials using shader nodes without relying on image textures.",
    coverImage: "/blog/procedural-textures.jpg",
    author: "Joseph Onifade",
    readTime: "9 min read",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => 
      post.slug !== slug && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}
