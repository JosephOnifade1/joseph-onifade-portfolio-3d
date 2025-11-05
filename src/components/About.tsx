import profileImage from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={profileImage}
                alt="Joseph Onifade"
                className="relative rounded-lg w-full max-w-md mx-auto shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              About <span className="text-gradient-gold">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate Frontend and 3D Developer with a mission to create 
                digital experiences that are not only functional but visually captivating.
              </p>
              <p>
                My expertise lies in combining modern web technologies like{" "}
                <span className="text-primary font-semibold">React</span>,{" "}
                <span className="text-primary font-semibold">Next.js</span>, and{" "}
                <span className="text-primary font-semibold">TypeScript</span> with 
                cutting-edge 3D graphics using{" "}
                <span className="text-secondary font-semibold">Three.js</span> and{" "}
                <span className="text-secondary font-semibold">WebGL</span>.
              </p>
              <p>
                I believe in pushing the boundaries of web design, creating immersive 
                interfaces that blend creativity with performance. Whether it's a 
                smooth animation or an interactive 3D scene, I'm driven by the details 
                that make digital experiences memorable.
              </p>
              <p className="text-foreground font-semibold">
                Let's build something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
