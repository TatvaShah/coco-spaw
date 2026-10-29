import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "Coco Spaw Pet Grooming",
  tagline: "Cozy, hand scissored dog grooms in the Bayview Village area of North York, Toronto.",
  category: "Dog grooming",
  schemaType: "LocalBusiness",
  area: "Bayview Village, North York, ON",
  siteUrl: "https://coco-spaw.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#d8433f" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Grooming with love",
    headline: "Cozy grooms for pups who deserve to shine",
    subhead: "Hand scissoring and Korean inspired grooms in a calm, one on one space near Sheppard and Bayview. Call, text or DM to book.",
    images: [
      { src: "/images/post-4.jpg", alt: "Fluffy white pup after a groom" },
      { src: "/images/post-7.jpg", alt: "Red poodle after a groom" },
      { src: "/images/post-1.jpg", alt: "Before and after groom" },
    ],
    secondaryCta: { label: "See the transformations", href: "#gallery" },
  },

  highlights: ["Hand scissoring", "Korean inspired grooms", "Calm one on one space", "Bayview Village area"],

  about: {
    title: "A calm, cozy grooming space",
    body: [
      "Welcome to Coco Spaw! A calm, cozy grooming space where every pet gets the time, care, and style they deserve. We use natural, premium products and hand scissor every groom.",
      "From fluffy teddy bears to fresh and fabulous, poodles, doodles and small breeds leave looking like brand new pups.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Poodle before and after" },
  },

  menu: {
    label: "Services",
    title: "Grooming services",
    variant: "list",
    showPrices: false,
    priceNote: "Call, text or DM for pricing for your pup.",
    groups: [
      {
        title: "Grooming",
        items: [
          { name: "Full groom with hand scissoring" },
          { name: "Korean inspired groom" },
          { name: "Poodle, doodle and small breed styling" },
        ],
      },
    ],
  },

  gallery: {
    title: "Before and after",
    items: [
      g(4, 1080, 1350, "Fluffy white pup", "Fresh and fabulous", "https://www.instagram.com/p/DdRD6rakbuv/"),
      g(1, 1080, 1334, "Before and after groom", "A little extra pampering", "https://www.instagram.com/p/De4LrpqipBI/"),
      g(2, 1080, 1334, "Black pup before and after", "Little pup, big personality", "https://www.instagram.com/p/De2VyQliG-T/"),
      g(3, 1080, 1334, "Sydney before and after", "Sweet Sydney", "https://www.instagram.com/p/Det3XvpRHaM/"),
      g(7, 1080, 1350, "Red poodle", "Welcome to Coco Spaw", "https://www.instagram.com/p/DZafy32x1qZ/"),
      g(5, 1080, 1350, "Poodle before and after", "The power of a good groom", "https://www.instagram.com/p/Db_vwDyiWGq/"),
      g(6, 1080, 1350, "Murfy before and after", "Murfy's new look", "https://www.instagram.com/p/DZm0DZsxT5Q/"),
      g(8, 1080, 1350, "Two pups after grooms", "Double the fluff", "https://www.instagram.com/p/DZXT39oimn8/"),
      g(9, 720, 720, "Black poodle before and after", "New look", "https://www.instagram.com/p/DYzafCVRT-C/"),
      g(11, 720, 720, "Nala before and after", "Nala", "https://www.instagram.com/p/DYE_DhAEUMd/"),
    ],
  },

  instagram: { handle: "coco.spaw", embeds: [] },

  order: {
    label: "How to book",
    title: "Book your pup's groom",
    intro: "Call or text 647-890-4989, or send a DM. Tap the DM button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Coco Spaw! I would like to book a groom.\nPup's name and breed:\nSize or weight:\nPreferred date:\nStyle idea:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Call or text 647-890-4989, or send a DM on Instagram with your pup's breed and the date you would like." },
    { q: "Where are you located?", a: "We are in the Bayview Village area of North York, near Sheppard, Bayview and Leslie." },
    { q: "What products do you use?", a: "Natural, premium products, with every groom hand scissored." },
  ],

  contact: {
    title: "Contact and booking",
    phone: "647-890-4989",
    area: "Bayview Village, North York, Toronto",
    socials: [],
  },

  seo: {
    title: "Coco Spaw Pet Grooming | Dog grooming in North York",
    description: "Hand scissored and Korean inspired dog grooms in a calm, one on one space in Bayview Village, North York. Call or text 647-890-4989 or DM to book.",
    keywords: ["dog grooming North York", "dog groomer Bayview Village", "Korean dog grooming Toronto", "poodle grooming North York"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
