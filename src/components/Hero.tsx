import { Button } from "@/components/ui/button";
import profileImage from "@/assets/dr-aiswarya-profile.jpg";
import { MessageCircle, Stethoscope } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Elegant background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--medical-blue-light)/0.06),transparent_60%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold backdrop-blur-sm border border-primary/20">
                <Stethoscope className="w-4 h-4" />
                MBBS Doctor
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-elegant bg-clip-text text-transparent">
                Dr. Aiswarya Anilkumar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Dedicated to helping you with care and clarity.
            </p>
            
            <p className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4">
              "Healing begins with understanding."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="group relative overflow-hidden shadow-elegant hover:shadow-glow transition-all hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Ask a Question
                </span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 hover:-translate-y-1 shadow-soft"
              >
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Book Consultation
                </span>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Elegant glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-white shadow-elegant hover:shadow-glow transition-all duration-700 hover:scale-105 hover:rotate-2">
                <img 
                  src={profileImage} 
                  alt="Dr. Aiswarya Anilkumar - MBBS Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
