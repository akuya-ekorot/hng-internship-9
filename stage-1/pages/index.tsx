import Head from "next/head";
import Image from "next/image";

type link = {
  name: string;
  link?: string;
};

const pageLinks: link[] = [
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
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="flex flex-col">
      <section className="flex flex-col grow px-[112px] py-[64px]">
        <main className="py-[32px]">
          <div className="content flex flex-col gap-[56px]">
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
            <div className="link-section flex flex-col gap-[24px]">
              {pageLinks.map((link, index) => {
                return (
                  <a className="" href={link?.link} key={index}>
                    <div className="flex flex-col items-center py-[24px] bg-[#EAECF0] rounded-lg text-text-lg font-medium text-gray-900">
                      <p>{link?.name}</p>
                    </div>
                    <img />
                  </a>
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
            <p className="grow flex items-center justify-center font-inter text-text-md text-gray-500">
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
  </>
);

export default Home;
