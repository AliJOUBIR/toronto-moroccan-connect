
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  return (
    <div className={cn('logo-animation relative', sizeClasses[size], className)}>
      {/* Basketball-Tagine Hybrid Logo */}
      <div className="relative w-full h-full">
        {/* Basketball Base */}
        <div className="absolute inset-0 bg-orange-500 rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-1/2 top-0 bg-black/10"></div>
          <div className="absolute w-[90%] h-[90%] rounded-full border border-black border-dashed"></div>
          <div className="absolute w-1/2 h-full border-r border-black"></div>
          <div className="absolute w-full h-1/2 border-b border-black"></div>
        </div>
        
        {/* Tagine Top */}
        <div className="tagine absolute -top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 transition-transform">
          <div className="w-full h-full bg-morocco-red rounded-t-full border-2 border-black"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-1/4 h-1/4 bg-morocco-green rounded-full border-2 border-black"></div>
        </div>
        
        {/* Moroccan Star */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-morocco-green text-[8px]">★</div>
      </div>
    </div>
  );
};

export default Logo;
