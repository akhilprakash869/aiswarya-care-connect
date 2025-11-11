import { GraduationCap, Hospital, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "MBBS",
      institution: "ESI Medical College, Coimbatore",
      description: "Graduated with comprehensive medical education",
    },
    {
      icon: Hospital,
      title: "Internship",
      institution: "ESI Medical College Hospital",
      description: "Hands-on clinical experience across specialties",
    },
    {
      icon: BookOpen,
      title: "Continuing Education",
      institution: "Community & Preventive Medicine",
      description: "Ongoing learning in holistic healthcare",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Dr. Aiswarya
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-l-primary shadow-lg">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MBBS graduate from <span className="font-semibold text-foreground">ESI Medical College, Coimbatore</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Passionate about <span className="font-semibold text-primary">preventive medicine</span>, 
                  <span className="font-semibold text-primary"> women's health</span>, and 
                  <span className="font-semibold text-primary"> holistic well-being</span>.
                </p>
              </Card>
              
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-foreground italic">
                  "Medicine is not just treatment — it's trust. My approach focuses on understanding 
                  each patient's unique needs and providing care with empathy and clarity."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  Education & Training
                </h3>
                
                <div className="space-y-4">
                  {education.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card 
                        key={index}
                        className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/50"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                            <p className="text-primary font-medium text-sm mb-2">
                              {item.institution}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
