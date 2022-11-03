const Social = ({ src, alt, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <img src={src} height={`24`} width={`24`} alt={alt} />
  </a>
);

export default Social;
