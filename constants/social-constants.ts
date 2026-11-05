import { type SocialLink } from "@/types/portfolio-types";

export const GITHUB_URL = "https://github.com/sirinezaibi1234";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sirine-zaibi-107594360";

export const CONTACT_EMAIL = "sirine.zaibi@ensit.u-tunis.tn";


// TODO: create a free form at https://formspree.io and set
// NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxx in .env.
// Without it the form opens the visitor's email client instead.
export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

export const MY_SOCIALS: SocialLink[] = [
  { name: "LinkedIn", href: LINKEDIN_URL, icon: "/assets/socials/linkedIn.svg" },
  { name: "GitHub", href: GITHUB_URL, icon: "/assets/socials/github.svg" },
];
