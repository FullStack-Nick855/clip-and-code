// lib/videos.ts
// ---------------------------------------------------------------------------
// Central data source for the Video Gallery page.
// Edit titles / categories / orientation here — the UI reads everything below.
// To use your own hosting, drop assets in /public and change the URLs.
// ---------------------------------------------------------------------------

export type VideoCategory = "nature" | "video" | "shorts" | "ugc";
export type VideoSource = "youtube" | "file";
export type Orientation = "landscape" | "portrait";

export interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  orientation: Orientation;
  source: VideoSource;
  /** youtube => the video id  |  file => full mp4/mov url */
  src: string;
  thumbnail: string;
  /** youtube start offset in seconds (optional) */
  start?: number;
}

// Filter tabs shown on the timeline bar (order matters)
export const categories = [
  { id: "all", label: "All Work" },
  { id: "video", label: "Long-form" },
  { id: "shorts", label: "Shorts" },
  { id: "ugc", label: "UGC & Ads" },
  { id: "nature", label: "Nature" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

const HOST = "https://swag21.com/Frameandcode/wp-content/uploads";

export const videos: VideoItem[] = [
  // ----------------------------- NATURE -----------------------------
  {
    id: "N9niha43LlE",
    title: "A Journey to Taal",
    category: "nature",
    orientation: "landscape",
    source: "youtube",
    src: "N9niha43LlE",
    thumbnail: `${HOST}/2025/06/A-Journey-to-Taal-1024x576.jpg`,
  },
  {
    id: "E6Qh82XIT1I",
    title: "The Haven of Life",
    category: "nature",
    orientation: "landscape",
    source: "youtube",
    src: "E6Qh82XIT1I",
    thumbnail: `${HOST}/2025/06/The-Haven-of-Life-1024x576.jpg`,
  },
  {
    id: "QtB_j_H-Vuw",
    title: "Wildlife Reel", // was "maxresdefault (5)" — rename freely
    category: "nature",
    orientation: "landscape",
    source: "youtube",
    src: "QtB_j_H-Vuw",
    start: 9,
    thumbnail: `${HOST}/2025/06/maxresdefault-5-1024x576.webp`,
  },

  // --------------------------- LONG-FORM ----------------------------
  {
    id: "dzMnxA4-dGY",
    title: "Cinematic Edit 10", // was "image (10)"
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "dzMnxA4-dGY",
    thumbnail: `${HOST}/2025/06/image-10-1024x576.png`,
  },
  {
    id: "bYQk2zQ_4SQ",
    title: "Cinematic Edit 11",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "bYQk2zQ_4SQ",
    thumbnail: `${HOST}/2025/06/image-11-1024x576.png`,
  },
  {
    id: "GunBMOCMPQs",
    title: "Cinematic Edit 09",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "GunBMOCMPQs",
    thumbnail: `${HOST}/2025/06/image-9-1024x576.png`,
  },
  {
    id: "_jkXfjDqU8k",
    title: "Cinematic Edit 08",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "_jkXfjDqU8k",
    thumbnail: `${HOST}/2025/06/image-8-1024x576.png`,
  },
  {
    id: "cPz6gjBtzks",
    title: "Cinematic Edit 07",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "cPz6gjBtzks",
    thumbnail: `${HOST}/2025/06/image-7-1024x576.png`,
  },
  {
    id: "j5I3Z_ylvf0",
    title: "Cinematic Edit 06",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "j5I3Z_ylvf0",
    thumbnail: `${HOST}/2025/06/image-6-1024x576.png`,
  },
  {
    id: "9MDqnL9rSd8",
    title: "Guess the Italian Brainrot",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "9MDqnL9rSd8",
    thumbnail: `${HOST}/2025/06/guess-italian-brainrot-1024x576.jpg`,
  },
  {
    id: "0G1HBQmHFNo",
    title: "Cinematic Edit 05",
    category: "video",
    orientation: "landscape",
    source: "youtube",
    src: "0G1HBQmHFNo",
    thumbnail: `${HOST}/2025/06/image-5-1024x576.png`,
  },

  // ----------------------------- SHORTS -----------------------------
  {
    id: "jiaZS4DbInI",
    title: "Achieving The Impossible",
    category: "shorts",
    orientation: "portrait",
    source: "youtube",
    src: "jiaZS4DbInI",
    thumbnail: `${HOST}/2025/06/Achieving-The-Impossible-576x1024.jpg`,
  },
  {
    id: "9X_YlqXwvio",
    title: "Planet's Short",
    category: "shorts",
    orientation: "portrait",
    source: "youtube",
    src: "9X_YlqXwvio",
    thumbnail: `${HOST}/2025/06/planets-short-576x1024.jpg`,
  },
  {
    id: "wade-foster",
    title: "Wade Foster Trial",
    category: "shorts",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/TRIAL-Wade-Foster.mp4`,
    thumbnail: `${HOST}/2025/11/videoframe_7388-576x1024.png`,
  },

  // --------------------------- UGC & ADS ----------------------------
  {
    id: "black-shoes",
    title: "Black Shoes",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Black_Shoes_V4_thm2_amq13.mp4`,
    thumbnail: `${HOST}/2025/11/black-shoes.png`,
  },
  {
    id: "cosmin-ugc",
    title: "Cosmin — UGC",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Cosmin_UGC_final_V01.mp4`,
    thumbnail: `${HOST}/2025/11/Cosmin-UGC.png`,
  },
  {
    id: "hawk-perfume",
    title: "Hawk Perfume",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Hawk_Perfume_V1.mp4`,
    thumbnail: `${HOST}/2025/11/Hawk-Perfume.png`,
  },
  {
    id: "img-4910",
    title: "Product Ad — 4910",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/IMG_4910.mp4`,
    thumbnail: `${HOST}/2025/11/IMG-4910.png`,
  },
  {
    id: "img-4911",
    title: "Product Ad — 4911",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/IMG_4911.mp4`,
    thumbnail: `${HOST}/2025/11/IMG-4911.png`,
  },
  {
    id: "influencer-refinement",
    title: "Influencer — Refinement",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Influencer_02_Refinement__V03.mp4`,
    thumbnail: `${HOST}/2025/11/Influencer-Refinement.png`,
  },
  {
    id: "influencer-ugc-final",
    title: "Influencer — UGC Final",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Influencer_UGC_Final_04.mp4`,
    thumbnail: `${HOST}/2025/11/Influencer-UGC-Final.png`,
  },
  {
    id: "julie-reel",
    title: "Julie — Reel",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Julie-Reel-V_3_1.mp4`,
    thumbnail: `${HOST}/2025/11/Julie-Reel.png`,
  },
  {
    id: "lash-serum",
    title: "Lash Serum",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Lash_Serum_V02.mov`,
    thumbnail: `${HOST}/2025/11/Lash-Serum.png`,
  },
  {
    id: "parfume-v4",
    title: "Parfume V4",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/Parfume_V4_thm2_chf3_amq13.mp4`,
    thumbnail: `${HOST}/2025/11/Parfume-V4.png`,
  },
  {
    id: "talking-head",
    title: "Talking Head",
    category: "ugc",
    orientation: "landscape",
    source: "file",
    src: `${HOST}/2025/11/talking-head.mp4`,
    thumbnail: `${HOST}/2025/11/talking-head.png`,
  },
  {
    id: "the-book-final",
    title: "The Book",
    category: "ugc",
    orientation: "portrait",
    source: "file",
    src: `${HOST}/2025/11/The-book-Final-.mp4`,
    thumbnail: `${HOST}/2025/11/The-book-Final.png`,
  },
  {
    id: "golf",
    title: "Golf",
    category: "ugc",
    orientation: "landscape",
    source: "file",
    src: `${HOST}/2025/11/Golf.mp4`,
    thumbnail: `${HOST}/2025/11/golf-1024x504.png`,
  },
];