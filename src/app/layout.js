
import { NeueHasMedium } from "./font";
import "./globals.scss";


export const metadata = {
  title: "TalentVare",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${NeueHasMedium.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
