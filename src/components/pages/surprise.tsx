import Konsultatsiya from "./konsul";

const courses = [
  {
    title: "5 000 000 so‘mgacha pul mukofoti",
    image:
      "https://najottalim.uz/_next/image?url=%2Fimages%2Fbonus-energy.png&w=96&q=75",
    description:
      "IT park rezidenti bo‘lgan ekspartyor kompaniyalarda 6 oydan ko‘proq muddat ishlagan bitiruvchilarga 5 000 000 so‘mgacha pul mukofoti beriladi. *",
  },
  {
    title: "Ingliz tili kursi uchun 5 000 000 so‘mgacha vaucher",
    image:
      "https://najottalim.uz/_next/image?url=%2Fimages%2Fbonus-board2.png&w=96&q=75",
    description:
      "Ingliz tilini “Skymind Academy”da o'rganishingiz uchun 4 000 000 so'mli yoki «Cambridge» o'quv markazida o'qishingiz uchun 1 000 000 so'mli vaucherlar taqdim etamiz.",
  },
  {
    title: "Onlayn kursni bepul qo‘lga kiriting",
    image:
      "https://najottalim.uz/_next/image?url=%2Fimages%2Fbonus-note2.png&w=96&q=75",
    description:
      "Kasbiy ta‘lim dasturida o‘qish niyatida bo‘lgan va kurs uchun to‘lovni oldindan to‘liq amalga oshirganlar uchun najottalim.uz onlayn platformasidan 2,500,000 so‘m qiymatdagi Dasturlash foundation kursi bepul taqdim etiladi.",
  },
  {
    title: "Python musobaqalari",
    image:
      "https://najottalim.uz/_next/image?url=%2Fimages%2Fbonus-cactus2.png&w=96&q=75",
    description:
      "Musobaqalarda kamida yilda bir marotaba chet elga bepul sayohat qilish imkoniyatini beramiz.",
  },
];

const Surprise = () => {
  return (
   <>
    <div className="mt-24 max-w-6xl mx-auto px-4">
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          O‘quvchilar uchun bonus va mukofotlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#f3f8ff] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="flex gap-4 items-center mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 object-cover rounded-full bg-blue-100 flex-shrink-0"
                />
                <h3 className="font-bold text-lg sm:text-xl text-gray-500">
                  {course.title}
                </h3>
              </div>
              <p className="text-lg font-bold text-gray-500 leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Konsultatsiya/>
   </>
  );
};

export default Surprise;
