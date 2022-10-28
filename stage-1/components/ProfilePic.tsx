import Image from "next/image"

const ProfilePic = () => (
    <a
    className="group flex flex-col items-center justify-end w-[88px] h-[88px] pb-[11px] rounded-full bg-profile hover:bg-profile-hover bg-contain hover:bg-camera hover:bg-no-repeat hover:bg-bottom focus:outline-none focus:ring-[5.5px] focus:ring-[#EBE9FE]"
    id="profile__img"
    href="#"
  >
    <Image
      src={`/camera.svg`}
      height={`24`}
      width={`24`}
      alt="camera icon. change profile picture"
      className="group-hover:visible invisible"
    />
  </a>
);

export default ProfilePic;