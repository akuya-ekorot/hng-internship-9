import { useEffect, useState } from "react";
import { personalData } from "../utils/types";
import MoreIcon from "./MoreIcon";
import ProfilePic from "./ProfilePic";
import ShareIcon from "./ShareIcon";

const ProfileSection = ({ ...myData }: personalData) => {
  const [deviceWidth, setDeviceWidth] = useState(768);

  const handleResize = () => {
    setDeviceWidth(window.innerWidth);
  };

  useEffect(() => {
    setDeviceWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceWidth]);

  return (
    <div className="profile-section flex flex-col items-center gap-[24px] relative">
      <ProfilePic />
      <div>
        <p
          className="font-inter font-bold md:text-text-xl text-text-lg text-gray-900"
          id="twitter"
        >
          {myData.twitter}
        </p>
      </div>
      <div className="hidden">
        <p id="slack">{myData.slack}</p>
      </div>
      <a
        href="#"
        className="peer stroke-gray-400 hover:stroke-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-[4px] focus:ring-gray-100 absolute -top-[20px] right-[0px] lg:right-[208px] h-[40px] w-[40px] rounded-full border flex items-center justify-center border-dashed border-gray-300 text-gray-400"
      >
        {deviceWidth >= 768 ? <ShareIcon /> : <MoreIcon />}
      </a>
      <div className="invisible peer-hover:visible flex items-center absolute -top-[18px] right-[38px] lg:right-[246px]">
        <div className="h-[34px] w-[85px] bg-gray-900 text-white rounded-[8px] flex items-center justify-center py-[8px] px-[12px]">
          <p className="text-text-xs-semibold font-semibold">Share Link</p>
        </div>
        <div className="bg-gray-900 w-[12px] h-[12px] rotate-45 relative right-[9px]"></div>
      </div>
    </div>
  );
};

export default ProfileSection;
