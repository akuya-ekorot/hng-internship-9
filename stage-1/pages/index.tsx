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

    <div className="flex flex-col">
      <section className="flex flex-col grow px-[112px] py-[64px]">
        <main className="py-[32px]">
          <div className="content flex flex-col gap-[56px]">
            <ProfileSection
              twitter={myData.twitter}
              slack={myData.slack}
              photo={myData.photo}
            />
            <LinkSection />
          </div>
        </main>
        <SocialSection />
      </section>
      <Footer />
    </div>
  </>
);

export default Home;
