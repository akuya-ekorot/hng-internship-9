import Image from "next/image";

const Home = () => (
  <div className="flex flex-col">
    <main className="flex flex-col grow"></main>
    <footer className="px-[48px] py-[80px]">
      <div className="px-[32px]">
        <nav className="flex flex-row gap-[32px] pt-[36px] border-t border-[#EAECF0] ">
          <Image src="/Zuri.Internship_Logo.svg" width={`185`} height={`32`} alt={`Zuri Internship Logo`}/>
          <p className="grow flex items-center justify-center">HNG Internship 9 Frontend Task</p>
          <Image src="/I4G.png" width={`132`} height={`32`} alt={`Zuri Internship Logo`}/>
        </nav>
      </div>
    </footer>
  </div>
);

export default Home;