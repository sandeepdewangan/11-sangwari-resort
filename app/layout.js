import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";

import { Inter } from "next/font/google";

// Import global css
import "@/_styles/globals.css";

// Setting font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// HTML title can be set from here
export const metadata = {
  title: {
    template: "%s The Sangwari Resort",
    default: "Welcome, The Sangwari Resort",
  },
  description: "Chhttisgarh's Premium Resort, This is important field for SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-5 `}>
        <Logo />

        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
