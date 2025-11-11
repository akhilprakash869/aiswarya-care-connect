import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <blockquote className="text-xl md:text-2xl font-medium italic">
              "Medicine is not just treatment — it's trust."
            </blockquote>
            
            <div className="h-px bg-primary-foreground/20 max-w-xs mx-auto" />
            
            <div className="text-sm space-y-2 text-primary-foreground/80">
              <p>© 2025 Dr. Aiswarya Anilkumar, MBBS</p>
              <p className="flex items-center justify-center gap-2">
                Designed with care by Akhil Prakash
                <Heart className="w-4 h-4 fill-current" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
