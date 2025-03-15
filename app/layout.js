import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";

// Import global css
import "@/_styles/globals.css";

// HTML title can be set from here
export const metadata = {
  title: "The Sangwari Resort",
  description: "Chhattisgarh's Best Water Villa Resort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-5">
        <Logo />

        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
