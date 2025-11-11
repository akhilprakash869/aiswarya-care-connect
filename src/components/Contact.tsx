import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    const formElements = form.current.elements as any;
    const email = formElements.to_email?.value;
    const name = formElements.to_name?.value;
    const message = formElements.message?.value;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      toast.error("⚠️ Please fill in all required fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("⚠️ Please enter a valid email address");
      return;
    }

    if (message.length < 10) {
      toast.error("⚠️ Please provide more details (at least 10 characters)");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const patientTemplateId = import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !patientTemplateId || !publicKey) {
        toast.error("❌ Email service not configured. Please add EmailJS keys.");
        setIsSubmitting(false);
        return;
      }

      await emailjs.sendForm(
        serviceId,
        patientTemplateId,
        form.current,
        publicKey
      );

      setIsSubmitted(true);
      toast.success("✅ Your message has been sent successfully!");
      form.current.reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Failed to send. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Elegant background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Let's Connect with Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a health question or need clarity on a condition? Feel free to share — 
              your concern will be reviewed personally by Dr. Aiswarya.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8 border-l-4 border-l-primary shadow-elegant hover:shadow-glow transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-all duration-500">
                      <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:draiswaryata0108@gmail.com"
                        className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                      >
                        draiswaryata0108@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-all duration-500">
                      <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone / WhatsApp</p>
                      <a 
                        href="tel:+919544127501"
                        className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                      >
                        +91 95441 27501
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-all duration-500">
                      <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">Ernakulam, Kerala</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="p-6 bg-gradient-primary/5 rounded-xl border border-primary/20 shadow-soft backdrop-blur-sm">
                <p className="text-sm text-muted-foreground italic flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  Your message remains private and confidential
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-500 animate-fade-in border-t-4 border-t-primary">
              <h3 className="text-2xl font-semibold mb-6">
                Ask with Confidence. Receive with Care.
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank you for reaching out!</h4>
                  <p className="text-muted-foreground">
                    Dr. Aiswarya will respond soon.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="to_name" className="block text-sm font-medium mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="to_name"
                      name="to_name"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                      maxLength={100}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="to_email" className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="to_email"
                      name="to_email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      maxLength={255}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message / Health Concern <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your health concern or question..."
                      required
                      disabled={isSubmitting}
                      maxLength={2000}
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full shadow-elegant hover:shadow-glow transition-all hover:scale-105 hover:-translate-y-1 duration-500"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send with Care 💙
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
