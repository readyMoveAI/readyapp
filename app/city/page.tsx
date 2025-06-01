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
    <div className="min-h-screen bg-background text-text p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="mb-4 text-pine">City Explorer</h1>
          <p className="text-large text-neutral-dark">
            Discover neighborhoods and get personalized recommendations for your move.
          </p>
        </header>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter a destination..."
              className="flex-1 px-4 py-3 text-medium border border-neutral-light rounded-lg bg-background text-text focus:outline-none focus:ring-2 focus:ring-pine focus:border-pine transition-colors"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-6 py-3 bg-pine text-white text-medium font-semibold rounded-lg hover:bg-pine-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pine focus:ring-offset-2"
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {neighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-foreground rounded-lg border border-neutral-light p-6">
              <h3 className="mb-4 text-strawberry">{neighborhood.name}</h3>
              <div className="space-y-2">
                {neighborhood.tasks.map((task: any, taskIndex: number) => (
                  <p key={taskIndex} className="text-medium text-neutral-dark">{task.description}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
