import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate optimized image URLs for different sizes
  const getOptimizedImageUrl = (url: string, width: number) => {
    // Using a 16:9 aspect ratio for project screenshots
    return `${url}?tr=w-${width},h-${Math.floor(width * 0.5625)},q-80,f-auto`;
  };

  return (
    <div
      className={cn(
        'glass-card overflow-hidden p-0 group h-full animate-in',
        'transition-all duration-300 ease-in-out', 
        'hover:shadow-lg',
        'rounded-xl'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageUrl && (
        <div className="w-full aspect-video overflow-hidden">
          <img
            src={getOptimizedImageUrl(imageUrl, 400)}
            srcSet={`
              ${getOptimizedImageUrl(imageUrl, 400)} 400w,
              ${getOptimizedImageUrl(imageUrl, 600)} 600w,
              ${getOptimizedImageUrl(imageUrl, 800)} 800w
            `}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            alt={title}
            className={cn(
              'w-full h-full object-contain bg-secondary/20',
              'transition-transform duration-700 ease-in-out',
              isHovered ? 'scale-110' : 'scale-100'
            )}
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex space-x-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-full hover:bg-primary/10"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
