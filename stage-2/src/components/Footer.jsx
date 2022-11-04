import zuriLogo from "../Zuri.Internship_Logo.svg";
import igLogo from "../I4G.png"

const Footer = () => {
  return (
    <footer className="md:py-[48px] py-[32px] flex justify-center">
      <div className="md:px-[32px] px-[16px] grow max-w-[1280px]">
        <nav className="flex flex-col md:flex-row md:gap-[32px] gap-[16px] md:pt-[36px] pt-[32px] border-t border-gray-200">
          <img
            src={zuriLogo}
            width={`185`}
            height={`32`}
            alt={`Zuri Internship Logo`}
          />
          <p className="grow flex items-center md:justify-center text-md text-gray-500">
            HNG Internship 9 Frontend Task
          </p>
          <img
            src={igLogo}
            width={`132`}
            height={`32`}
            alt={`I4G Logo`}
            className="object-contain"
          />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
