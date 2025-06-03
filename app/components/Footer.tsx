'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  variant?: 'default' | 'minimal' | 'dark';
  className?: string;
}

export default function Footer({ 
  variant = 'default',
  className = ''
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-background border-t border-neutral-light';
      case 'dark':
        return 'bg-pine-dark text-white border-t border-pine';
      default:
        return 'surface-2 border-t border-neutral-light';
    }
  };

  const getLinkClasses = () => {
    const baseClasses = 'text-regular font-medium transition-colors duration-200 hover:underline';
    
    if (variant === 'dark') {
      return `${baseClasses} text-pine-lightest hover:text-white`;
    }
    
    return `${baseClasses} text-neutral-dark hover:text-pine-darkest`;
  };

  const getTextClasses = () => {
    if (variant === 'dark') {
      return 'text-pine-lightest';
    }
    
    return 'text-neutral-dark';
  };

  const getLogoFilter = () => {
    if (variant === 'dark') {
      return 'brightness(0) invert(1)';
    }
    return 'none';
  };

  return (
    <footer className={`${getVariantClasses()} ${className} mt-auto`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Empty left side */}
          <div className="hidden md:block md:flex-1"></div>

          {/* Logo and Company Info - Centered */}
          <div className="flex flex-col items-center space-y-2 order-1">
            <Link href="/" className="block">
              <Image
                src="/ready..svg"
                alt="Ready"
                width={80}
                height={30}
                className="h-8 w-auto transition-all duration-200 hover:opacity-80"
                style={{ filter: getLogoFilter() }}
              />
            </Link>
            <p className={`text-small ${getTextClasses()}`}>
              AI-Powered Moving Platform
            </p>
          </div>

          {/* Navigation Links and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-2 order-2 md:flex-1">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="/" className={getLinkClasses()}>
                Home
              </Link>
              <Link href="/styles" className={getLinkClasses()}>
                Styles
              </Link>
              <Link href="/city" className={getLinkClasses()}>
                City
              </Link>
              <Link href="/sidenav-demo" className={getLinkClasses()}>
                SideNav Demo
              </Link>
            </div>
            <p className={`text-small ${getTextClasses()}`}>
              © {currentYear} Ready. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
