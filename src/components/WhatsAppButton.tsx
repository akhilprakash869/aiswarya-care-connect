import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = "919544127501"; // +91 95441 27501 in WhatsApp format
  const message = encodeURIComponent(
    "Hello Dr. Aiswarya! I would like to consult with you regarding a health concern."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap 
            bg-soft-black text-white px-4 py-2.5 rounded-lg text-sm font-medium
            shadow-elegant transition-all duration-300 ${
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
            }`}
        >
          Chat on WhatsApp 💬
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full 
            border-8 border-transparent border-l-soft-black" />
        </div>

        {/* Button */}
        <div
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full 
            flex items-center justify-center shadow-elegant hover:shadow-glow
            transition-all duration-500 hover:scale-110 cursor-pointer
            animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>

        {/* Ping animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
