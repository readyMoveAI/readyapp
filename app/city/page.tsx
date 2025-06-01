"use client";
import { useState } from "react";

export default function CityPage() {
  const [searchInput, setSearchInput] = useState("");
  const [neighborhoods, setNeighborhoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchInput.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/generate_neighborhood_list?destination=${encodeURIComponent(searchInput)}`);
      const data = await response.json();
      setNeighborhoods(data.neighborhoods);
    } catch (error) {
      console.error("Error fetching neighborhoods:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="spacing-2xl">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="mb-4 text-pine">City Explorer</h1>
            <p className="text-tagline text-neutral-dark">
              Discover neighborhoods and get personalized recommendations for your move.
            </p>
          </header>

          <div className="material-card spacing-lg mb-8">
            <h2 className="mb-6 text-strawberry">Search Destinations</h2>
            <div className="flex flex-col sm:flex-row gap-md">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter a destination..."
                className="input-material flex-1"
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="btn-material btn-material-primary ripple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="material-card spacing-lg">
                <h3 className="mb-4 text-strawberry">{neighborhood.name}</h3>
                <div className="space-y-3">
                  {neighborhood.tasks.map((task: any, taskIndex: number) => (
                    <div key={taskIndex} className="material-card spacing-md bg-pine-lightest">
                      <p className="text-medium text-neutral-dark">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {neighborhoods.length === 0 && !loading && (
            <div className="material-card spacing-lg text-center">
              <h3 className="mb-4 text-neutral">No Results Yet</h3>
              <p className="text-medium text-neutral-dark">
                Enter a destination above to discover neighborhoods and get personalized moving recommendations.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
