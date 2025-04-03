
import { useEffect, useState, useRef } from 'react';

// Animation types
type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export const useScrollAnimation = (
  threshold = 0.1,
  direction: AnimationDirection = 'up'
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  let animationClass = '';

  switch (direction) {
    case 'up':
      animationClass = 'from-bottom';
      break;
    case 'down':
      animationClass = 'from-top';
      break;
    case 'left':
      animationClass = 'from-right';
      break;
    case 'right':
      animationClass = 'from-left';
      break;
    default:
      animationClass = '';
  }

  return {
    ref,
    className: `animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`,
  };
};

export const useTypewriterEffect = (
  text: string,
  typingSpeed = 100,
  startDelay = 500
) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;
    
    // Reset state when text changes
    setDisplayText('');
    setIsTypingComplete(false);
    
    const startTyping = () => {
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, typingSpeed);
    };

    const delay = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, [text, typingSpeed, startDelay]);

  return { displayText, isTypingComplete };
};

export const useMouseParallax = (strength = 0.05) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);
  
  return position;
};

export const useParallaxScroll = (speed = 0.1) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return offset;
};
