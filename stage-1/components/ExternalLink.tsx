import { FunctionComponent } from "react";
import { pageLink } from "../utils/types";

const ExternalLink = ({name, link}: pageLink) => (
  <a className="" href={link}>
    <div className="flex flex-col items-center py-[24px] bg-[#EAECF0] rounded-lg text-text-lg font-medium">
      <p className="text-gray-900">{name}</p>
    </div>
    <img />
  </a>
);

export default ExternalLink;
