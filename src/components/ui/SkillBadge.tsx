
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  index: number;
  iconBg?: string;
}

const SkillBadge = ({ name, icon, color = 'bg-primary', index, iconBg = 'bg-primary/10' }: SkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-border shadow-sm',
        'transition-all duration-300 ease-in-out animate-in',
        isHovered ? 'shadow-md -translate-y-1 border-primary/30' : ''
      )}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className={cn('flex-shrink-0 w-8 h-8 rounded-md', iconBg, 'flex items-center justify-center')}>
          {icon}
        </div>
      )}
      <span className="text-foreground font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;
