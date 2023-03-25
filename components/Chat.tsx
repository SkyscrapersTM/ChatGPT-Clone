"use client";

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "@/components/Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

type Pros = {
  chatId: string;
};

const Chat = ({ chatId }: Pros) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-y-auto">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in bellow to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce z-10" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};

export default Chat;
