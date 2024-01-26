import Image from "next/image";
import mait from "@/public/mait-img.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutInstitue = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between my-20 gap-6 px-4 md:px-12">
      <div className="w-full flex flex-col items-start justify-center">
        <h3 className="font-semibold text-sm text-red-100">
          <span className="font-bold text-lg text-red-600 pr-1">|</span>MAIT,
          New Delhi
        </h3>

        <h2 className="text-xl md:text-3xl font-bold text-neutral-100 mt-2 mb-4">
          About the Institue
        </h2>

        <p className="text-neutral-400 font-medium">
          Maharaja Agrasen Institute of Technology was established in 1999 by
          Maharaja Agrasen Technical Education Society promoted by a group of
          well known Industrialists, Businessman, Professionals and
          Philanthropists with an aim to promote quality education in the field
          of Technology and Management. Since then, MAIT has grown from strength
          to strength to emerge as one of the top technical institutes among the
          private Institutes and has been constantly ranked amongst the top
          engineering Institutes by DATAQUEST. Institute offers Bachelor&apos;s
          Degree in 13 disciplines of Engineering - CSE, CST, ECE, EEE, IT, ITE,
          MAE, ME, AI &ML, CSE (Artificial Intelligence), CSE (Data Science),
          Electronics Engineering (VLSI Design and Technology), ECE (Advanced
          Communication Technology), BBA 3 Year and Postgraduate degree in MBA.
        </p>
      </div>

      <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-neutral-800 border">
        <Image
          src={mait}
          alt={"platform"}
          width={1600}
          height={1460}
          className="rounded-lg md:rounded-xl"
        />
      </div>
    </div>
  );
};

export default AboutInstitue;
