import Image from "next/image";
import { personalData } from "../utils/types";

const ProfileSection = ({ twitter, slack, photo }: personalData) => (
  <div className="profile-section flex flex-col items-center gap-[24px] relative">
    <div
      className="w-[88px] h-[88px] rounded-full bg-profile hover:bg-profile-hover bg-contain hover:bg-camera hover:bg-no-repeat hover:bg-bottom"
      id="profile__img"
    ></div>
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
