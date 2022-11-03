import Footer from "./components/Footer";
import LinkSection from "./components/LinkSection";
import ProfileSection from "./components/ProfileSection";
import SocialSection from "./components/SocialSection";

function App() {
  return (
    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <section className="w-full flex items-stretch max-w-[1216px] m-auto">
        <main className="md:px-[32px] grow">
          <div className="content flex flex-col md:gap-[56px] gap-[32px]">
            <ProfileSection />
            <LinkSection />
            <SocialSection />
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default App;
