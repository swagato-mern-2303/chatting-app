// import image from "../assets/registration-page-img.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";

export default function MessageBox() {
  const db = getDatabase();

  const currentUserData = useSelector(
    (state) => state.userLoginInfo.userLoginInfo,
  );
  const selectedChatInfo = useSelector(
    (state) => state.selectedChatInfo.selectedChatInfo,
  );

  const [messageInput, setMessageInput] = useState("");
  const [messageDisplay, setMessageDisplay] = useState([]);

  const handleSubmitMessage = function (e) {
    e.preventDefault();

    if (!messageInput) return;

    push(ref(db, "messages/"), {
      senderId: currentUserData.uid,
      receiverId: selectedChatInfo?.selectedId,
      message: messageInput,
      time: new Date().toLocaleTimeString(),
    }).then(() => {
      setMessageInput("");
    });
  };

  useEffect(() => {
    onValue(ref(db, "messages/"), (snapshot) => {
      const messageArr = [];
      snapshot.forEach((item) => {
        (item.val().receiverId === currentUserData.uid &&
          item.val().senderId === selectedChatInfo?.selectedId) ||
        (item.val().senderId === currentUserData.uid &&
          item.val().receiverId === selectedChatInfo?.selectedId)
          ? messageArr.push(item.val())
          : null;
      });
      setMessageDisplay(messageArr);
    });
  }, [selectedChatInfo]);

  useEffect(() => {
    document
      .getElementById("messages")
      ?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [messageDisplay]);

  return (
    <div
      className={`col-span-2 mr-5 flex max-h-screen flex-col rounded-[20px] px-14 py-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${
        !selectedChatInfo ? "items-center justify-center" : null
      }`}
    >
      {!selectedChatInfo ? (
        <h2 className="text-3xl font-semibold text-slate-400">
          Please select one of your friend to chat
        </h2>
      ) : (
        <>
          <div className="relative flex h-[10%] items-center justify-between border-b-2 border-b-black/20  pb-6">
            <div className="flex items-center gap-x-8">
              <img
                className="w-[75px] rounded-full"
                src={selectedChatInfo?.selectedImg}
                alt=""
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  {selectedChatInfo?.selectedName}
                </h3>
              </div>
            </div>
            <BsThreeDotsVertical size={25} />
          </div>

          <div className="h-[80%] grow overflow-y-scroll border-b-2 border-b-black/20 py-[30px]">
            <div
              id="messages"
              className={`flex h-full flex-col gap-y-4 pl-4 pr-6 ${
                !messageDisplay.length ? "justify-center" : null
              }`}
            >
              {!messageDisplay.length ? (
                <div className="text-center text-xl font-semibold text-slate-400">
                  Start chatting to see your conversation.
                </div>
              ) : (
                messageDisplay.map((item, index) =>
                  item.receiverId === currentUserData.uid ? (
                    <MessageBubbleReceive key={index} messageData={item} />
                  ) : (
                    <MessageBubbleSend key={index} messageData={item} />
                  ),
                )
              )}
            </div>
          </div>

          <div className="h-[10%]">
            <form
              className="flex gap-x-5 pt-[35px]"
              onSubmit={(e) => handleSubmitMessage(e)}
            >
              <div className="relative flex grow gap-x-[6px] rounded-[10px] bg-[#f1f1f1] pr-[15px]">
                <input
                  className="grow bg-transparent pl-[15px] focus-visible:outline-none"
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <div className="right-[15px] top-0 [&>*]:px-[4px] [&>*]:py-[10px] [&>*]:text-black/50">
                  <button>
                    <MdOutlineEmojiEmotions size={20} />
                  </button>
                  <button>
                    <IoCameraOutline size={20} />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="rounded-[10px] bg-primary-accent p-[10px]"
              >
                <IoIosSend color="white" size={20} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

function MessageBubbleReceive({ messageData }) {
  return (
    <div>
      <div className="relative">
        <div className="inline-block max-w-[80%] rounded-[10px] bg-[#f1f1f1] px-12 py-3 font-poppins font-medium">
          {messageData.message}
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="21"
            viewBox="0 0 51 21"
            fill="none"
          >
            <path
              d="M24.714 0.8332C25.4101 0.334971 26.346 0.334971 27.0421 0.833199L50.1509 17.3737C51.7323 18.5055 50.9315 21 48.9869 21H2.76924C0.824561 21 0.0238247 18.5055 1.60517 17.3737L24.714 0.8332Z"
              fill="#f1f1f1"
            />
          </svg>
        </div>
      </div>
      <p className="text-xs text-black/25">{messageData.time}</p>
    </div>
  );
}

function MessageBubbleSend({ messageData }) {
  return (
    <div className="text-right">
      <div className="relative">
        <div className="inline-block max-w-[80%] rounded-[10px] bg-primary-accent px-12 py-3 text-left font-poppins font-medium text-white">
          {messageData.message}
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="21"
            viewBox="0 0 51 21"
            fill="none"
          >
            <path
              d="M24.714 0.8332C25.4101 0.334971 26.346 0.334971 27.0421 0.833199L50.1509 17.3737C51.7323 18.5055 50.9315 21 48.9869 21H2.76924C0.824561 21 0.0238247 18.5055 1.60517 17.3737L24.714 0.8332Z"
              fill="#5F35F5"
            />
          </svg>
        </div>
      </div>
      <p className="text-xs text-black/25">{messageData.time}</p>
    </div>
  );
}

/* function MessageBubbleSendImg() {
  return (
    <div className="text-right">
      <div className="relative">
        <div className="inline-block w-2/5 rounded-[10px] bg-primary-accent p-3 font-poppins font-medium text-white">
          <img className="inline-block" src={image} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 -z-10 translate-x-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="21"
            viewBox="0 0 51 21"
            fill="none"
          >
            <path
              d="M24.714 0.8332C25.4101 0.334971 26.346 0.334971 27.0421 0.833199L50.1509 17.3737C51.7323 18.5055 50.9315 21 48.9869 21H2.76924C0.824561 21 0.0238247 18.5055 1.60517 17.3737L24.714 0.8332Z"
              fill="#5F35F5"
            />
          </svg>
        </div>
      </div>
      <p className="text-xs text-black/25">Today, 2.01pm</p>
    </div>
  );
}

function MessageBubbleReceiveImg() {
  return (
    <div>
      <div className="relative">
        <div className="inline-block w-2/5 rounded-[10px] bg-[#f1f1f1] p-3 font-poppins font-medium leading-none">
          <img className="inline-block rounded-[10px]" src={image} />
        </div>
        <div className="absolute bottom-0 left-0 -z-30 -translate-x-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="21"
            viewBox="0 0 51 21"
            fill="none"
          >
            <path
              d="M24.714 0.8332C25.4101 0.334971 26.346 0.334971 27.0421 0.833199L50.1509 17.3737C51.7323 18.5055 50.9315 21 48.9869 21H2.76924C0.824561 21 0.0238247 18.5055 1.60517 17.3737L24.714 0.8332Z"
              fill="#f1f1f1"
            />
          </svg>
        </div>
      </div>
      <p className="text-xs text-black/25">Today, 2.01pm</p>
    </div>
  );
}
 */
