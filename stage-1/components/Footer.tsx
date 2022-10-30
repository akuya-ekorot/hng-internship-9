import Image from "next/image";

const Footer = () => (
  <footer className="md:py-[48px] py-[32px] flex justify-center">
    <div className="md:px-[32px] px-[16px] grow max-w-[1280px]">
      <nav className="flex flex-col md:flex-row md:gap-[32px] gap-[16px] md:pt-[36px] pt-[32px] border-t border-[#EAECF0] ">
        <Image
          src="/Zuri.Internship_Logo.svg"
          width={`185`}
          height={`32`}
          alt={`Zuri Internship Logo`}
        />
        <p className="grow flex items-center md:justify-center font-inter text-text-md text-gray-500">
          HNG Internship 9 Frontend Task
        </p>
        <Image
          src="/I4G.png"
          width={`132`}
          height={`32`}
          alt={`Zuri Internship Logo`}
        />
      </nav>
    </div>
  </footer>
);

export default Footer;
