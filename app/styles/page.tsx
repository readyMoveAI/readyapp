'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import { useSideNav } from '../components/SideNavContext';

// Navigation icons for SideNav demo
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

export default function StylesPage() {
  const [sideNavVariant, setSideNavVariant] = useState<'default' | 'minimal' | 'dark'>('default');
  const [sideNavWidth, setSideNavWidth] = useState<'sm' | 'md' | 'lg'>('md');
  const { isCollapsed, setIsCollapsed, setWidth, setIsActive } = useSideNav();
  
  
  // Update context when width changes
  useEffect(() => {
    setWidth(sideNavWidth);
  }, [sideNavWidth, setWidth]);

  // Get margin class based on sidebar width
  const getMarginClass = () => {
    if (isCollapsed) return 'ml-16';
    
    switch (sideNavWidth) {
      case 'sm':
        return 'ml-48';
      case 'lg':
        return 'ml-80';
      default:
        return 'ml-64';
    }
  };

  const sampleSideNavItems = [
    {
      label: 'Home',
      href: '/styles',
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
    <div className="min-h-screen bg-background text-text">
      {/* SideNav Component */}
      <SideNav
        items={sampleSideNavItems}
        variant={sideNavVariant}
        width={sideNavWidth}
        isCollapsible={true}
        defaultCollapsed={false}
        onCollapseChange={(collapsed) => {
          setIsCollapsed(collapsed);
        }}
      />

      {/* Main Content */}
      <div className={`${getMarginClass()} transition-all duration-300 ease-in-out`}>
        <div className="spacing-2xl">
          <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-4">Ready Design System</h1>
            <p className="text-tagline text-neutral-dark">
              A comprehensive showcase of our branded colors, typography, and components
            </p>
          </header>

          {/* Navbar Component Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-pine">Navigation Component</h2>
            
            <div className="space-y-8">
              {/* Default Variant */}
              <div>
                <h3 className="mb-4 text-strawberry">Default Navbar</h3>
                <p className="text-medium mb-4 text-neutral-dark">
                  The default navbar variant with foreground background and pine accent colors.
                </p>
                <div className="material-card overflow-hidden">
                  <Navbar 
                    variant="default"
                    items={[
                      { label: 'Home', href: '/', isActive: false },
                      { label: 'About', href: '/about', isActive: true },
                      { label: 'Services', href: '/services', isActive: false },
                      { label: 'Contact', href: '/contact', isActive: false },
                    ]}
                  />
                </div>
              </div>

              {/* Minimal Variant */}
              <div>
                <h3 className="mb-4 text-strawberry">Minimal Navbar</h3>
                <p className="text-medium mb-4 text-neutral-dark">
                  A clean minimal variant with background color and subtle borders.
                </p>
                <div className="material-card overflow-hidden">
                  <Navbar 
                    variant="minimal"
                    items={[
                      { label: 'Dashboard', href: '/dashboard', isActive: true },
                      { label: 'Analytics', href: '/analytics', isActive: false },
                      { label: 'Settings', href: '/settings', isActive: false },
                    ]}
                  />
                </div>
              </div>

              {/* Dark Variant */}
              <div>
                <h3 className="mb-4 text-strawberry">Dark Navbar</h3>
                <p className="text-medium mb-4 text-neutral-dark">
                  A dark variant using pine-dark background with white text and accents.
                </p>
                <div className="material-card-elevated overflow-hidden">
                  <Navbar 
                    variant="dark"
                    logo={{ href: '/' }}
                    items={[
                      { label: 'Projects', href: '/projects', isActive: false },
                      { label: 'Team', href: '/team', isActive: true },
                      { label: 'Reports', href: '/reports', isActive: false },
                      { label: 'Admin', href: '/admin', isActive: false },
                    ]}
                  />
                </div>
              </div>

              {/* Usage Code Example */}
              <div className="material-card spacing-lg">
                <h4 className="mb-4 text-strawberry">Usage Example</h4>
                <pre className="text-small bg-neutral-darker text-white spacing-md rounded-material-md overflow-x-auto">
{`import Navbar from '../components/Navbar';

// Basic usage
<Navbar />

// With custom props
<Navbar 
  variant="dark"
  logo={{ href: '/' }}
  items={[
    { label: 'Home', href: '/', isActive: true },
    { label: 'About', href: '/about', isActive: false },
  ]}
/>`}
                </pre>
              </div>
            </div>
          </section>

          {/* SideNav Component Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-pine">SideNav Component</h2>
            
            <div className="space-y-8">
              {/* Interactive Demo */}
              <div>
                <h3 className="mb-4 text-strawberry">Interactive Demo</h3>
                <p className="text-medium mb-4 text-neutral-dark">
                  The SideNav component is currently active on this page. Use the controls below to customize its appearance.
                </p>
                
                <div className="material-card spacing-lg">
                  <h4 className="mb-4 text-strawberry">Customization Options</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Variant Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Variant
                      </label>
                      <select
                        value={sideNavVariant}
                        onChange={(e) => setSideNavVariant(e.target.value as 'default' | 'minimal' | 'dark')}
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
                        value={sideNavWidth}
                        onChange={(e) => setSideNavWidth(e.target.value as 'sm' | 'md' | 'lg')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="sm">Small (192px)</option>
                        <option value="md">Medium (256px)</option>
                        <option value="lg">Large (320px)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Code Example */}
              <div className="material-card spacing-lg">
                <h4 className="mb-4 text-strawberry">Implementation Example</h4>
                
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
          </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-pine">Typography</h2>
          
          {/* Headings */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Headings</h3>
            <div className="space-y-4">
              <div>
                <h1>Heading 1 - Crete Round</h1>
                <p className="text-small text-neutral">Desktop: 52px / Mobile: 40px • Line Height: 120%</p>
              </div>
              <div>
                <h2>Heading 2 - Crete Round</h2>
                <p className="text-small text-neutral">Desktop: 44px / Mobile: 32px • Line Height: 120%</p>
              </div>
              <div>
                <h3>Heading 3 - Crete Round</h3>
                <p className="text-small text-neutral">Desktop: 36px / Mobile: 24px • Line Height: 130%</p>
              </div>
              <div>
                <h4>Heading 4 - Crete Round</h4>
                <p className="text-small text-neutral">Desktop: 28px / Mobile: 20px • Line Height: 140%</p>
              </div>
              <div>
                <h5>Heading 5 - Crete Round</h5>
                <p className="text-small text-neutral">Desktop: 22px / Mobile: 18px • Line Height: 140%</p>
              </div>
              <div>
                <h6>Heading 6 - Crete Round</h6>
                <p className="text-small text-neutral">Desktop: 16px / Mobile: 16px • Line Height: 150%</p>
              </div>
            </div>
          </div>

          {/* Text Sizes */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Text Sizes - Montserrat</h3>
            <div className="space-y-4">
              <div>
                <p className="text-tagline">Tagline Text - 22px • Line Height: 150%</p>
                <p className="text-small text-neutral">Perfect for taglines and important callouts</p>
              </div>
              <div>
                <p className="text-large">Large Text - 18px • Line Height: 150%</p>
                <p className="text-small text-neutral">Great for prominent body text and introductions</p>
              </div>
              <div>
                <p className="text-medium">Medium Text - 16px • Line Height: 150%</p>
                <p className="text-small text-neutral">Standard body text size for most content</p>
              </div>
              <div>
                <p className="text-regular">Regular Text - 14px • Line Height: 150%</p>
                <p className="text-small text-neutral">Smaller body text for secondary information</p>
              </div>
              <div>
                <p className="text-small">Small Text - 12px • Line Height: 150%</p>
                <p className="text-small text-neutral">For captions, labels, and fine print</p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Font Weights</h3>
            <div className="space-y-2">
              <p className="text-large font-light">Light (300) - Montserrat Light</p>
              <p className="text-large font-normal">Normal (400) - Montserrat Regular</p>
              <p className="text-large font-medium">Medium (500) - Montserrat Medium</p>
              <p className="text-large font-semibold">Semibold (600) - Montserrat Semibold</p>
              <p className="text-large font-bold">Bold (700) - Montserrat Bold</p>
              <p className="text-large font-extrabold">Extrabold (800) - Montserrat Extrabold</p>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-pine">Color Palette</h2>
          
          {/* Neutrals */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Neutrals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-white border border-neutral-light rounded-lg mb-2"></div>
                <p className="text-small font-medium">White</p>
                <p className="text-small text-neutral">#FFFFFF</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-lightest rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lightest</p>
                <p className="text-small text-neutral">#F2F2F2</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-lighter rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lighter</p>
                <p className="text-small text-neutral">#D8D8D8</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-light rounded-lg mb-2"></div>
                <p className="text-small font-medium">Light</p>
                <p className="text-small text-neutral">#B2B2B2</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Neutral</p>
                <p className="text-small text-neutral">#7F7F7F</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-dark rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Dark</p>
                <p className="text-small text-neutral">#4C4C4C</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-darker rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darker</p>
                <p className="text-small text-neutral">#191919</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral-darkest rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darkest</p>
                <p className="text-small text-neutral">#000000</p>
              </div>
            </div>
          </div>

          {/* Pine Green */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Pine Green</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-pine-lightest rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lightest</p>
                <p className="text-small text-neutral">#E5F1F0</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine-lighter rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lighter</p>
                <p className="text-small text-neutral">#CCE4E1</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine-light rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Light</p>
                <p className="text-small text-neutral">#4CA197</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Pine</p>
                <p className="text-small text-neutral">#00796B</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine-dark rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Dark</p>
                <p className="text-small text-neutral">#006055</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine-darker rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darker</p>
                <p className="text-small text-neutral">#00302A</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-pine-darkest rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darkest</p>
                <p className="text-small text-neutral">#002420</p>
              </div>
            </div>
          </div>

          {/* Wild Strawberry */}
          <div className="mb-12">
            <h3 className="mb-6 text-strawberry">Wild Strawberry</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-lightest rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lightest</p>
                <p className="text-small text-neutral">#FFEBF2</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-lighter rounded-lg mb-2"></div>
                <p className="text-small font-medium">Lighter</p>
                <p className="text-small text-neutral">#FFD8E5</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-light rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Light</p>
                <p className="text-small text-neutral">#FF79A6</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Strawberry</p>
                <p className="text-small text-neutral">#FF4081</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-dark rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Dark</p>
                <p className="text-small text-neutral">#CC3367</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-darker rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darker</p>
                <p className="text-small text-neutral">#661933</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-strawberry-darkest rounded-lg mb-2"></div>
                <p className="text-small font-medium text-white">Darkest</p>
                <p className="text-small text-neutral">#4C1326</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Schemes */}
        <section className="mb-16">
          <h2 className="mb-8 text-pine">Color Schemes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Scheme 1 - Default Light */}
            <div className="p-6 bg-white border border-neutral-light rounded-lg">
              <h4 className="mb-4 text-neutral-darkest">Color Scheme 1 - Default Light</h4>
              <div className="space-y-2 text-regular">
                <p><span className="font-medium">Background:</span> White (#FFFFFF)</p>
                <p><span className="font-medium">Foreground:</span> Neutral Lightest (#F2F2F2)</p>
                <p><span className="font-medium">Text:</span> Neutral Darkest (#000000)</p>
                <p><span className="font-medium">Accent:</span> <span className="text-pine font-medium">Pine Green (#00796B)</span></p>
              </div>
            </div>

            {/* Scheme 2 - Pine Light */}
            <div className="p-6 bg-pine-lighter text-neutral-darkest rounded-lg">
              <h4 className="mb-4">Color Scheme 2 - Pine Light</h4>
              <div className="space-y-2 text-regular">
                <p><span className="font-medium">Background:</span> Pine Lighter (#CCE4E1)</p>
                <p><span className="font-medium">Foreground:</span> Pine Lightest (#E5F1F0)</p>
                <p><span className="font-medium">Text:</span> Neutral Darkest (#000000)</p>
                <p><span className="font-medium">Accent:</span> <span className="text-pine font-medium">Pine Green (#00796B)</span></p>
              </div>
            </div>

            {/* Scheme 3 - Pine Dark */}
            <div className="p-6 bg-pine-dark text-white rounded-lg">
              <h4 className="mb-4">Color Scheme 3 - Pine Dark</h4>
              <div className="space-y-2 text-regular">
                <p><span className="font-medium">Background:</span> Pine Dark (#006055)</p>
                <p><span className="font-medium">Foreground:</span> Pine Green (#00796B)</p>
                <p><span className="font-medium">Text:</span> White (#FFFFFF)</p>
                <p><span className="font-medium">Accent:</span> <span className="font-medium">White (#FFFFFF)</span></p>
              </div>
            </div>

            {/* Scheme 4 - Pine Minimal */}
            <div className="p-6 bg-pine-lightest text-neutral-darkest rounded-lg">
              <h4 className="mb-4">Color Scheme 4 - Pine Minimal</h4>
              <div className="space-y-2 text-regular">
                <p><span className="font-medium">Background:</span> Pine Lightest (#E5F1F0)</p>
                <p><span className="font-medium">Foreground:</span> Pine Lighter (#CCE4E1)</p>
                <p><span className="font-medium">Text:</span> Neutral Darkest (#000000)</p>
                <p><span className="font-medium">Accent:</span> <span className="text-pine font-medium">Pine Green (#00796B)</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="mb-8 text-pine">Usage Examples</h2>
          
          <div className="space-y-8">
            {/* Card Example */}
            <div className="material-card spacing-lg">
              <h4 className="mb-4 text-strawberry">Example Card Component</h4>
              <p className="text-medium mb-4">
                This card demonstrates how our typography and colors work together. 
                The heading uses <span className="font-semibold">Crete Round</span> while 
                the body text uses <span className="font-medium">Montserrat</span>.
              </p>
              <div className="flex gap-md">
                <button className="btn-material btn-material-primary ripple">
                  Primary Action
                </button>
                <button className="btn-material btn-material-secondary ripple">
                  Secondary Action
                </button>
              </div>
            </div>

            {/* Text Hierarchy Example */}
            <div className="material-card spacing-lg">
              <h3 className="mb-4 text-pine">Content Hierarchy Example</h3>
              <p className="text-tagline font-medium mb-4 text-strawberry">
                This is a tagline that introduces the content below
              </p>
              <p className="text-large mb-4">
                This is large body text that provides important information and draws attention.
              </p>
              <p className="text-medium mb-4">
                This is medium body text for standard content. It's readable and comfortable for longer passages.
              </p>
              <p className="text-regular mb-2 text-neutral-dark">
                This is regular text for secondary information and details.
              </p>
              <p className="text-small text-neutral">
                This is small text for captions, labels, and fine print.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-light">
          <p className="text-regular text-neutral text-center">
            Ready Design System • Built with Tailwind CSS v4
            <span> • </span>  
            <span className="text-pine font-medium">Crete Round</span> 
            <span> & </span> 
            <span className="text-strawberry font-medium">Montserrat</span>
          </p>
        </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
