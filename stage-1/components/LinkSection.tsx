import ExternalLink from "./ExternalLink";
import pageLinks from "../utils/pageData";

const LinkSection = () => (
    <div className="link-section flex flex-col gap-[24px]">
    {pageLinks.map((pageLink, index) => (
      <ExternalLink
        name={pageLink.name}
        link={pageLink?.link}
        key={index}
      />
    ))}
  </div>
);

export default LinkSection;