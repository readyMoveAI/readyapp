"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="spacing-2xl">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="mb-4">Ready - AI-Powered Moving Platform</h1>
            <p className="text-tagline text-neutral-dark">
              An intelligent, AI-powered moving service designed to transform the traditionally stressful and complex moving process into a seamless, structured, and deeply personalized experience.
            </p>
          </header>
          
          <div className="material-card spacing-lg">
            <h2 className="mb-4 text-pine">Backend Connection Status</h2>
            <div className="spacing-md bg-pine-lightest rounded-material-lg">
              <p className="text-medium font-medium mb-2">Message from Flask Backend:</p>
              <p className="text-large text-pine">
                {message || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
