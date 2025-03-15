import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

// HTML title can be set from here
export const metadata = {
  title: "The Sangwari Resort",
  description: "Chhattisgarh's Best Water Villa Resort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />

        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
