import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface DownLoadButtonProps {
  image: string;
  storeLink: string;
}

const DownloadButton: FC<DownLoadButtonProps> = ({ image, storeLink }) => {
  return (
    <Link href={storeLink}>
      <Image src={image} height={200} width={200} alt="" />
    </Link>
  );
};

export default DownloadButton;
