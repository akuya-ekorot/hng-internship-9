import Image from "next/image"

const ProfileSection = () => (
    <div className="profile-section flex flex-col items-center gap-[24px] relative">
    <Image
      src="/avatar-default.svg"
      height={`88`}
      width={`88`}
      alt="Profile Photo"
    />
    <div className="twitter">
      <p className="annette-black font-inter font-bold text-text-xl text-gray-900">
        Annette Black
      </p>
    </div>
    <div className="twitter hidden">
      <p className="annette-black">Annette Black</p>
    </div>
    <Image
      src={`/share-default.svg`}
      height={`40`}
      width={`40`}
      className="avatar-share-button absolute -top-[20px] right-[208px]"
      alt={""}
    />
  </div>
);

export default ProfileSection;