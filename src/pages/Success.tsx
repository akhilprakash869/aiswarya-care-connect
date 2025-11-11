import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-primary/10 flex items-center justify-center animate-scale-in">
            <CheckCircle2 className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          ✅ Message Sent Successfully!
        </h1>

        {/* Subtext */}
        <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Thank you for reaching out. Dr. Aiswarya will personally review your concern 
          and respond within <span className="font-semibold text-foreground">24–48 hours</span>.
        </p>

        {/* Info Card */}
        <div className="bg-gradient-primary/5 border border-primary/20 rounded-xl p-6 mb-8 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            Your message has been received and both you and Dr. Aiswarya have been notified via email. 
            Please check your inbox for a confirmation message.
          </p>
        </div>

        {/* Return Button */}
        <Button 
          size="lg"
          onClick={() => navigate("/")}
          className="shadow-elegant hover:shadow-glow transition-all hover:scale-105 hover:-translate-y-1 duration-500"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </Button>

        {/* Auto-redirect notice */}
        <p className="text-sm text-muted-foreground mt-6">
          Automatically redirecting in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;
