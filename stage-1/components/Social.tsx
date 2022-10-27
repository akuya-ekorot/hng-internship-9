import Image from "next/image";
import { Social } from "../utils/types";

const Social = ({src, alt}: Social) => (
  <Image src={src} height={`24`} width={`24`} alt={alt} />
);

export default Social;
