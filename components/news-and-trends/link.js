import Image from "next/image";
import Link from "next/link";

const NewsLink = (props) => {
  const { className, title, src, href } = props;
  return (
    <span className={className}>
      <Link href={href}><a target='_blank' rel="noreferrer">
        {title}
        <span style={{ paddingLeft: "10px" }}>
          <Image src={src} height={12} width={8} alt="" />
        </span>
      </a></Link>
    </span>
  );
};

export default NewsLink;
