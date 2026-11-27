import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "5 Star Builders Merchants Ltd",
    short_name: "5 Star Merchants",
    description:
      "Birmingham builders merchant supplying building materials for repair, renovation, and any building work. Trade counter pickup and same-day delivery across the West Midlands.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f6",
    theme_color: "#010101",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
