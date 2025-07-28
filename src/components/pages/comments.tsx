import { User2Icon } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator"; // 💡 Import qilamiz
import VideoList from "./videoList";
import Surprise from "./surprise";

const Testimonials = () => {
  const reviews = [
    {
      name: "Bexzod Nasriddinov",
      title: "SMM mutaxassisi",
      content: `Ko‘p kuzatganman: «Skymind Academy» bitiruvchilari har taraflama ko'nikmasi bor. Berilgan vazifalarni sidqidildan, mas'uliyat bilan qilishga harakat qilishadi. Shunisi bilan boshqalardan ajralib turadi. Ayniqsa kopirayting bo'yicha bilim va ko'nikma berilishi zo'r. Shaxsiy blog yuritishga majburlashlari ham zo'r) Shuni sababidan ancha ishimga foydasi tegadi haligacha. Men bitirganimga 1 yildan oshdi.`,
    },
    {
      name: "Ulug'bek Raxmonov",
      title: "Grafik dizayner",
      content: `Grafik Dizayn kursini 2022-yil Noyabr oyida boshlab, 2023-yil Iyun oyida tamomladim. Bu vaqt oralig’ida G’iyos Hojiyev ustozimdan bilim va ko’nikmalar oldim. Kurs haqidagi fikrim ijobiy, o’tiladigan mavzular barchasi trendbop, har dars albatta bitta yangi bilim oldim va eng yaxshisi Najot Ta’limning Milliy atmosferasi juda ham odamni o’ziga jalb qiladi. Shu bois hozir Skymind Academyda ikkinchi kursni ya’ni SMM Pro kursida ham ta’lim olayapman.`,
    },
    {
      name: "Akbar Ahmadjonov",
      title: "Fullstack dasturchi",
      content: `Assalomu alaykum, avvalombor katta rahmat Skymind Academy jamoasi ustozlari va rahbariyatlariga. Skymind Academyni tanlaganimdan hech afsuslanmayman. Bu yerda tajribali, o'z ishining ustalari yig'ilgan. Fullstack kursida barcha kerakli bilimlarni oldim va hozirda olgan bilimlarimni Koreyadagi Hoca Inc. kompaniyasida qo'llab kelmoqdaman.`,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getShortText = (text: string, maxLength = 200) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
   <>
   <VideoList/>
    <section className="max-w-7xl mx-auto py-16  dark:bg-[#121212] px-4 md:px-10">
      <h2 className="text-3xl font-bold  mb-10">
        O‘quvchilarning fikrlari
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {reviews.map((review, index) => {
          const isExpanded = expandedIndex === index;
          const textToShow = isExpanded
            ? review.content
            : getShortText(review.content);

          return (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1e1e] shadow-md rounded-xl p-6 w-full md:w-1/3 flex flex-col justify-between"
            >
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                {textToShow}
              </p>

              <button
                onClick={() => toggleExpanded(index)}
                className="text-blue-600 text-sm font-medium hover:underline mb-4 self-start"
              >
                {isExpanded ? "Kamroq" : "Ko‘proq"}
              </button>

              {/* 🔽 DOIMIY SEPARATOR */}
              <Separator className="my-4" />

              {/* 🔽 User info */}
              <div className="mt-auto flex items-start gap-2">
                <User2Icon className="mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <Surprise/>
   </>
  );
};

export default Testimonials;
