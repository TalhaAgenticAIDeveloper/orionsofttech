import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showLink?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'auto' | 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showLink = true,
  size = 'md',
  variant = 'auto',
}) => {
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16',
  };

  const content = (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      {variant === 'dark' ? (
        /* Always Dark Mode Logo (For Dark Footer or Dark Surfaces) */
        <img
          src="/images/orion-logo-dark.png"
          alt="Orion Software & Trading"
          className={`${sizeClasses[size]} w-auto object-contain`}
          width="198"
          height="64"
          loading="eager"
        />
      ) : variant === 'light' ? (
        /* Always Light Mode Logo */
        <img
          src="/images/orion-logo-light.png"
          alt="Orion Software & Trading"
          className={`${sizeClasses[size]} w-auto object-contain`}
          width="198"
          height="64"
          loading="eager"
        />
      ) : (
        /* Auto Theme Adaptive: Changes with Light/Dark mode (For Navbar) */
        <>
          {/* Light Theme: Dark Charcoal text on light navbar */}
          <img
            src="/images/orion-logo-light.png"
            alt="Orion Software & Trading"
            className={`${sizeClasses[size]} w-auto object-contain block dark:hidden`}
            width="198"
            height="64"
            loading="eager"
          />

          {/* Dark Theme: Crisp White text on dark navbar */}
          <img
            src="/images/orion-logo-dark.png"
            alt="Orion Software & Trading"
            className={`${sizeClasses[size]} w-auto object-contain hidden dark:block`}
            width="198"
            height="64"
            loading="eager"
          />
        </>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md transition-opacity hover:opacity-90"
        aria-label="Orion Software & Trading Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
};
