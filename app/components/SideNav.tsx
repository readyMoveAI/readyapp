'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface SideNavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: SideNavItem[];
}

interface SideNavProps {
  items?: SideNavItem[];
  variant?: 'default' | 'minimal' | 'dark';
  className?: string;
  isCollapsible?: boolean;
  defaultCollapsed?: boolean;
  logo?: {
    src?: string;
    alt?: string;
    href?: string;
    width?: number;
    height?: number;
  };
  width?: 'sm' | 'md' | 'lg';
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export default function SideNav({
  items = [
    { label: 'Dashboard', href: '/' },
    { label: 'Styles', href: '/styles' },
    { label: 'City', href: '/city' },
  ],
  variant = 'default',
  className = '',
  isCollapsible = true,
  defaultCollapsed = false,
  logo = {
    src: '/ready..svg',
    alt: 'Ready',
    href: '/',
    width: 80,
    height: 30,
  },
  width = 'md',
  onCollapseChange
}: SideNavProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  // Determine if a nav item is active based on current pathname
  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Toggle expanded state for items with children
  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const getWidthClasses = () => {
    if (isCollapsed) return 'w-16';
    
    switch (width) {
      case 'sm':
        return 'w-48';
      case 'lg':
        return 'w-80';
      default:
        return 'w-64';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-background border-r border-neutral-light';
      case 'dark':
        return 'bg-pine-dark text-white border-r border-pine';
      default:
        return 'surface-2 border-r border-neutral-light';
    }
  };

  const getLinkClasses = (isActive: boolean, hasChildren: boolean = false) => {
    const baseClasses = `flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isCollapsed ? 'justify-center' : 'justify-between'
    }`;
    
    if (variant === 'dark') {
      return `${baseClasses} ${
        isActive 
          ? 'text-white bg-pine border-r-4 border-white' 
          : 'text-pine-lightest hover:text-white hover:bg-pine'
      }`;
    }
    
    return `${baseClasses} ${
      isActive 
        ? 'text-pine bg-pine-lightest border-r-4 border-pine' 
        : 'text-neutral-dark hover:text-pine hover:bg-pine-lightest'
    }`;
  };

  const getLogoFilter = () => {
    if (variant === 'dark') {
      return 'brightness(0) invert(1)';
    }
    return 'none';
  };

  const renderNavItem = (item: SideNavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.href);
    const isActive = isItemActive(item.href);

    return (
      <div key={item.href}>
        {hasChildren ? (
          <button
            onClick={() => toggleExpanded(item.href)}
            className={`${getLinkClasses(isActive, hasChildren)} w-full text-left`}
            style={{ paddingLeft: `${1 + level * 0.5}rem` }}
          >
            <div className="flex items-center">
              {item.icon && (
                <span className={`${isCollapsed ? '' : 'mr-3'} flex-shrink-0`}>
                  {item.icon}
                </span>
              )}
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </div>
            {!isCollapsed && (
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
        ) : (
          <Link
            href={item.href}
            className={getLinkClasses(isActive)}
            style={{ paddingLeft: `${1 + level * 0.5}rem` }}
            title={isCollapsed ? item.label : undefined}
          >
            <div className="flex items-center">
              {item.icon && (
                <span className={`${isCollapsed ? '' : 'mr-3'} flex-shrink-0`}>
                  {item.icon}
                </span>
              )}
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </div>
          </Link>
        )}
        
        {/* Render children if expanded */}
        {hasChildren && isExpanded && !isCollapsed && (
          <div className="ml-4">
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`${getWidthClasses()} ${getVariantClasses()} ${className} h-screen flex flex-col transition-all duration-300 ease-in-out fixed left-0 top-0 z-40`}>
      {/* Header with centered logo and collapse button */}
      <div className="flex flex-col items-center p-4 border-b border-neutral-light">
        {/* Centered Logo */}
        {!isCollapsed && logo.src && (
          <Link href={logo.href || '/'} className="block mb-3">
            <Image
              src={logo.src}
              alt={logo.alt || 'Logo'}
              width={logo.width || 80}
              height={logo.height || 30}
              className="h-8 w-auto transition-all duration-200 hover:opacity-80"
              style={{ filter: getLogoFilter() }}
              priority
            />
          </Link>
        )}
        
        {/* Collapse Button */}
        {isCollapsible && (
          <button
            onClick={() => {
              const newCollapsed = !isCollapsed;
              setIsCollapsed(newCollapsed);
              onCollapseChange?.(newCollapsed);
            }}
            className={`p-2 rounded-md transition-colors duration-200 ${
              variant === 'dark' 
                ? 'text-white hover:bg-pine' 
                : 'text-neutral-dark hover:bg-neutral-light'
            }`}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                isCollapsed ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1">
          {items.map((item) => renderNavItem(item))}
        </div>
      </nav>

      {/* Footer (optional) */}
      {!isCollapsed && (
        <div className="p-4 border-t border-neutral-light">
          <div className={`text-xs ${
            variant === 'dark' ? 'text-pine-lightest' : 'text-neutral-medium'
          }`}>
            Ready App
          </div>
        </div>
      )}
    </div>
  );
}
