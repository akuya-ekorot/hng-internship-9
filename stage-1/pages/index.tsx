import Image from "next/image";

type links = {
  name: string;
  link?: string;
};

const pageLinks: links[] = [
  { name: "Twitter Link" },
  { name: "Zuri Team", link: "https://training.zuri.team/" },
  { name: "Zuri Books", link: "http://books.zuri.team" },
  {
    name: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=akuya-ekorot",
  },
  { name: "Background Check for Coders", link: "https://background.zuri.team" },
  { name: "Design Books", link: "https://books.zuri.team/design-rules" },
];

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
            {pageLinks
              .map((link, index) => {
                return (
                  <div key={index}>
                    <div>{link.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <div className="social-section flex flex-col items-center py-[24px]">
        <div className="container px-[32px]">
          <div className="content">
            <nav className="social-icons flex gap-[24px] justify-center">
              <Image
                src="/slack.svg"
                height={`24`}
                width={`24`}
                alt="slack icon"
              />
              <Image
                src="/github.svg"
                height={`24`}
                width={`24`}
                alt="github icon"
              />
            </nav>
          </div>
        </div>
      </div>
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
