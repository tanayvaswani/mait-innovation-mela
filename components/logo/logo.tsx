import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 flex">
        <Image src={"/mait.png"} alt={"logo"} height={50} width={50} />
        <p
          className={cn(
            "text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 pb-1",
            headingFont.className
          )}
        >
          Innovation Mela 2024
        </p>
      </div>
    </Link>
  );
};

export default Logo;
