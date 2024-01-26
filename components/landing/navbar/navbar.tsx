import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 border-b shadow-sm w-full h-14 px-4 bg-black/10 backdrop-blur-md flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Logo />

        <div className="flex items-center justify-between md:w-auto md:block w-full space-x-4">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={""}>See more</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href={""}>Join now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
