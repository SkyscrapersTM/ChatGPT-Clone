import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div
      className={`py-5 text-white ${
        isChatGPT && "bg-[#434654] text-[#d1d5db]"
      }`}
    >
      <div className="flex space-x-5 px-12 max-w-4xl mx-auto">
        <img src={message.user.avatar} alt="" className="h-8 w-8" />
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
