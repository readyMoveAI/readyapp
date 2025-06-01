import Navbar from '../components/Navbar';

export default function StylesPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navbar Component Showcase */}
      <Navbar 
        items={[
          { label: 'Home', href: '/', isActive: false },
          { label: 'Styles', href: '/styles', isActive: true },
          { label: 'City', href: '/city', isActive: false },
        ]}
      />
      
      <div className="p-8">
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
                <div className="border border-neutral-light rounded-lg overflow-hidden">
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
                <div className="border border-neutral-light rounded-lg overflow-hidden">
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
                <div className="border border-neutral-light rounded-lg overflow-hidden">
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
              <div className="p-6 bg-foreground rounded-lg border border-neutral-light">
                <h4 className="mb-4 text-strawberry">Usage Example</h4>
                <pre className="text-small bg-neutral-darker text-white p-4 rounded overflow-x-auto">
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
            <div className="p-6 bg-foreground rounded-lg border border-neutral-light">
              <h4 className="mb-4 text-strawberry">Example Card Component</h4>
              <p className="text-medium mb-4">
                This card demonstrates how our typography and colors work together. 
                The heading uses <span className="font-semibold">Crete Round</span> while 
                the body text uses <span className="font-medium">Montserrat</span>.
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-pine text-white text-regular font-medium rounded-lg hover:bg-pine-dark transition-colors">
                  Primary Action
                </button>
                <button className="px-4 py-2 bg-strawberry text-white text-regular font-medium rounded-lg hover:bg-strawberry-dark transition-colors">
                  Secondary Action
                </button>
              </div>
            </div>

            {/* Text Hierarchy Example */}
            <div className="p-6 bg-foreground rounded-lg border border-neutral-light">
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
            Ready Design System • Built with Tailwind CSS v4 • 
            <span className="text-pine font-medium">Crete Round</span> & 
            <span className="text-strawberry font-medium">Montserrat</span>
          </p>
        </footer>
        </div>
      </div>
    </div>
  );
}
