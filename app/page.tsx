import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects, experiences, skills } from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      {/* Hero Section */}
      <section
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4"
        id="home"
      >
        <h1 className="text-3xl md:text-7xl font-bold mb-4">
          Arwin Arun Swapna
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground mb-8 whitespace-nowrap">
          Engineer @ White & Case | CS @ USF
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/arwin-swapna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/arwinswapna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="mailto:arwinswapna@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 space-y-12">
        <h2 className="text-3xl font-bold">About Me</h2>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-muted-foreground mt-1">
                  University of South Florida
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-primary font-medium">August 2024</p>
                <p className="text-sm text-muted-foreground">Tampa, FL</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">
                Cum Laude
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border"
              >
                <h4 className="text-lg font-semibold mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="relative ml-4 md:ml-0">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border" />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 -translate-y-4 flex flex-col items-center">
                  <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-[calc(50%+2rem)] md:text-right"
                      : "md:ml-[calc(50%+2rem)]"
                  }`}
                >
                  <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex flex-col gap-1 mt-1">
                      <p className="text-muted-foreground">{exp.company}</p>
                      {exp.description && (
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {exp.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card hover:bg-card/80 transition-colors rounded-lg border group flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[180px]"
                      >
                        <Button
                          variant="outline"
                          className="w-full h-9 text-sm"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </Button>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[180px]"
                      >
                        <Button
                          variant="default"
                          className="w-full h-9 text-sm"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Site
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div>
          <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border">
            <div className="space-y-4">
              <a
                href="mailto:arwinswapna@gmail.com"
                className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>arwinswapna@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/arwinswapna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/arwinswapna</span>
              </a>
              <a
                href="https://github.com/arwin-swapna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/arwin-swapna</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
