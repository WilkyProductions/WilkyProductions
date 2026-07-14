export type Photo = {
  src: string | null;
  alt: string;
};

export type Video = {
  title: string;
  youtubeId: string | null;
};

export const videoCategories: {
  title: string;
  description: string;
  videos: Video[];
}[] = [
  {
    title: "Wedding Videos",
    description: "Full-day coverage, highlight reels, and ceremony films.",
    videos: [
      { title: "Wedding sample 1", youtubeId: null },
      { title: "Wedding sample 2", youtubeId: null },
      { title: "Wedding sample 3", youtubeId: null },
    ],
  },
  {
    title: "Business Spotlight",
    description: "Short-form videos that introduce your business and what makes it work.",
    videos: [
      { title: "Business spotlight sample 1", youtubeId: null },
      { title: "Business spotlight sample 2", youtubeId: null },
      { title: "Business spotlight sample 3", youtubeId: null },
    ],
  },
  {
    title: "Real Estate & Home Remodels",
    description: "Walkthroughs and before/after coverage for listings and remodel projects.",
    videos: [
      { title: "Real estate sample 1", youtubeId: null },
      { title: "Real estate sample 2", youtubeId: null },
      { title: "Real estate sample 3", youtubeId: null },
    ],
  },
  {
    title: "Offroad & Cars",
    description: "Race day, trail runs, and build features for the offroad and automotive scene.",
    videos: [
      { title: "Offroad & cars sample 1", youtubeId: null },
      { title: "Offroad & cars sample 2", youtubeId: null },
      { title: "Offroad & cars sample 3", youtubeId: null },
    ],
  },
  {
    title: "Aerial Videography",
    description: "Licensed drone coverage (FAA Part 107) for any of the above.",
    videos: [
      { title: "Aerial sample 1", youtubeId: null },
      { title: "Aerial sample 2", youtubeId: null },
    ],
  },
];

export const photographyGallery: Photo[] = Array.from({ length: 12 }, (_, i) => ({
  src: null,
  alt: `Photo ${i + 1}`,
}));

export const designCategories: { title: string; items: Photo[] }[] = [
  {
    title: "Logo Design",
    items: [
      { src: null, alt: "Logo sample 1" },
      { src: null, alt: "Logo sample 2" },
      { src: null, alt: "Logo sample 3" },
    ],
  },
  {
    title: "Apparel & Tee Graphics",
    items: [
      { src: null, alt: "Tee design 1" },
      { src: null, alt: "Tee design 2" },
      { src: null, alt: "Tee design 3" },
    ],
  },
  {
    title: "Motorsports Imagery",
    items: [
      { src: null, alt: "Motorsports sample 1" },
      { src: null, alt: "Motorsports sample 2" },
      { src: null, alt: "Motorsports sample 3" },
    ],
  },
];

export const websiteDesignExamples: Photo[] = [
  { src: null, alt: "Site example 1" },
  { src: null, alt: "Site example 2" },
  { src: null, alt: "Site example 3" },
];
