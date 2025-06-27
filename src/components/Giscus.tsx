import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

interface GiscusProps {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
  mapping?: string;
  strict?: string;
  reactionsEnabled?: string;
  emitMetadata?: string;
  inputPosition?: "top" | "bottom";
  lang?: string;
  loading?: "lazy" | "eager";
}

export default function Giscus({
  repo = "enough-jainil/yt-dlp-doc",
  repoId = "R_kgDOMydt5A",
  category = "DOCs discussions",
  categoryId = "DIC_kwDOMydt5M4CsFo6",
  mapping = "pathname",
  strict = "0",
  reactionsEnabled = "1",
  emitMetadata = "0",
  inputPosition = "top",
  lang = "en",
  loading = "lazy",
}: GiscusProps): JSX.Element {
  const { colorMode } = useColorMode();
  const giscusRef = useRef<HTMLDivElement>(null);

  // Determine theme based on Docusaurus color mode
  const giscusTheme = colorMode === "dark" ? "dark_high_contrast" : "light";

  useEffect(() => {
    if (!giscusRef.current) return;

    // Remove existing giscus if it exists (for theme changes)
    const existingGiscus = giscusRef.current.querySelector("iframe");
    if (existingGiscus) {
      giscusRef.current.innerHTML = "";
    }

    // Create and configure the script
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-strict", strict);
    script.setAttribute("data-reactions-enabled", reactionsEnabled);
    script.setAttribute("data-emit-metadata", emitMetadata);
    script.setAttribute("data-input-position", inputPosition);
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", loading);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    giscusRef.current.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (giscusRef.current?.contains(script)) {
        giscusRef.current.removeChild(script);
      }
    };
  }, [
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    strict,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    giscusTheme, // Re-run when theme changes
    lang,
    loading,
  ]);

  return (
    <div className="giscus-container margin-top--lg margin-bottom--lg">
      <div ref={giscusRef} />
    </div>
  );
}
