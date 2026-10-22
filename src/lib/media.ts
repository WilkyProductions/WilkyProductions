export type Photo = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  href?: string;
  comingSoon?: boolean;
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
        src: "/design/logos/Complete View Logo for COLOR BG.png",
        alt: "Complete View Construction logo",
        width: 1600,
        height: 1578,
      },
      {
        src: "/design/logos/KJHawkins Racing Logo2-01.jpg",
        alt: "KJ Hawkins Racing logo, color variations",
        width: 1600,
        height: 603,
      },
      {
        src: "/design/logos/PrecisionPerformanceLogo-27.png",
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
        src: "/design/apparel/American Works Logo Tee copy.jpg",
        alt: "American Works Excavation & Grading tee design",
        width: 1080,
        height: 571,
      },
      {
        src: "/design/apparel/Black Tee.jpg",
        alt: "Complete View Construction tee design",
        width: 1600,
        height: 880,
      },
      {
        src: "/design/apparel/McLaren.jpg",
        alt: "Showtime Auto Body tee design",
        width: 1600,
        height: 1250,
      },
    ],
  },
  {
    title: "Motocross Graphics",
    items: [
      {
        src: "/design/motographics/BurnsCRF110.jpg",
        alt: "P. Burns #258 Husqvarna graphics kit",
        width: 1600,
        height: 739,
      },
      {
        src: "/design/motographics/Cole2022KTM500.jpg",
        alt: "Cole Smith #67 KTM graphics kit",
        width: 1600,
        height: 796,
      },
      {
        src: "/design/motographics/Marshall Tomei 2018 RMZ 450 MP Graphics Kit 1-01.jpg",
        alt: "Marshall Tomei #11 Suzuki graphics kit",
        width: 1600,
        height: 796,
      },
      {
        src: "/design/motographics/Tomei 2021CRF450-01.jpg",
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
  {
    src: "/design/Webdesign3.jpg",
    alt: "M81 Designs website preview",
    width: 1600,
    height: 1347,
    href: "https://m81designs.com",
    comingSoon: true,
  },
  {
    src: "/design/Webdesign1.jpg",
    alt: "Cook Coatings website preview",
    width: 1600,
    height: 1347,
    href: "https://cookcoatingsinc.com",
  },
  {
    src: "/design/Webdesign2.jpg",
    alt: "CageWRX website preview",
    width: 1600,
    height: 1347,
    href: "https://cagewrx.com",
  },
];

export type Logo = { src: string; alt: string; width: number; height: number; href?: string };

export const clientLogos: Logo[] = [
  {
    src: "/clients/M81Logo-BLK.png",
    alt: "M81 Designs logo",
    width: 1280,
    height: 472,
    href: "https://m81designs.com",
  },
  {
    src: "/clients/CookCoatingsLogo-BLK.png",
    alt: "Cook Coatings logo",
    width: 1280,
    height: 472,
    href: "https://cookcoatingsinc.com",
  },
  {
    src: "/clients/ShowtimeLogo-BLK.png",
    alt: "Showtime Auto Body logo",
    width: 1280,
    height: 472,
    href: "https://showtimeautobody.com",
  },
  {
    src: "/clients/GSGLogo-BLK.png",
    alt: "Golden State Glazing logo",
    width: 1280,
    height: 472,
    href: "https://goldenstateglazing.info",
  },
  {
    src: "/clients/CagewrxLogo-BLK.png",
    alt: "CageWRX logo",
    width: 1220,
    height: 308,
    href: "https://cagewrx.com",
  },
  {
    src: "/clients/IDdesignsLogo-BLK.png",
    alt: "ID Designs logo",
    width: 1220,
    height: 347,
  },
];

export type Review = {
  name: string;
  company?: string;
  quote: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Erica Makeig",
    company: "Showtime Collision",
    quote:
      "Johnny is THE person to go to for web design. Our website was outdated and \"clunky,\" from the last company. Johnny came in, saw our vision, and brought it to life. He worked quickly, was extremely responsive to our input, and was so determined to make it the best product possible. ADA compliant, visually engaging, and very functional. Cannot recommend him enough, 5 stars isn't a high enough rating!",
    rating: 5,
  },
  {
    name: "Doug Mittag",
    company: "M81 Designs",
    quote: "Dude, I just looked at the website. It looks fu**ing bad*ss!",
    rating: 5,
  },
  {
    name: "Levi Jackson",
    company: "Golden State Glazing",
    quote:
      "Amazing drone footage with clean and clear videos to showcase finished projects in the construction industry from a higher view!",
    rating: 5,
  },
];

export type AppScreenshot = { src: string; width: number; height: number };

export type AppListing = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: { src: string; width: number; height: number };
  screenshots: AppScreenshot[];
  features: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export const apps: AppListing[] = [
  {
    slug: "list-master",
    name: "List Master",
    tagline: "To-dos, shopping lists & trip packing — shared with your person in seconds.",
    description:
      "List Master keeps every list in one place: to-dos with reminders, a shopping list for every store, and trip packing lists, all shareable with the people you're planning with.",
    icon: { src: "/apps/list-master/icon.png", width: 512, height: 512 },
    screenshots: [
      { src: "/apps/list-master/screenshots/screen-1.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-2.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-3.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-4.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-5.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-6.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-7.jpg", width: 507, height: 1100 },
      { src: "/apps/list-master/screenshots/screen-8.jpg", width: 507, height: 1100 },
    ],
    features: [
      "To-do lists with reminders",
      "A shopping list for every store",
      "Trip packing lists",
      "Share any list with the people you're planning with",
    ],
    appStoreUrl: "https://apps.apple.com/app/id6816552790",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wilkyproductions.listmaster",
  },
  {
    slug: "bar-darts",
    name: "Bar Darts",
    tagline: "Classic dart games, scored for you — built for bar nights.",
    description:
      "Bar Darts keeps score for every classic dart game so your group can focus on throwing, not math. No accounts, no ads, just drop in and play.",
    icon: { src: "/apps/bar-darts/icon.png", width: 1024, height: 1024 },
    screenshots: [
      { src: "/apps/bar-darts/screenshots/01-turf.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/02-menu.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/03-turfrecap.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/04-bingo.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/05-bounty.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/06-cricket.png", width: 1284, height: 2778 },
      { src: "/apps/bar-darts/screenshots/07-x01.png", width: 1284, height: 2778 },
    ],
    features: ["X01", "Cricket", "Bingo", "Bounty", "Turf War"],
    appStoreUrl: undefined,
  },
];
