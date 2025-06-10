import Image from 'next/image';
import { Mail, Phone, Github, Download } from 'lucide-react';
import AnimatedName from '@/components/animated-name';
import { IconLink } from '@/components/icon-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  { id: 1, title: "AI-Powered Analytics Dashboard", description: "A comprehensive platform for real-time data visualization and insight generation using advanced AI algorithms." },
  { id: 2, title: "Mobile-First E-commerce Solution", description: "Developed a responsive and intuitive mobile shopping application focusing on user experience and conversion optimization." },
  { id: 3, title: "Scalable Cloud Orchestration Service", description: "Engineered a robust backend system for managing and scaling cloud resources efficiently across multiple providers." },
  { id: 4, title: "Collaborative Project Management Tool", description: "A web application designed to streamline team collaboration, task tracking, and project reporting with a clean interface." },
];

const careerObjective = "A highly motivated and results-oriented Software Engineer with a passion for developing innovative and scalable web applications. Eager to leverage cutting-edge technologies to solve complex problems and contribute to impactful projects in a dynamic team environment.";

const personalBio = "Deepak V is an innovative Software Engineer specializing in full-stack development and modern cloud architectures. With a keen eye for detail and a dedication to crafting elegant, efficient, and user-centric applications, Deepak thrives on turning complex challenges into seamless digital experiences. Proven ability to quickly adapt to new technologies and collaborate effectively in fast-paced, agile environments. Committed to continuous learning and driving technological advancement.";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-primary selection:text-primary-foreground">
      <div className="w-full max-w-5xl p-6 md:p-10 space-y-20 md:space-y-28">
        
        {/* Hero Section */}
        <section id="hero" className="text-center pt-16 md:pt-24 min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] flex flex-col justify-center items-center">
          <AnimatedName name="DeepakV" />
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
            {careerObjective}
          </p>
          <Button variant="outline" size="lg" className="mt-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-12 md:py-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-2xl">
            <div className="flex-shrink-0">
              <Image 
                src="https://placehold.co/200x200.png" 
                alt="Deepak V" 
                width={200} 
                height={200} 
                className="rounded-full shadow-lg border-4 border-accent object-cover" 
                data-ai-hint="professional portrait" 
                priority
              />
            </div>
            <div className="text-lg font-body text-center md:text-left max-w-lg">
              <h3 className="text-3xl md:text-4xl font-headline text-accent mb-2">Deepak V</h3>
              <p className="text-xl md:text-2xl text-primary font-semibold font-headline mb-6">Software Engineer</p>
              <p className="leading-relaxed text-card-foreground/90">
                {personalBio}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <Card key={project.id} className="bg-card text-card-foreground shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-card-foreground/80 font-body text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12">Get in Touch</h2>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-12 space-y-8 md:space-y-0 max-w-3xl mx-auto">
            <IconLink href="mailto:deepak.v.portfolio@example.com" icon={<Mail />} text="deepak.v.portfolio@example.com" />
            <IconLink href="tel:+919876543210" icon={<Phone />} text="+91 98765 43210" />
            <IconLink href="https://github.com/deepakv-example-profile" icon={<Github />} text="GitHub Profile" />
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-12 md:py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-12">Resume</h2>
          <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
            <a href="/deepakv-resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume <Download className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="text-muted-foreground mt-4 text-sm font-body">(You'll need to add your resume PDF to the /public folder)</p>
        </section>

      </div>
      <footer className="w-full text-center py-8 border-t border-border mt-16">
        <p className="text-muted-foreground font-body text-sm">
          &copy; {new Date().getFullYear()} DeepakV. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
