import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SideBar from "@/components/SideBar";
import Login from "@/components/Login";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "ChatGPT Clone",
  description: "Generated ChatGPT for educational purposes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex relative">
              <SideBar />
              <ClientProvider />
              <div id="home" className="bg-[#343541] flex-1">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
