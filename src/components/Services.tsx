import { Palette, Sparkles, FileText, Share2, Youtube, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Create memorable brand identities that resonate with your target audience and stand out in the market.",
    },
    {
      icon: Sparkles,
      title: "Logo Design",
      description: "Design unique, versatile logos that capture your brand's essence and work across all mediums.",
    },
    {
      icon: FileText,
      title: "Print Design",
      description: "Professional print materials including posters, flyers, brochures, and business cards that make an impact.",
    },
    {
      icon: Share2,
      title: "Social Media Graphics",
      description: "Eye-catching social media content that engages your audience and enhances your online presence.",
    },
    {
      icon: Youtube,
      title: "Thumbnail Design",
      description: "High-converting YouTube thumbnails designed to maximize click-through rates and views.",
    },
    {
      icon: BookOpen,
      title: "Visual Storytelling",
      description: "Compelling visual narratives that communicate your message and connect with your audience emotionally.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive design services tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
