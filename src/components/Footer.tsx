export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Joseph Onifade | Designed with ❤️ and Code
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Building the future, one pixel at a time
          </p>
        </div>
      </div>
    </footer>
  );
};
