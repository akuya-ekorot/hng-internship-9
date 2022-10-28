import Image from "next/image";
import { personalData } from "../utils/types";

const ProfileSection = ({ twitter, github, photo, name }: personalData) => (
  <div className="profile-section flex flex-col items-center gap-[24px] relative">
    <Image src={photo} height={`88`} width={`88`} alt="Profile Photo" className="rounded-full" />
    <div className="twitter">
      <p className="font-inter font-bold text-text-xl text-gray-900">
        {twitter}
      </p>
    </div>
    <div className="github hidden">
      <p className="annette-black">{github}</p>
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
