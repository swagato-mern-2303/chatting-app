import placeholderProfileImg from "../../assets/placeholder-img.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import MyGroups from "../../components/MyGroups";
import Friends from "../../components/Friends";

function Messages() {
  return (
    <div className="flex gap-x-10 font-poppins ">
      <Sidebar />
      <div className="grid grow grid-cols-3 gap-x-8 first:h-[48vh]">
        <div className="flex flex-col justify-between [&>*]:h-[48vh] [&>*]:rounded-[20px] [&>*]:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <MyGroups />
          <Friends />
        </div>
        <MessageBox />
      </div>
    </div>
  );
}

function MessageBox() {
  return (
    <div className="col-span-2 mr-5 flex flex-col rounded-[20px] px-14 py-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between border-b-2 border-b-black/20  pb-6">
        <div className="flex h-[10%] items-center gap-x-8">
          <img className="w-[75px]" src={placeholderProfileImg} alt="" />
          <div>
            <h3 className="text-2xl font-semibold">Swathi</h3>
            <p className="text-sm text-black/80">Online</p>
          </div>
        </div>
        <BsThreeDotsVertical size={25} />
      </div>

      <div className="h-[80%] grow overflow-y-scroll border-b-2 border-b-black/20 py-[30px]">
        <div className="">Messages ...............</div>
      </div>

      <div className="h-[10%]">
        <form className="flex gap-x-5 pt-[35px]">
          <div className="relative flex grow gap-x-[6px] rounded-[10px] bg-[#f1f1f1] pr-[15px]">
            <input
              className="grow bg-transparent pl-[15px] focus-visible:outline-none"
              type="text"
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
    </div>
  );
}

export default Messages;
