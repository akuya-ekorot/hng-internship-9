import Head from "next/head";

/**Components */
import ProfileSection from "../components/ProfileSection";
import LinkSection from "../components/LinkSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

/**Data */
import myData from "../utils/myData";

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

    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <section className="w-full flex items-stretch max-w-[1216px] m-auto">
        <main className="md:px-[32px] grow">
          <div className="content flex flex-col md:gap-[56px] gap-[32px]">
            <ProfileSection
              twitter={myData.twitter}
              slack={myData.slack}
              photo={myData.photo}
            />
            <LinkSection />
          </div>
        </main>
      </section>
      <SocialSection />
    </div>
    <Footer />
  </>
);

export default Home;