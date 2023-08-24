import "./styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "My Portfolio",
  description: "Created by dev-saminur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
