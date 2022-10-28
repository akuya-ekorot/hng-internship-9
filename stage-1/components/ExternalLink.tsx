import { pageLink } from "../utils/types";

const ExternalLink = ({ name, link, id }: pageLink) => (
  <a
    className="focus:outline-none focus:border focus:border-gray-400 rounded-lg text-text-lg font-medium overflow-hidden"
    href={link}
    id={id}
  >
    <div className="flex flex-col items-center py-[24px] bg-gray-200 hover:bg-gray-300 ">
      <p className="text-gray-900">{name}</p>
    </div>
    <img />
  </a>
);

export default ExternalLink;
