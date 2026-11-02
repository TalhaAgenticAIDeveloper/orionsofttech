import React from 'react';
import * as Icons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = 'w-5 h-5',
  size,
}) => {
  // Normalize lookup
  const cleanName = name.trim();
  
  // Direct lookup
  // @ts-expect-error Lucide icons dynamic index
  const IconComponent = Icons[cleanName] || Icons[`${cleanName}Icon`];

  if (!IconComponent) {
    return <HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};

