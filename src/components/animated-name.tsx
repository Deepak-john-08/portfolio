"use client";

import { cn } from '@/lib/utils';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ name, className }) => {
  return (
    <div className={cn("overflow-hidden py-2", className)}>
      <h1
        className={cn(
          "font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary whitespace-nowrap",
        )}
        aria-label={name}
      >
        {name.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-streamInChar"
            style={{ animationDelay: `${index * 0.07}s` }} // Adjusted delay for smoother/faster streaming
          >
            {char === ' ' ? '\u00A0' : char} {/* Handle spaces properly */}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedName;
