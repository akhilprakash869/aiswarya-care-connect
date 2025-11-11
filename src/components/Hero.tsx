import { Button } from "@/components/ui/button";
import profileImage from "@/assets/dr-aiswarya-profile.jpg";
import { MessageCircle, Stethoscope } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                MBBS Doctor
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dr. Aiswarya Anilkumar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Dedicated to helping you with care and clarity.
            </p>
            
            <p className="text-lg text-muted-foreground italic">
              "Healing begins with understanding."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="group relative overflow-hidden transition-all hover:scale-105"
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
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" />
                  Book Consultation
                </span>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                <img 
                  src={profileImage} 
                  alt="Dr. Aiswarya Anilkumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
