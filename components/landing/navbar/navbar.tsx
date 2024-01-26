import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed z-50 top-0 border-b shadow-sm w-full h-14 px-4 bg-background/60 backdrop-blur-md flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="flex items-center space-x-4">
          <Button
            className="hidden md:flex"
            variant={"outline"}
            size={"sm"}
            asChild
          >
            <Link href={""}>See more</Link>
          </Button>
          <Button
            className="bg-gradient-to-r from-red-600 to-pink-600 text-neutral-100 font-semibold"
            size={"sm"}
            asChild
          >
            <Link href={""}>Join now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
