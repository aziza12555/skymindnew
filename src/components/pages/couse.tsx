import { useState } from "react";
import { Button } from "../ui/button";

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


const Course = () => {
      const [showMoreIndex, setShowMoreIndex] = useState<number | null>(null);
  return (
    <div className="mt-50 max-w-7xl m-auto">
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
                      variant={i % 2 === 0 ? "secondary" : "outline"}
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
    </div>
  )
}

export default Course
