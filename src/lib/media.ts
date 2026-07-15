export type Photo = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const videoCategories: {
  title: string;
  description: string;
  videos: string[];
}[] = [
  {
    title: "Wedding Videos",
    description: "Full-day coverage, highlight reels, and ceremony films.",
    videos: ["mI2ytwHNcH4"],
  },
  {
    title: "Business Spotlight",
    description: "Short-form videos that introduce your business and what makes it work.",
    videos: ["_Y9qjnYuurk"],
  },
  {
    title: "Real Estate & Home Remodels",
    description: "Walkthroughs and before/after coverage for listings and remodel projects.",
    videos: ["QSNFvokV_fs"],
  },
  {
    title: "Offroad & Cars",
    description: "Race day, trail runs, and build features for the offroad and automotive scene.",
    videos: ["Oes4ARRu6iM"],
  },
  {
    title: "Aerial Videography",
    description: "Licensed drone coverage (FAA Part 107) for any of the above.",
    videos: ["drGea9PT6LQ", "kCYyjTaBkOU"],
  },
];

export const photographyGallery: Photo[] = [
  {
    src: "/photography/DJI_20251018171550_0108_D.JPG",
    alt: "Aerial photography sample",
    width: 1600,
    height: 900,
  },
  {
    src: "/photography/TeslaDiner-1.JPG",
    alt: "Aerial photo of the Tesla Diner, Hollywood",
    width: 1600,
    height: 900,
  },
  {
    src: "/photography/GSG_CollegeView-12.jpg",
    alt: "Aerial photo — College View",
    width: 1600,
    height: 1066,
  },
  {
    src: "/photography/GSG_EastEndStudios-08.jpg",
    alt: "Aerial photo — East End Studios",
    width: 1600,
    height: 899,
  },
  {
    src: "/photography/GSG_ONTfield-17.jpg",
    alt: "Aerial photo — ONT Field",
    width: 1600,
    height: 899,
  },
  {
    src: "/photography/IMG_0423.jpg",
    alt: "Family portrait, 6 month milestone photo",
    width: 1600,
    height: 1066,
  },
  {
    src: "/photography/IMG_1414.jpg",
    alt: "Mother and child portrait",
    width: 1600,
    height: 1066,
  },
];

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
