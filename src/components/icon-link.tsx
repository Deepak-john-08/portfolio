import type { LucideProps } from 'lucide-react'; // Changed to LucideProps for flexibility
import Link from 'next/link';
import React from 'react'; // Import React for React.cloneElement
import { cn } from '@/lib/utils'; // Import cn utility

interface IconLinkProps {
  href: string;
  icon: React.ReactElement<LucideProps>; // Use LucideProps
  text: string;
  className?: string;
}

export function IconLink({ href, icon, text, className }: IconLinkProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn(
        "flex items-center space-x-3 text-foreground hover:text-primary transition-colors group p-3 rounded-lg hover:bg-white/5",
        className
      )}
    >
      {React.cloneElement(icon, { className: cn("w-6 h-6 text-accent group-hover:text-primary transition-colors", icon.props.className) })}
      <span className="font-body text-lg">{text}</span>
    </Link>
  );
}
