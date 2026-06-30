import { Outfit, DM_Sans, Inter } from "next/font/google";

export const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-outfit",
});

export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-inter",
});
