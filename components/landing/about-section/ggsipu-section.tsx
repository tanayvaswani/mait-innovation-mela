import Image from "next/image";
import ggsipu from "@/public/ggsipu2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const GGSIPUSection = () => {
  return (
    <div className="my-20 flex w-full flex-col-reverse items-center justify-between gap-6 px-4 md:px-12 lg:flex-row-reverse">
      <div className="flex w-full flex-col items-start justify-center">
        <h3 className="text-sm font-semibold text-red-100">
          <span className="pr-1 text-lg font-bold text-red-600">|</span>GGSIPU,
          New Delhi
        </h3>

        <h2 className="mb-4 mt-2 text-xl font-bold text-neutral-100 md:text-3xl">
          About GGSIPU
        </h2>

        <p className="font-medium text-neutral-400">
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
      </div>

      <div className="rounded-xl border bg-neutral-800 p-2 md:rounded-2xl md:p-4">
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
