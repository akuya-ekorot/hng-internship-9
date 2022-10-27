import Social from "./Social"

const SocialSection = () => (
    <div className="social-section flex flex-col items-center py-[24px]">
    <div className="container px-[32px]">
      <div className="content">
        <nav className="social-icons flex gap-[24px] justify-center">
          <Social
            src="/slack.svg"
            alt="slack icon"
          />
          <Social
            src="/github.svg"
            alt="github icon"
          />
        </nav>
      </div>
    </div>
  </div>
);

export default SocialSection;