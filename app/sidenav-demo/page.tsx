'use client';

import { useState, useEffect } from 'react';
import SideNav from '../components/SideNav';
import { useSideNav } from '../components/SideNavContext';

// Navigation icons
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const RelocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M9 7l3-3 3 3M4 10h16v11H4V10z" />
  </svg>
);

const TasksIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const SettlingIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const NotificationsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const AccountIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function SideNavDemo() {
  const [currentVariant, setCurrentVariant] = useState<'default' | 'minimal' | 'dark'>('default');
  const { isCollapsed, setIsCollapsed, width, setWidth, setIsActive } = useSideNav();
  
  // Set the current width from context
  const [currentWidth, setCurrentWidth] = useState<'sm' | 'md' | 'lg'>(width);
  
  // Activate the sidebar when this component mounts
  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, [setIsActive]);
  
  // Update context when width changes
  useEffect(() => {
    setWidth(currentWidth);
  }, [currentWidth, setWidth]);

  // Get margin class based on sidebar width
  const getMarginClass = () => {
    if (isCollapsed) return 'ml-16';
    
    switch (currentWidth) {
      case 'sm':
        return 'ml-48';
      case 'lg':
        return 'ml-80';
      default:
        return 'ml-64';
    }
  };

  // Get navbar width prop
  const getNavbarWidth = () => {
    if (isCollapsed) return 'collapsed';
    return currentWidth;
  };

  const sampleItems = [
    {
      label: 'Home',
      href: '/sidenav-demo',
      icon: <HomeIcon />
    },
    {
      label: 'Relocation Prep',
      href: '/relocation-prep',
      icon: <RelocationIcon />
    },
    {
      label: 'Tasks',
      href: '/tasks',
      icon: <TasksIcon />
    },
    {
      label: 'Settling In',
      href: '/settling-in',
      icon: <SettlingIcon />
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: <NotificationsIcon />
    },
    {
      label: 'Account',
      href: '/account',
      icon: <AccountIcon />
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SideNav Component */}
      <SideNav
        items={sampleItems}
        variant={currentVariant}
        width={currentWidth}
        isCollapsible={true}
        defaultCollapsed={false}
        onCollapseChange={(collapsed) => {
          setIsCollapsed(collapsed);
        }}
      />

      {/* Main Content */}
      <div className={`${getMarginClass()} pt-24 p-8 transition-all duration-300 ease-in-out`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">SideNav Component Demo</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Customization Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Variant Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Variant
                  </label>
                  <select
                    value={currentVariant}
                    onChange={(e) => setCurrentVariant(e.target.value as 'default' | 'minimal' | 'dark')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="default">Default</option>
                    <option value="minimal">Minimal</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                {/* Width Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width
                  </label>
                  <select
                    value={currentWidth}
                    onChange={(e) => setCurrentWidth(e.target.value as 'sm' | 'md' | 'lg')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="sm">Small (192px)</option>
                    <option value="md">Medium (256px)</option>
                    <option value="lg">Large (320px)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Implementation Example</h2>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Here's how to add the SideNav component to your page:
                </p>
                
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{`'use client';

import { useState, useEffect } from 'react';
import SideNav from '../components/SideNav';
import { useSideNav } from '../components/SideNavContext';

// Define your navigation items
const navigationItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: <HomeIcon />
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: <ChartIcon />,
    children: [
      { label: 'Overview', href: '/analytics/overview' },
      { label: 'Reports', href: '/analytics/reports' }
    ]
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />
  }
];

export default function MyPage() {
  const { setIsActive } = useSideNav();
  
  // Activate sidebar when component mounts
  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, [setIsActive]);

  return (
    <div className="min-h-screen">
      <SideNav
        items={navigationItems}
        variant="default"  // or 'minimal' | 'dark'
        width="md"         // or 'sm' | 'lg'
        isCollapsible={true}
      />
      
      {/* Your page content with proper margin */}
      <div className="ml-64 p-8">
        <h1>Your Page Content</h1>
      </div>
    </div>
  );
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">💡 Key Points:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use <code className="bg-blue-100 px-1 rounded">useSideNav()</code> hook to manage sidebar state</li>
                    <li>• Call <code className="bg-blue-100 px-1 rounded">setIsActive(true)</code> to enable navbar logo coordination</li>
                    <li>• Add appropriate margin to your content (ml-64, ml-48, or ml-80)</li>
                    <li>• Icons are optional but recommended for better UX</li>
                    <li>• Nested navigation items support unlimited depth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
