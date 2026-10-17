import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WW Interior — Interiør med omtanke",
  description:
    "WW Interior ved Wenche-Johanne Føynar Wie i Bergen. Interiørdesign, styling, interiørsøm og møbelfornying med fokus på gjenbruk.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className="antialiased">{children}</body>
    </html>
  );
}
