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
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter a destination..."
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      <div>
        {neighborhoods.map((neighborhood, index) => (
          <div key={index} className="mb-4">
            <h2>{neighborhood.name}</h2>
            {neighborhood.tasks.map((task: any, taskIndex: number) => (
              <p key={taskIndex}>{task.description}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
