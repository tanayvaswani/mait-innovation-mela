import Image from "next/image";
import mait from "@/public/mait-img.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutInstitue = () => {
  return (
    <div className="my-20 flex w-full flex-col-reverse items-center justify-between gap-6 px-4 md:px-12 lg:flex-row">
      <div className="flex w-full flex-col items-start justify-center">
        <h3 className="text-sm font-semibold text-red-100">
          <span className="pr-1 text-lg font-bold text-red-600">|</span>MAIT,
          New Delhi
        </h3>

        <h2 className="mb-4 mt-2 text-xl font-bold text-neutral-100 md:text-3xl">
          About the Institue
        </h2>

        <p className="font-medium text-neutral-400">
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

      <div className="rounded-xl border bg-neutral-800 p-2 md:rounded-2xl md:p-4">
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
