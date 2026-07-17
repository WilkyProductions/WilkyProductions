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
      {
        src: "/logos/Complete View Logo for COLOR BG.png",
        alt: "Complete View Construction logo",
        width: 1600,
        height: 1578,
      },
      {
        src: "/logos/KJHawkins Racing Logo2-01.jpg",
        alt: "KJ Hawkins Racing logo, color variations",
        width: 1600,
        height: 603,
      },
      {
        src: "/logos/PrecisionPerformanceLogo-27.png",
        alt: "Precision Performance logo",
        width: 1600,
        height: 800,
      },
    ],
  },
  {
    title: "Apparel & Tee Graphics",
    items: [
      {
        src: "/apparel/American Works Logo Tee copy.jpg",
        alt: "American Works Excavation & Grading tee design",
        width: 1080,
        height: 571,
      },
      { src: "/apparel/Black Tee.jpg", alt: "Complete View Construction tee design", width: 1600, height: 880 },
      { src: "/apparel/McLaren.jpg", alt: "Showtime Collision Repair tee design", width: 1600, height: 1250 },
    ],
  },
  {
    title: "Motocross Graphics",
    items: [
      { src: "/motographics/BurnsCRF110.jpg", alt: "P. Burns #258 Husqvarna graphics kit", width: 1600, height: 739 },
      {
        src: "/motographics/Cole2022KTM500.jpg",
        alt: "Cole Smith #67 KTM graphics kit",
        width: 1600,
        height: 796,
      },
      {
        src: "/motographics/Marshall Tomei 2018 RMZ 450 MP Graphics Kit 1-01.jpg",
        alt: "Marshall Tomei #11 Suzuki graphics kit",
        width: 1600,
        height: 796,
      },
      {
        src: "/motographics/Tomei 2021CRF450-01.jpg",
        alt: "Tomei #11 Honda CRF450R graphics kit",
        width: 1599,
        height: 1190,
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        src: "/design/Axis Plus Business Card Preview.jpg",
        alt: "Axis Plus Machining business card design",
        width: 1026,
        height: 614,
      },
      {
        src: "/design/BeaumontKnightsCanopy.jpg",
        alt: "Beaumont Knights Baseball canopy design",
        width: 1600,
        height: 1185,
      },
    ],
  },
];

export const websiteDesignExamples: Photo[] = [
  { src: "/mockups/m81-desktop.jpg", alt: "M81 Designs website preview" },
  { src: null, alt: "Site example 2" },
  { src: null, alt: "Site example 3" },
];
