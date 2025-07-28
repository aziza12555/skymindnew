import { useState } from "react";

const graduates = [
  {
    name: "Sardor Karimov",
    profession: "Frontend Developer — EPAM Systems",
    image: "https://i.ytimg.com/vi/NxwOS3-s_fQ/hqdefault.jpg",
    message: "Najot Ta'limdagi kurslar hayotimni o‘zgartirdi. Ustozlar va muhit juda kuchli bo‘lgan!",
  },
  {
    name: "Dilnoza Tursunova",
    profession: "UI/UX Designer — Artel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYJgIOGnjXOu25cEQX2HDkVVqhfvntkGG_bLbEBWjB-rXdBaJAJ3WzFrQvcjQY7rs_lY&usqp=CAU",
    message: "Bu yerda o‘qib, birinchi ish o‘rnimga joylashdim. Amaliy ko‘nikmalar juda zo‘r!",
  },
  {
    name: "Abdulloh Nurmatov",
    profession: "Backend Developer — Uzum",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwpajYcuYNtnqa6Gh_iyiAfY_HCNFgE3QbAAQcJQcbUCV99jhUZkkTfhGA4vQ_-8F70c&usqp=CAU",
    message: "Dasturlashni 0 dan boshladim. Hozir esa kompaniyada ishlayapman. Rahmat, Najot Ta'lim!",
  },
  {
    name: "Nilufar Shamsiyeva",
    profession: "QA Engineer — Payme",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message: "Nazariyani amaliyot bilan uyg‘unlashtirish menga tez o‘sishga yordam berdi.",
  },
  {
    name: "Javohir Toshpo‘latov",
    profession: "Full Stack Developer — OneFlow",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Najot Ta'limdagi ustozlar menga haqiqiy yo‘l ko‘rsatdi va ilhom berdi!",
  },
  {
    name: "Madina Ro‘ziyeva",
    profession: "Graphic Designer — Studio.uz",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    message: "Ijodkorlik va texnikani uyg‘unlashtirishni shu yerda o‘rgandim!",
  },
  {
    name: "Azizbek Rahmatov",
    profession: "DevOps Engineer — MyTaxi",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    message: "Kursdan keyin hozirgi ishga joylashdim va real loyihalar bilan shug‘ullanayapman.",
  },
  {
    name: "Ziyoda Qurbonova",
    profession: "Mobile Developer — IT Park",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    message: "Flutter kursi juda foydali bo‘ldi, hozir o‘zim mustaqil ilova yaratayapman.",
  },
];



const Graduates = () => {
  const [showMore, setShowMore] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">
        🎓 Bitiruvchilarimiz
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {graduates.map((grad, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={grad.image}
                alt={grad.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-xl font-semibold">{grad.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {grad.profession}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-200">
              {showMore === index
                ? grad.message
                : grad.message.slice(0, 80) + (grad.message.length > 80 ? "..." : "")}
            </p>

            {grad.message.length > 80 && (
              <button
                onClick={() => setShowMore(showMore === index ? null : index)}
                className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                {showMore === index ? "Yopish" : "Batafsil o‘qish"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Graduates;
