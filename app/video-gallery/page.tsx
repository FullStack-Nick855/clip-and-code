// app/video-gallery/page.tsx
// ---------------------------------------------------------------------------
// Route: /video-gallery
// Server component — just sets metadata and renders the client gallery.
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import VideoGallery from "@/components/VideoGallery";

export const metadata: Metadata = {
  title: "Video Gallery | Clip and Code",
  description:
    "A portfolio reel of video editing work by Clip and Code — cinematic long-form edits, shorts, UGC ads and nature films.",
  alternates: { canonical: "https://clipandcode.com/video-gallery" },
  openGraph: {
    title: "Video Gallery | Clip and Code",
    description: "Cinematic edits, shorts, and UGC ads by Clip and Code.",
    url: "https://clipandcode.com/video-gallery",
    type: "website",
  },
};

export default function VideoGalleryPage() {
  return <VideoGallery />;
}