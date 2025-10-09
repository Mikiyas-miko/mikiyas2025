import { Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Branding & Identity",
    "Logo Design",
    "Visual Storytelling",
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
  ];

  const experience = [
    {
      company: "Mk Lyrics",
      role: "YouTube Thumbnail Designer",
      duration: "3 years",
      description: "Created engaging thumbnails that increased click-through rates",
    },
    {
      company: "Archinova",
      role: "Poster and Banner Designer",
      duration: "2 years",
      description: "Designed promotional materials for architectural projects",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Avatar & Badge */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-black text-primary border-4 border-primary">
                MT
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg">
                3+ Years Experience
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Introduction */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a seasoned graphic designer with a passion for transforming ideas into powerful visual narratives. 
                With over 3 years of experience in the industry, I've honed my skills across various design disciplines, 
                from creating memorable brand identities to crafting eye-catching digital content.
              </p>
            </div>

            {/* Core Skills */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-card border-border hover:border-primary transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground/70">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Experience */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="text-primary" size={24} />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Award className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="font-bold text-lg">{exp.company}</h4>
                            <span className="text-sm text-primary font-medium">{exp.duration}</span>
                          </div>
                          <p className="text-foreground/90 font-medium mb-2">{exp.role}</p>
                          <p className="text-foreground/70 text-sm">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
