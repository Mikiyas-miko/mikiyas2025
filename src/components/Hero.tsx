import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
              I'M A <br />
              <span className="text-primary">GRAPHIC</span> <br />
              DESIGNER
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/90 font-semibold">
              Transforming Ideas into Powerful Visuals
            </p>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
              A seasoned graphic designer with over 3 years of experience creating compelling visual stories. 
              Specializing in branding, logo design, and digital content that makes an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
                onClick={() => scrollToSection("#portfolio")}
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:text-primary font-semibold px-8 transition-all hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Orange glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-2xl opacity-40 animate-glow" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/30">
                <img
                  src={profilePhoto}
                  alt="Mikiyas Tizazu - Graphic Designer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-4 border-primary/30" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-primary/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
