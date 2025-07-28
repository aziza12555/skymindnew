"use client";

import { useState } from "react";
import KonsultatsiyaForm from "./konsultatsiyaForm";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const slides = [
  {
    title: "Master-klass va musobaqalar",
    text: "«𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮»da har hafta soha bo‘yicha o‘tkaziladigan master-klass va musobaqalarda qatnashib, amaliy va muhim ko‘nikmalarga ega bo‘ling.",
  },
  {
    title: "1 yil ichida talabgir va daromadli mutaxassis bo‘ling!",
    text: "“𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮”da dasturlash, dizayn va marketing yo‘nalishlarini 4 oydan 1 yilgacha bo‘lgan muddatda o‘rganib, bozorda talabgir kasb egasi bo‘ling.",
  },
  {
    title: "Kelajak kasblarni biz bilan quring",
    text: "Hozirgi kunda istalgan biznes va startupning rivojlanishi uchun dasturchi, dizayner va marketolog muhim mutaxassislardan biri hisoblanadi. Shuning uchun ham ushbu sohalarda talab doimiy tarzda o‘sib bormoqda.",
  },
  {
    title: "7500 dan ortiq bitiruvchilar safiga qo‘shiling!",
    text: "Shu kunga qadar “𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮” 7500 dan ortiq muvaffaqiyatli bitiruvchilarga talim bergan. Ularning 85-95 foizi doimiy tarzda ishli bo‘lib kelmoqda.",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-28 max-w-7xl m-auto p-4">
      <div className="w-150 bg-[#f3ebdb] rounded-4xl relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="space-y-6 mt-6 px-10 min-h-[300px]"
                style={{ display: index === activeIndex ? "block" : "none" }}
              >
                <h1 className="text-3xl text-[#967851] font-black">
                  {slide.title}
                </h1>
                <p className="text-[#967851] text-2xl">{slide.text}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex  gap-2  pb-8 ml-5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-[#967851]" : "bg-[#d2bfa4]"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <KonsultatsiyaForm />
    </div>
  );
};

export default HeroSection;
