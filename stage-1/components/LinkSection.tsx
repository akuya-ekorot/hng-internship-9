import ExternalLink from "./ExternalLink";
import pageLinks from "../utils/pageData";

const LinkSection = () => (
  <div className="link-section flex flex-col gap-[24px]">
    {pageLinks.map((pageLink) => (
      <ExternalLink
        id={pageLink.id}
        name={pageLink.name}
        link={pageLink?.link}
        key={pageLink.id}
      />
    ))}
  </div>
);

export default LinkSection;
