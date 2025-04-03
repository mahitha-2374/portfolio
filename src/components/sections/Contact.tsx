import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/utils/animations';

const Contact = () => {
  const animation = useScrollAnimation(0.1, 'up');

  return (
    <section id="contact" className="section-container">
      <div {...animation} className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:mahithachowdary_namdigam@srmap.edu.in" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mahithachowdary_namdigam@srmap.edu.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/mahitha-namdigam-521572247/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/mahitha-namdigam
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a 
                  href="https://github.com/mahitha-2374" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/mahitha-2374
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Instagram</h4>
                <a 
                  href="https://instagram.com/mahitha_2374" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @mahitha_2374
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mahitha-2374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted transition-colors hover:bg-primary hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahitha-namdigam-521572247/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted transition-colors hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mahithachowdary_namdigam@srmap.edu.in"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted transition-colors hover:bg-primary hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mahitha_2374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted transition-colors hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;