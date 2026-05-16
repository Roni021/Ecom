"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const path = pathname || '';
  const isHome = path === "/" || path === "";

  // Map different pages to different interactive gradient backgrounds
  const getGradientClass = (path: string): string => {
    // Normalize path
    const normalizedPath = path.toLowerCase();

    // Assign different gradients to different page routes
    if (normalizedPath.includes("/products")) return "gradient-vibrant";
    if (normalizedPath.includes("/categories")) return "gradient-mesh";
    if (normalizedPath.includes("/cart")) return "gradient-radial";
    if (normalizedPath.includes("/checkout")) return "interactive-gradient";
    if (normalizedPath.includes("/orders")) return "gradient-wave";
    if (normalizedPath.includes("/about")) return "gradient-dual";
    if (normalizedPath.includes("/profile")) return "gradient-radial";
    if (normalizedPath.includes("/contact")) return "gradient-mesh";
    if (normalizedPath.includes("/support")) return "gradient-wave";
    if (normalizedPath.includes("/login")) return "interactive-gradient";
    if (normalizedPath.includes("/signup")) return "gradient-vibrant";

    // Default gradient for other pages
    return "theme-page";
  };

  const gradientClass = getGradientClass(path);

  return (
    <main className={`min-h-screen ${isHome ? "" : gradientClass}`}>
      {children}
    </main>
  );
}
