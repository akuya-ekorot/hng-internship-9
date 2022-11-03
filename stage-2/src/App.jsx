import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="w-full flex flex-col items-stretch pt-[64px] pb-[32px] md:pb-[64px] gap-[24px] md:px-[112px] px-[16px]">
      <ProfileSection />
      <Footer />
    </div>
  );
}

export default App;
