import ProjectCard from '../ui/ProjectCard';
import { useScrollAnimation } from '@/utils/animations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// ImageKit.io base URL
const imageKitBaseUrl = "https://ik.imagekit.io/cowboypanda";

const projects = [
  {
    title: 'Travel Scapes',
    description: 'Developed and deployed a dynamic Travel Blog Website using HTML, CSS, JavaScript, PHP, and MySQL, enabling seamless user interaction and real-time updates.',
    tags: ['Web Development', 'JavaScript', 'UI/UX', 'Dashboard'],
    githubUrl: 'https://github.com/mahitha-2374/TravelScapes-',
    imageUrl: 'https://ik.imagekit.io/mahitha/Screenshot%202025-03-20%20164822.png?updatedAt=1742469534658',
    liveUrl: '',
  },
  {
    title: 'Holographic Gesture Control | OpenCV',
    description: ' A touchless interaction system using Computer Vision for seamless human-computer interaction.',
    tags: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision','Touchless Technology'],
    githubUrl: 'https://github.com/mahitha-2374/Holographic-Gesture-Control',
    imageUrl: `https://ik.imagekit.io/mahitha/gesture.jpg?updatedAt=1743690038964`,
    liveUrl: '',
  },
  {
    title: 'Employee Attrition Classification and Analysis',
    description: 'Built an employee attrition model using logistic regression and oversampling for workforce analysis.',
    tags: ['Machine Learning', 'Logistic Regression','Data preprocessing'],
    githubUrl: 'https://github.com/mahitha-2374/Employee-Attrition-Classification-and-Analysis',
    imageUrl: 'https://ik.imagekit.io/mahitha/applsci-12-06424-g001.png?updatedAt=1742470520346',
    liveUrl: '',
  },
  {
    title: 'Groccery Store Management System',
    description: 'C++-based Grocery Store Management System featuring inventory automation, sales tracking, and administrative oversight.',
    tags: ['CPP', 'OOP', 'File I/O'],
    githubUrl: 'https://github.com/mahitha-2374/Groccery-Store-Management-System',
    imageUrl: `https://ik.imagekit.io/mahitha/Grocery-Management-System.webp?updatedAt=1743689899767`,
    liveUrl: '',
  },
];

const Projects = () => {
  const animation = useScrollAnimation(0.1, 'up');

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto" {...animation}>
        <h2 className="section-title">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Projects carousel */}
        <div className="mt-12">
          <Carousel
            opts={{
              align: "center",
              loop: false, // Changed from true to false to remove circular navigation
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="pb-8">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      imageUrl={project.imageUrl}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                      index={index}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-6 bg-transparent">
              <CarouselPrevious className="static h-12 w-12 shadow-none border-primary/40 bg-background/80 hover:bg-background" />
              <CarouselNext className="static h-12 w-12 shadow-none border-primary/40 bg-background/80 hover:bg-background" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;