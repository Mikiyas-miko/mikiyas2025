import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectBranding from "@/assets/project-branding.jpg";
import projectThumbnail from "@/assets/project-thumbnail.jpg";
import projectPoster from "@/assets/project-poster.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectLogo from "@/assets/project-logo.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filters = ["All Work", "Branding", "Logos", "Thumbnails", "Print Design", "Social Media"];

  const projects = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "Branding",
      description: "Complete brand identity system for a tech startup",
      image: projectBranding,
    },
    {
      id: 2,
      title: "YouTube Thumbnail Series",
      category: "Thumbnails",
      description: "High-converting thumbnails for gaming content",
      image: projectThumbnail,
    },
    {
      id: 3,
      title: "Event Poster Design",
      category: "Print Design",
      description: "Promotional poster for architectural exhibition",
      image: projectPoster,
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Instagram carousel designs for product launch",
      image: projectSocial,
    },
    {
      id: 5,
      title: "Logo Design Collection",
      category: "Logos",
      description: "Versatile logo system with multiple variations",
      image: projectLogo,
    },
    {
      id: 6,
      title: "Corporate Branding",
      category: "Branding",
      description: "Professional branding for consulting firm",
      image: projectBranding,
    },
  ];

  const filteredProjects =
    activeFilter === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work across various design disciplines
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-foreground/80 hover:bg-primary/10 hover:text-primary border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className="mb-3 bg-primary/10 text-primary border-primary/20"
                >
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
