import Social from "./Social";
import social from "../utils/social";

const SocialSection = () => {
  return (
    <div className="social-section w-full flex justify-stretch py-[24px] max-w-[1216px] m-auto">
      <div className="container px-[32px] grow">
        <div className="content">
          <nav className="social-icons flex gap-[24px] justify-center">
            {social.map((profile, index) => (
              <Social
                src={profile.src[profile.name]}
                alt={profile.alt}
                link={profile.link}
                key={index}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
