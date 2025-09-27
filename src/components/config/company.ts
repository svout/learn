export type CompanyInfo = {
  name: string;
  siteName: string;
  legalName?: string;
  tagline?: string;
  phone: string;
  teamEmail: string;
  privacyEmail: string;
  supportEmail: string;

  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;

  url: string;
  logo?: string;
  sameAs?: string;

  googlePlay: string;
  appStore: string;
};

export const COMPANY: CompanyInfo = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "",
  legalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || undefined,
  tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || undefined,
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "",
  teamEmail: process.env.NEXT_PUBLIC_TEAM_EMAIL || "",
  privacyEmail: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",

  streetAddress: process.env.NEXT_PUBLIC_COMPANY_STREET || "",
  addressLocality: process.env.NEXT_PUBLIC_COMPANY_CITY || "",
  addressRegion: process.env.NEXT_PUBLIC_COMPANY_REGION || undefined,
  postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTCODE || undefined,
  addressCountry: process.env.NEXT_PUBLIC_COMPANY_COUNTRY || "",

  url: process.env.NEXT_PUBLIC_COMPANY_URL || "",
  logo: process.env.NEXT_PUBLIC_COMPANY_LOGO || undefined,
  sameAs: process.env.NEXT_PUBLIC_COMPANY_SAME_AS || "",

  googlePlay: process.env.NEXT_PUBLIC_GOOGLE_PLAY || "#",
  appStore: process.env.NEXT_PUBLIC_APPSTORE || "#",
};
