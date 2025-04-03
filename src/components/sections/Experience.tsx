import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ExperienceCard from '../ui/ExperienceCard';
import { useScrollAnimation } from '@/utils/animations';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Development Intern',
    company: 'Bharat Electronics Limited',
    period: 'May 2024 - July 2024',
    description: 'Developed and deployed a Material Management System, enhancing inventory tracking and operational efficiency.',
    skills: ['HTML','CSS','PHP','JavaScript', 'React', 'UI/UX', 'Product Development'],
    logo: 'https://ik.imagekit.io/mahitha/BHel.png?updatedAt=1742452234782'
  },
  {
    title: 'Machine Learning Intern',
    company: 'Edunet Foundation IBM Skills Build',
    period: 'May 2024 - July 2024',
    description: ' Worked on employee burnout prediction analysis using machine learning, leveraging linear regression and data analytics.',
    skills: ['Machine Learning', 'Python'],
    logo: 'https://ik.imagekit.io/mahitha/edunetfoundation_logo.jfif?updatedAt=1742452374251'
  },
  {
    title: 'Co-convener of Brain and Mind Strategic Games Club',
    company: 'SRM University, AP',
    period: '2022 - Present',
    description: 'Led strategic initiatives, organized competitions, and fostered a community for game enthusiasts.',
    skills: ['Communication', 'Event Management', 'Leadership', 'Team Work'],
    logo: 'https://ik.imagekit.io/cowboypanda/SRM_University,_Andhra_Pradesh_logo.png?updatedAt=1741930496072'
  },
];

const educationItems = [
  {
    title: 'Bachelor of Technology - B.Tech, Computer Science',
    company: 'SRM University, AP',
    period: '2022 - 2026',
    description: 'Maintaining a 9.3 CGPA while actively participating in various technical clubs and events. Specializing in computer science with a focus on modern technologies.',
    skills: ['Computer Science', 'Data Structures', 'Algorithms', 'Machine Learning'],
    logo: 'https://ik.imagekit.io/cowboypanda/SRM_University,_Andhra_Pradesh_logo.png?updatedAt=1741930496072'
  },
  {
    title: 'Higher Secondary Certificate (Intermediate)',
    company: 'Bhashyam Junior College of Education',
    period: '2020 - 2022',
    description: 'Completed higher secondary education with 97.5% marks, focusing on Mathematics, Physics, and Chemistry.',
    skills: ['Mathematics', 'Physics', 'Chemistry'],
    logo: 'https://ik.imagekit.io/mahitha/bh.png?updatedAt=1742452467990'
  },
  {
    title: 'Central Board od secondary Education Certificate (Class 10)',
    company: 'Sri Venkateswara Bala Kuteer',
    period: '2019 - 2020',
    description: 'Completed CBSE board examination with 95% marks.',
    skills: ['Mathematics', 'Science', 'English', 'Social Studies'],
    logo: 'https://ik.imagekit.io/mahitha/svbk.jfif?updatedAt=1742452559000'
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const animation = useScrollAnimation(0.1, 'up');
  const [sliderPosition, setSliderPosition] = useState(0);
  const experienceRef = useRef<HTMLButtonElement>(null);
  const educationRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Update slider position based on active tab
    if (activeTab === 'experience' && experienceRef.current) {
      setSliderPosition(0);
    } else if (activeTab === 'education' && educationRef.current) {
      setSliderPosition(1);
    }
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    if (value) {
      setActiveTab(value as 'experience' | 'education');
    }
  };

  return (
    <section id="experience" className="section-container mb-16">
      <div {...animation} className="max-w-4xl mx-auto">
        <h2 className="section-title">
          My <span className="text-primary">Journey</span>
        </h2>

        {/* Enhanced Toggle Tabs with Slider */}
        <div className="flex justify-center mb-12">
          <div className="relative p-1 rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            <div 
              className="absolute top-1 h-[calc(100%-8px)] rounded-lg bg-primary transition-all duration-500 ease-in-out"
              style={{ 
                width: 'calc(50% - 4px)', 
                left: sliderPosition === 0 ? '4px' : 'calc(50% + 2px)',
              }}
            />
            
            <ToggleGroup 
              type="single" 
              value={activeTab} 
              onValueChange={handleTabChange} 
              className="relative z-10 flex"
            >
              <ToggleGroupItem 
                ref={experienceRef}
                value="experience" 
                className={cn(
                  "z-10 rounded-lg transition-all duration-300 px-6 py-3 flex items-center gap-2.5 text-sm font-medium w-full",
                  activeTab === 'experience' 
                    ? "text-white" 
                    : "text-black dark:text-gray-200"
                )}
              >
                <Briefcase className={cn(
                  "h-4 w-4",
                  activeTab === 'experience' ? "text-white" : "text-black dark:text-gray-200"
                )} />
                Experience
              </ToggleGroupItem>
              
              <ToggleGroupItem 
                ref={educationRef}
                value="education" 
                className={cn(
                  "z-10 rounded-lg transition-all duration-300 px-6 py-3 flex items-center gap-2.5 text-sm font-medium w-full",
                  activeTab === 'education' 
                    ? "text-white" 
                    : "text-black dark:text-gray-200"
                )}
              >
                <GraduationCap className={cn(
                  "h-4 w-4",
                  activeTab === 'education' ? "text-white" : "text-black dark:text-gray-200"
                )} />
                Education
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Timeline with improved animation */}
        <div className="grid grid-cols-1 gap-4 relative overflow-hidden mb-8">
          <div className={cn(
            "transition-all duration-500 ease-in-out transform grid grid-cols-1 gap-4 absolute w-full",
            activeTab === 'experience' 
              ? "translate-x-0 opacity-100 relative" 
              : "translate-x-[-100%] opacity-0 absolute pointer-events-none"
          )}>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                skills={experience.skills}
                logo={experience.logo}
                index={index}
              />
            ))}
          </div>
          
          <div className={cn(
            "transition-all duration-500 ease-in-out transform grid grid-cols-1 gap-4 absolute w-full",
            activeTab === 'education' 
              ? "translate-x-0 opacity-100 relative" 
              : "translate-x-[100%] opacity-0 absolute pointer-events-none"
          )}>
            {educationItems.map((education, index) => (
              <ExperienceCard
                key={index}
                title={education.title}
                company={education.company}
                period={education.period}
                description={education.description}
                skills={education.skills}
                logo={education.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;