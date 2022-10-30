import Social from "./Social";
import social from "../utils/social";

const SocialSection = () => (
  <div className="social-section flex flex-col items-center py-[24px]">
    <div className="container px-[32px]">
      <div className="content">
        <nav className="social-icons flex gap-[24px] justify-center">
          {social.map((profile, index) => (
            <Social
              src={profile.src}
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

export default SocialSection;
