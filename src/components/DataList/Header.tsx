import Link from "next/link";
import { HeadersProps } from "@/app/interface";
const Header = ({ title, linkHref, linkTitle }: HeadersProps) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-color-primary text-2xl p-4">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className=" text-color-blueOcean hover:text-color-primary transition-all text-2xl p-4 underline"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
