import { pageLink } from "../utils/types";

const ExternalLink = ({ name, link, id }: pageLink) => (
  <a
    className="bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-gray-400 disabled:bg-gray-25 disabled:border-gray-100 disbled:drop-shadow-[0, 1px, 2px, rgba(16, 2, 40, 0.05)] rounded-lg text-text-lg font-medium overflow-hidden"
    href={link}
    id={id}
    target="_blank"
    rel="noreferrer"
    role="link"
  >
    <div className="flex flex-col items-center py-[24px] ">
      <p className="text-gray-900 md:text-text-lg text-sm font-medium">{name}</p>
    </div>
    <img />
  </a>
);

export default ExternalLink;
