import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { ChevronRight, Sparkles } from "lucide-react";
import { MovingCardsRight } from "@/components/landing/moving-cards/moving-cards-right";
import GGSIPUSection from "@/components/landing/about-section/ggsipu-section";
import AboutInstitue from "@/components/landing/about-section/institute-section";
import Particles from "@/components/ui/particles";
import { MovingCardsLeft } from "@/components/landing/moving-cards/moving-cards-left";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function MarketingPage() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Particles className="fixed  inset-0 -z-10" quantity={1000} />
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-4xl md:text-5xl text-center text-neutral-200 mb-2">
          Technovation
        </h1>

        <h1 className="text-4xl md:text-5xl text-center text-neutral-200 mb-4 md:mb-4">
          Bridging The Future
        </h1>

        <div className="text-4xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 px-4 pb-4 w-fit">
          Innovation Mela 2024
        </div>

        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto px-2",
            textFont.className
          )}
        >
          Organised by - Department of Computer Science & Engineering, Maharaja
          Agrasen Institue of Technology, New Delhi, India.
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6 md:mt-6 gap-2">
        <Button
          className="rounded-full text-neutral-200 font-semibold bg-gradient-to-r from-red-600 to-pink-600"
          size={"lg"}
          asChild
        >
          <Link href={""}>
            Join Now <Sparkles className="ml-1 h-5 w-5" />{" "}
          </Link>
        </Button>

        <Button
          className="rounded-full"
          size={"lg"}
          variant={"outline"}
          asChild
        >
          <Link href={""}>
            See more <ChevronRight className="ml-1 h-5 w-5" />{" "}
          </Link>
        </Button>
      </div>

      {/* Organizers */}
      <MovingCardsLeft />

      {/* Organizers */}
      <MovingCardsRight />

      {/* About GGSIPU */}
      <GGSIPUSection />

      {/* About MAIT */}
      <AboutInstitue />
    </main>
  );
}
