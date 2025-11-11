import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-16 relative overflow-hidden">
      {/* Elegant decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--medical-blue-light)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 animate-fade-in">
            <blockquote className="text-xl md:text-2xl font-medium italic text-white/90">
              "Medicine is not just treatment — it's trust."
            </blockquote>
            
            <div className="h-px bg-gradient-elegant max-w-xs mx-auto" />
            
            <div className="text-sm space-y-2 text-white/70">
              <p>© 2025 Dr. Aiswarya Anilkumar, MBBS</p>
              <p className="flex items-center justify-center gap-2">
                Designed with care by Akhil Prakash
                <Heart className="w-4 h-4 fill-current text-primary" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
