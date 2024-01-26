"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function MovingCardsRight() {
  return (
    <div className="h-[16rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. 1",
    name: "This is a dummy text, will add those 5 logos here.1",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. 2",
    name: "This is a dummy text, will add those 5 logos here.2",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. 3",
    name: "This is a dummy text, will add those 5 logos here.3",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. 4",
    name: "This is a dummy text, will add those 5 logos here.4",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. 5",
    name: "This is a dummy text, will add those 5 logos here.5",
    title: "This is a dummy text, will add those 5 logos here.",
  },
];
