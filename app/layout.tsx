import "./globals.css";
export const metadata = {
  title: "ChatGPT Clone",
  description: "Generated ChatGPT for educational purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          {/* ClientProvider - Notifications */}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
