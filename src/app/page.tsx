
'use client';

import Image from 'next/image';
import { Mail, Phone, Github, Download } from 'lucide-react';
import AnimatedName from '@/components/animated-name';
import { IconLink } from '@/components/icon-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [ 

  { id: 1, title: "Chatbot for Cybersecurity Training and Awareness (currently working)", description: "Tech Stack: Python, Node.js, NLP libraries, MongoDB.Currently developing an interactive AI-powered chatbot to promote cybersecurity awareness in both corporate and public environments. It delivers educational modules, simulated phishing scenarios, and adapts content for various user types. Designed with modularity, secure data handling, and feedback integration for continuous improvement." },
  { id: 2, title: "AI-Powered Medical Diagnosis Tool", description: "Tech Stack: Python, scikit-learn, TensorFlow, Streamlit Developed a machine learning model to predict diseases such as diabetes and heart disease from patient data. The project features an interactive Streamlit web app for real-time predictions and intuitive data visualization, aimed at supporting early diagnosis and preventive care." },
  { id: 3, title: "Fashion Image Classification UI", description: "Python, TensorFlow, Keras, Streamlit. A deep learning-powered UI for real-time classification of fashion items using the Fashion MNIST dataset."} ,
  { id: 4, title: "Expense Tracker", description: "Tech Stack: Python, TensorFlow, Keras, Streamlit.Built a lightweight CNN model using the Fashion MNIST dataset to classify clothing items with high accuracy. Developed a drag-and-drop Streamlit interface for real-time predictions, optimized for responsiveness and ease of use. Focused on delivering a clean user experience and accessible AI-driven fashion recognition." },
];

const careerObjective = "M.Tech in Computer Science | Machine Intelligence Enthusiast";

const personalBio = "I’m a curious mind, exploring the world of Machine Intelligence through my M.Tech journey in Computer Science. I’m especially drawn to how machines can learn and understand human language. Whether it's building smarter systems or simplifying complex decisions with data, I’m passionate about blending research and creativity to make technology more human-aware.";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-primary selection:text-primary-foreground">
      {/* Fixed Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="w-full max-w-5xl mx-auto p-4 flex justify-end">
          <div className="flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('hero')}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              About Me
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>
        </div>
      </header>
      <div className="w-full max-w-5xl p-6 md:p-10 space-y-20 md:space-y-28">
        
        {/* Hero Section */}
        <section id="hero" className="text-center pt-16 md:pt-24 min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)] flex flex-col justify-center items-center">
          <AnimatedName name="Deepak V" />
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
                src="/Deepak_photo.jpg" 
                alt="Deepak V" 
                width={600} 
                height={750} 
                className="rounded-full shadow-lg border-4 border-accent object-cover" 
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
            <IconLink href="mailto:deepakv081099@gmail.com" icon={<Mail />} text="deepakv081099@gmail.com" />
            <IconLink href="tel:+917639259257" icon={<Phone />} text="+91 76392 59257" />
            <IconLink href="https://github.com/Deepak-john-08" icon={<Github />} text="GitHub Profile" />
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
          <p className="text-muted-foreground mt-4 text-sm font-body">(Resume will open in another tab)</p>
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
