export const APP_LINKS = {
  APP_STORE:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/app/your-app",
  GOOGLE_PLAY:
    process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
    "https://play.google.com/store/apps/details?id=com.yourapp",
} as const;
