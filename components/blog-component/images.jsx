import Image from "next/image";

const Images = ({ src, alt, url }) => {
  return (
    <a href={url}>
      <Image width={40} height={40} src={src} alt={alt} />
    </a>
  );
};

export default Images;
