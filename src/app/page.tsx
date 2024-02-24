import React from "react";
import { BsTwitter } from "react-icons/bs";
import { GoHome, GoHash } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import FeedCard from '../components/FeedCard/FeedCard';
import { BiMoney } from "react-icons/bi";


const Home = () => {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

  const sidebarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <GoHome />,
    },
    {
      title: "Explore",
      icon: <GoHash />
    },
    {
      title: "Notifications",
      icon: <IoNotificationsOutline />,
    },
    {
      title: "Messages",
      icon: <FiMessageSquare />,
    },
    {
      title: "Bookmarks",
      icon: <FaRegBookmark />,
    },
    {
      title : "Twitter Blue",
      icon: <BiMoney />
    },
    {
      title: "Profile",
      icon: <FaRegUser />,
    },
    {
      title: "More",
      icon: <CgMoreO />,
    }
  ];

  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-3 pt-1">
          <div className="text-4xl w-fit h-fit hover:bg-slate-200 rounded-full p-4 cursor-pointer transition-all ml-5">
            <BsTwitter />
          </div>
          <div className=" text-2xl font-semibold p-4 pt-0 w-fit ">
            <ul className="">
              {sidebarMenuItems.map((item) => {
                return (
                  <li 
                  className="flex justify-start items-center gap-4 hover:bg-gray-300 rounded-full px-5 py-2 cursor-pointer transition-all mt-2" 
                  key={item.title}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] text-white text-lg rounded-full w-full py-2 px-4">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-l border-r border-black h-screen overflow-scroll">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
      <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default Home;