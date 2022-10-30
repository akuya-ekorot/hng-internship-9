import { personalData } from "../utils/types";
import ProfilePic from "./ProfilePic";
import ShareIcon from "./ShareIcon";

const ProfileSection = ({ twitter, slack, photo }: personalData) => (
  <div className="profile-section flex flex-col items-center gap-[24px] relative">
    <ProfilePic />
    <div>
      <p
        className="font-inter font-bold text-text-xl text-gray-900"
        id="twitter"
      >
        {twitter}
      </p>
    </div>
    <div className="hidden">
      <p className="annette-black" id="slack">
        {slack}
      </p>
    </div>
    <a
      href="#"
      className="peer stroke-gray-400 hover:stroke-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-[4px] focus:ring-gray-100 absolute -top-[20px] right-[208px] h-[40px] w-[40px] rounded-full border flex items-center justify-center border-dashed border-gray-300 text-gray-400"
    >
      <ShareIcon />
    </a>
    <div className="invisible peer-hover:visible flex items-center absolute -top-[18px] right-[250px]">
      <div className="h-[34px] w-[85px] bg-gray-900 text-white rounded-[8px] flex items-center justify-center py-[8px] px-[12px]">
        <p className="text-text-xs-semibold font-semibold">Share Link</p>
      </div>
      <div className="bg-gray-900 w-[12px] h-[12px] rotate-45 relative right-[9px]"></div>
    </div>
  </div>
);

export default ProfileSection;
