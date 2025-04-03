import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  logo?: string;
  index: number;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  skills,
  logo,
  index,
}: ExperienceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'glass-card p-6 relative animate-in flex my-2',
        isHovered ? 'border-primary/30 shadow-md' : 'shadow-md',
        'animate-fade-in'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative element */}
      <div className="absolute -left-1 top-0 bottom-0 w-1 bg-primary rounded-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

      {/* Logo */}
      {logo && (
        <div className="flex-shrink-0 mr-6">
          <div className="w-16 h-16 rounded-md overflow-hidden border border-border shadow-sm bg-white/90 flex items-center justify-center p-2">
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-4">
          <h3 className="font-bold text-lg text-foreground transition-colors">
            {title}
          </h3>
          <div className="text-primary font-medium">{company}</div>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{period}</span>
          </div>
        </div>

        {/* Content */}
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;