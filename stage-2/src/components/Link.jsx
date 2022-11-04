const Link = ({ name, link, id, subtext, target }) => (
  <a
    className=" group bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-gray-400 disabled:bg-gray-25 disabled:border-gray-100 disbled:drop-shadow-[0, 1px, 2px, rgba(16, 2, 40, 0.05)] rounded-lg text-text-lg font-medium overflow-hidden"
    href={link}
    id={id}
    target={target ? "_blank" : ""}
    rel="noreferrer"
    role="link"
  >
    <div className="flex flex-col items-stretch p-[24px] gap-[8px]">
      <p className="text-gray-900 md:text-text-lg text-sm font-medium">
        {name}
      </p>
      <div className="group-hover:bg-gray-100 bg-gray-300 h-[1px] w-full"></div>
      <p className="text-gray-500 lg:text-[14px] text-[12px] font-normal">
        {subtext}
      </p>
    </div>
    <img />
  </a>
);

export default Link;
