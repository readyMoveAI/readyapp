'use client';

import Image from 'next/image';

export default function NotFound() {

  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            {/* Large 404 Text */}
            <h1 className="text-8xl md:text-9xl font-extrabold text-pine-lighter select-none mb-6">
              404
            </h1>
            
            {/* Water Buffalo Logo */}
            <div className="flex justify-center">
              <Image
                src="/waterbuffalo.svg"
                alt="Water Buffalo"
                width={120}
                height={120}
                className="h-24 w-auto opacity-80"
                priority
              />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="mb-4 text-pine">Page Not Found</h2>
            <p className="text-large text-neutral-dark mb-4">
              Oops! The page you're looking for seems to have moved or doesn't exist.
            </p>
            <p className="text-medium text-neutral">
              Don't worry, even the best moving plans sometimes need adjustments. 
              Let's get you back on track.
            </p>
          </div>


        </div>
      </main>


    </div>
  );
}
