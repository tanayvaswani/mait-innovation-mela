"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-[24rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
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
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. ",
    name: "This is a dummy text, will add those 5 logos here.",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. ",
    name: "This is a dummy text, will add those 5 logos here.",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. ",
    name: "This is a dummy text, will add those 5 logos here.",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. ",
    name: "This is a dummy text, will add those 5 logos here.",
    title: "This is a dummy text, will add those 5 logos here.",
  },
  {
    quote:
      "This is a dummy text, will add those 5 logos here. This is a dummy text, will add those 5 logos here. ",
    name: "This is a dummy text, will add those 5 logos here.",
    title: "This is a dummy text, will add those 5 logos here.",
  },
];
