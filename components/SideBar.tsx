"use client";

import NewChat from "@/components/NewChat";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useSession, signOut } from "next-auth/react";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import { Bars3Icon } from "@heroicons/react/24/solid";
import ModelSelection from "./ModelSelection";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createAt", "asc")
      )
  );

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
    "flex flex-col bg-[#202123] min-h-screen w-full max-w-xs md:min-w-[16rem] p-2 z-50",
    {
      "absolute bg-opacity-90": windowWidth < 992,
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
          <div className="hidden sm:inline mt-2">
            <ModelSelection />
          </div>
          <div className="flex flex-col mt-2 space-y-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats</p>
              </div>
            )}
            {/* Map through the ChatRows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
        {session && (
          <img
            onClick={() => signOut()}
            className="h-12 w-13 rounded-full cursor-pointer mx-auto mb-12 hover:opacity-50"
            src={session.user?.image || ""}
            alt="Profile picture"
          />
        )}
      </div>
      {windowWidth < 992 && (
        <div onClick={handleClick} className="absolute top-2 right-2">
          <Bars3Icon className="text-white h-10 w-10" />
        </div>
      )}
    </div>
  );
};

export default SideBar;
