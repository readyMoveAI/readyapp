'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import { useSideNav } from './SideNavContext';

export default function LayoutNavbar() {
  const pathname = usePathname();
  const { isCollapsed, width, isActive } = useSideNav();
  
  // Check if we're on a page that uses SideNav
  const usesSideNav = pathname === '/sidenav-demo' && isActive;
  
  // Only hide logo when sidebar is expanded (not collapsed)
  const shouldHideLogo = usesSideNav && !isCollapsed;
  
  const getSideNavWidth = () => {
    if (!usesSideNav) return undefined;
    if (isCollapsed) return 'collapsed';
    return width;
  };
  
  return (
    <Navbar 
      hideLogo={shouldHideLogo}
      sideNavWidth={getSideNavWidth()}
      items={[
        { label: 'Home', href: '/' },
        { label: 'Styles', href: '/styles' },
        { label: 'City', href: '/city' },
        { label: 'SideNav Demo', href: '/sidenav-demo' },
      ]}
    />
  );
}
