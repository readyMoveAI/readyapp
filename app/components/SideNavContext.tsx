'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SideNavContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  width: 'sm' | 'md' | 'lg';
  setWidth: (width: 'sm' | 'md' | 'lg') => void;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined);

export function SideNavProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState<'sm' | 'md' | 'lg'>('md');
  const [isActive, setIsActive] = useState(false);

  return (
    <SideNavContext.Provider value={{
      isCollapsed,
      setIsCollapsed,
      width,
      setWidth,
      isActive,
      setIsActive
    }}>
      {children}
    </SideNavContext.Provider>
  );
}

export function useSideNav() {
  const context = useContext(SideNavContext);
  if (context === undefined) {
    throw new Error('useSideNav must be used within a SideNavProvider');
  }
  return context;
}
