"use client";

import NewChat from "@/components/NewChat";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useSession, signOut } from "next-auth/react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const handleClick = () => {
    const home = document.querySelector("body");
    if (home && home.style) {
      if (!open) home.style.overflowY = "hidden";
      else home.style.overflowY = "auto";
    }
    setOpen(!open);
  };

  const sidebarClassNames = clsx(
    "flex flex-col bg-[#202123] min-h-screen w-full max-w-xs md:min-w-[16rem] p-2",
    {
      "absolute bg-opacity-50": windowWidth < 992,
      hidden: windowWidth < 992 && !open,
    }
  );
  return (
    <div>
      <div className={sidebarClassNames}>
        <div className="flex-1">
          <div>
            <NewChat />
          </div>
          <div>{/* ModelSelection */}</div>
          {/* Map through the ChatRows */}
        </div>
        {session && (
          <img
            onClick={() => signOut()}
            className="h-12 w-13 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
            src={session.user?.image || ""}
            alt="Profile picture"
          />
        )}
      </div>
      {windowWidth < 992 && (
        <div onClick={handleClick} className="absolute top-0 right-0">
          <button className="text-white p-3 bg-black/60">Display</button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
