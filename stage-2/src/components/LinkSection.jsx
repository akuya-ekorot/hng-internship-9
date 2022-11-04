import Link from "./Link";
import pageLinks from "../utils/pageData";

const LinkSection = () => (
  <div className="link-section flex flex-col gap-[24px]">
    {pageLinks.map((pageLink) => (
      <Link
        id={pageLink.id}
        name={pageLink.name}
        link={pageLink?.link}
        subtext={pageLink?.subtext}
        target={pageLink?.target}
        key={pageLink.id}
      />
    ))}
  </div>
);

export default LinkSection;
