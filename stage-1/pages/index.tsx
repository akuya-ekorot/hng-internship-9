import Image from "next/image";

const Home = () => (
  <div className="flex flex-col">
    <section className="flex flex-col grow px-[112px] py-[64px]">
      <main className="py-[32px]">
        <div className="content">
          <div className="profile-section">
            <img />
            <div className="twitter">
              <p className="annette-black"></p>
            </div>
            <div className="avatar-share-button"></div>
          </div>
          <div className="link-section">
            {Array(6).fill(0).map((link, index) => {
              return (<div key={index}>
                <div></div>
              </div>);
            })}
          </div>
        </div>
      </main>
      <div></div>
    </section>
    <footer className="px-[48px] py-[80px]">
      <div className="px-[32px]">
        <nav className="flex flex-row gap-[32px] pt-[36px] border-t border-[#EAECF0] ">
          <Image
            src="/Zuri.Internship_Logo.svg"
            width={`185`}
            height={`32`}
            alt={`Zuri Internship Logo`}
          />
          <p className="grow flex items-center justify-center">
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
  </div>
);

export default Home;
