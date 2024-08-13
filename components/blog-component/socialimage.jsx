import Image from "next/image";

const AssetImg = ({ src, alt }) => {
  return <Image width={40} height={40} src={src} alt={alt} />;
};

export default AssetImg;
