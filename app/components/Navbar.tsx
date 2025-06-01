'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavbarProps {
  logo?: {
    href?: string;
  };
  items?: NavItem[];
  variant?: 'default' | 'minimal' | 'dark';
  className?: string;
  hideLogo?: boolean;
  sideNavWidth?: 'sm' | 'md' | 'lg' | 'collapsed';
}

export default function Navbar({ 
  logo = { href: '/' },
  items = [
    { label: 'Home', href: '/' },
    { label: 'Styles', href: '/styles' },
    { label: 'City', href: '/city' },
  ],
  variant = 'default',
  className = '',
  hideLogo = false,
  sideNavWidth
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine if a nav item is active based on current pathname
  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-background elevation-1 border-b border-neutral-light';
      case 'dark':
        return 'bg-pine-dark text-white elevation-2 border-b border-pine';
      default:
        return 'surface-2 border-b border-neutral-light';
    }
  };

  const getLinkClasses = (isActive: boolean) => {
    const baseClasses = 'text-regular font-medium transition-colors duration-200';
    
    if (variant === 'dark') {
      return `${baseClasses} ${
        isActive 
          ? 'text-white border-b-2 border-white pb-1' 
          : 'text-pine-lightest hover:text-white'
      }`;
    }
    
    return `${baseClasses} ${
      isActive 
        ? 'text-pine-darkest border-b-2 border-pine-darkest pb-1' 
        : 'text-neutral-darkest hover:text-pine-darkest'
    }`;
  };

  const getMobileLinkClasses = (isActive: boolean) => {
    const baseClasses = 'block px-4 py-3 text-medium font-medium transition-colors duration-200';
    
    if (variant === 'dark') {
      return `${baseClasses} ${
        isActive 
          ? 'text-white bg-pine border-l-4 border-white' 
          : 'text-pine-lightest hover:text-white hover:bg-pine'
      }`;
    }
    
    return `${baseClasses} ${
      isActive 
        ? 'text-pine bg-pine-lightest border-l-4 border-pine' 
        : 'text-neutral-dark hover:text-pine hover:bg-pine-lightest'
    }`;
  };

  const getLogoFilter = () => {
    if (variant === 'dark') {
      return 'brightness(0) invert(1)';
    }
    return 'none';
  };

  const getHamburgerClasses = () => {
    return variant === 'dark' ? 'text-white' : 'text-neutral-dark';
  };

  const getNavbarMargin = () => {
    if (!sideNavWidth) return '';
    
    switch (sideNavWidth) {
      case 'sm':
        return 'ml-48';
      case 'lg':
        return 'ml-80';
      case 'collapsed':
        return 'ml-16';
      default:
        return 'ml-64';
    }
  };

  return (
    <nav className={`${getVariantClasses()} ${className} ${getNavbarMargin()} transition-all duration-300 ease-in-out`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {!hideLogo && (
            <div className="flex-shrink-0">
              <Link href={logo.href || '/'} className="block">
                <Image
                  src="/ready..svg"
                  alt="Ready"
                  width={80}
                  height={30}
                  className="h-8 w-auto transition-all duration-200 hover:opacity-80"
                  style={{ filter: getLogoFilter() }}
                  priority
                />
              </Link>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClasses(isItemActive(item.href))}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${getHamburgerClasses()} hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-pine focus:ring-offset-2 p-2`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${variant === 'dark' ? 'bg-pine-darker' : 'bg-background'} border-t border-neutral-light`}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getMobileLinkClasses(isItemActive(item.href))}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
