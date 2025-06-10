'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ name, className }) => {
  const [key, setKey] = useState(0); // State to force re-render and animation
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Trigger animation on mount and when name or className changes
    setKey(prevKey => prevKey + 1);
  }, [name, className]);

 return (
 <div className={cn('overflow-hidden py-2', className)}>
 <h1
 className={cn(
 'font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary whitespace-nowrap',
 )}
        key={key} // Use key to force re-render and re-trigger animation
        ref={nameRef}
 aria-label={name}
 >
 {name.split('').map((char, index) => (
 <span
 key={index}
 className="inline-block animate-streamInChar"
 style={{ animationDelay: `${index * 0.07}s` }}
      >
 {char === ' ' ? '\u00A0' : char}
 </span>
 ))}
 </h1>
 </div>
  );
};

export default AnimatedName;
