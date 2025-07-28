import { useState } from "react";
import { Button } from "@/components/ui/button"; // Sizning Tailwind asosidagi Button komponentingiz
import HeroSection from "./hero";
import GraduatesJobs from "./graduatesJobs";
import Carousel from "./carousel";
import Testimonials from "./comments";

const courses = [
  {
    title: "Dasturlash Foundation",
    duration: "4 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2F301055a8-aa5a-487b-a682-4c761a764592.jpg&w=96&q=75",
    tags: ["Dasturlash", "Bootcamp"],
    description:
      "Dasturlash Foundation kursi dasturlash asoslarini noldan o‘rgatadi. Bu kurs orqali siz algoritmlar, mantiqiy fikrlash, muammolarni tahlil qilish va dasturlashga kirishish ko‘nikmalarini o‘zlashtirasiz.",
  },
  {
    title: "React JS",
    duration: "8 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2Fda5b1f8d-d2f1-4f9c-a8bd-9254271d26ba.jpg&w=96&q=75",
    tags: ["Dasturlash", "Standart"],
    description:
      "React JS kursida siz komponentlar, state management, routing, API bilan ishlash kabi zamonaviy frontend texnologiyalarini chuqur o‘rganasiz.",
  },
  {
    title: "Grafik Dizayn",
    duration: "6 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2Ffd2e6163-9e50-4555-b67e-dfcfa36efbdc.jpg&w=96&q=75",
    tags: ["Design", "Bootcamp"],
    description:
      "Ushbu kurs orqali siz Adobe Photoshop, Illustrator, Figma kabi dasturlarda ishlashni va kreativ dizaynlar yaratishni o‘rganasiz.",
  },
  {
    title: "Phyton",
    duration: "8 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2F95a85650-e85f-4a17-9132-8871f63d80e9.jpg&w=96&q=75",
    tags: ["Dasturlash", "Standart"],
    description:
      "Python dasturlash tili asoslari, OOP, fayllar bilan ishlash, ma’lumotlar tahlili va oddiy dasturlar yaratish haqida o‘rganasiz.",
  },
  {
    title: "Grafik Dizayn",
    duration: "6 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2F32bb336a-cbb1-4462-b3e6-94027f5fbbb3.jpg&w=96&q=75",
    tags: ["Design", "Standart"],
    description:
      "Bu dizayn kursida brending, vizual identitet yaratish, typografiya va ranglar psixologiyasi haqida o‘rganasiz.",
  },
  {
    title: "QA (Quality Assurance)",
    duration: "5 oy",
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2F9bacacd3-3406-4eca-9caf-8d9f3ef070fb.jpg&w=96&q=75",
    tags: ["Dasturlash", "Standart"],
    description:
      "QA kursida dasturiy ta'minot testlash, bug report yozish, test case va test planlar yaratish, avtomatlashtirilgan testlar haqida o‘rganasiz.",
  },
];

const skyMind = [
  {
    image:
      "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fcourses%2F9bacacd3-3406-4eca-9caf-8d9f3ef070fb.jpg&w=96&q=75",
    description:
      "Dasturlash, dizayn va marketing kabi zamonaviy kasblar o‘rgatiladigan markaz.",
  },
  {
    image:
      "https://static.tildacdn.com/tild6537-3834-4362-b136-396134343531/-04.png",
    description:
      "Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.",
  },

  {
    image:
      "data:image/png;base64,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",
    description:
      "Bir vaqtning o‘zida 2500 dan ortiq o‘quvchilar va 350 dan ortiq katta jamoani bir maskanga yig‘a olgan ta‘lim va innovatsiya markazi.",
  },
];

const HomePage = () => {
  const [showMoreIndex, setShowMoreIndex] = useState<number | null>(null);

  return (
<>

    <div className="w-full">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              FARZANDINGIZNING MUVAFFAQIYAT YO‘LI
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              Farzandingiz 𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮 bilim, tarbiya va o‘sishga yo‘l
              oladi. Bizning xavfsiz, samimiy va qo‘llab-quvvatlovchi maktab
              muhitimizda o‘quvchilar o‘z salohiyatini to‘liq namoyon eta
              oladilar. Fidoyi o‘qituvchilarimiz zamonaviy va samarali o‘qitish
              uslublaridan foydalanib, o‘quvchilarga mustahkam bilim asoslarini
              beradilar. Farzandingiz hayoti davomida asqotadigan bilim va
              ko‘nikmalarga ega bo‘ladi. Maktabimizda nafaqat fanlar chuqur
              o‘rgatiladi, balki har bir bola shaxs sifatida rivojlanadi,
              mustaqil fikrlaydi, jamoada ishlashni o‘rganadi va o‘z oldiga
              maqsad qo‘yib harakat qilishga ilhomlanadi.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg"
              alt="Student 1"
              className="rounded-xl w-full max-h-[320px] object-cover shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
              alt="Student 2"
              className="rounded-xl w-full max-h-[400px] object-cover shadow-md"
            />
          </div>
        </div>
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">
            📘 Bizning kurslar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-xl">{course.title}</h3>
                    <p className="mt-1">{course.duration}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 flex-wrap">
                  {course.tags.map((tag, i) => (
                    <Button
                      key={i}
                      variant={i % 2 === 0 ? "secondary" : "destructive"}
                      size="sm"
                      className="capitalize"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>

                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setShowMoreIndex(showMoreIndex === index ? null : index)
                    }
                  >
                    {showMoreIndex === index ? "Yopish" : "Ko‘proq ma’lumot"}
                  </Button>

                  {showMoreIndex === index && (
                    <p className="mt-3 text-sm  leading-relaxed">
                      {course.description ||
                        "Qo‘shimcha ma’lumot hozircha mavjud emas."}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold mb-12">𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮 bu —</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {skyMind.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={`SkyMind image ${index + 1}`}
                  className="w-28 h-28 object-contain mb-6"
                />
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
       
        </section>
   
       
      </div>
         <Carousel/>
         <Testimonials/>
              <GraduatesJobs />
    </div>
    
  </>
  ); 
};

export default HomePage;
