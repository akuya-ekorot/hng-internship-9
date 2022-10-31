import Image from "next/image";
import { Social } from "../utils/types";

const Social = ({ src, alt, link }: Social) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Image src={src} height={`24`} width={`24`} alt={alt} />
  </a>
);

export default Social;
