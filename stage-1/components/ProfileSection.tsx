import Image from "next/image";
import { personalData } from "../utils/types";
import ProfilePic from "./ProfilePic";

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
    <Image
      src={`/share-default.svg`}
      height={`40`}
      width={`40`}
      className="avatar-share-button absolute -top-[20px] right-[208px]"
      alt={"share button"}
    />
  </div>
);

export default ProfileSection;
