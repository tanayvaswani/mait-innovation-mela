import Image from "next/image";
import ggsipu from "@/public/ggsipu2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const GGSIPUSection = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between my-20 gap-6 px-4 md:px-12">
      <div className="w-full flex flex-col items-start justify-center">
        <h3 className="font-semibold text-sm text-neutral-300">
          <span className="font-bold text-red-600 pr-1">|</span>GGSIPU
        </h3>

        <h2 className="text-xl md:text-3xl font-bold text-neutral-100 mt-2 mb-4">
          About GGSIPU
        </h2>

        <p className="text-neutral-400 font-medium">
          Guru Gobind Singh Indraprastha University (GGSIPU) is the first
          University established in 1998 by Govt. of NCT of Delhi under the
          provisions of Guru Gobind Singh Indraprastha University Act, 1998 read
          with its Amendment in 1999 The University is recognized by University
          Grants Commission (UGC), India under section 12B of UGC Act. The Guru
          Gobind Singh Indraprastha University has been Accredited with a CGPA
          of 3.56 on a seven- point scale at A++ Grade valid for a period of 7
          years from 14-02-2023. It is a teaching and affiliating University
          with the explicit objective of facilitating and promoting “studies,
          research and extension work in emerging areas of higher education with
          focus on professional education, for example engineering, technology,
          management studies, medicine, pharmacy, nursing, education, law, etc.
          and also to achieve excellence in these and connected fields and other
          matters connected therewith or incidental thereto.
        </p>

        <Button className="mt-6 rounded-full hover:shadow-sm" asChild>
          <Link href={""} target="_blank">
            See more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-neutral-800 border">
        <Image
          src={ggsipu}
          alt={"platform"}
          width={1600}
          height={1460}
          className="rounded-lg md:rounded-xl"
        />
      </div>
    </div>
  );
};

export default GGSIPUSection;
