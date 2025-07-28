
const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40 px-4 sm:px-6 lg:px-10 py-20 space-y-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            FARZANDINGIZNING MUVAFFAQIYAT YO‘LI
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            Farzandingiz 𝙎𝙠𝙮𝙢𝙞𝙣𝙙 𝘼𝙘𝙖𝙙𝙚𝙢𝙮 bilim, tarbiya va o‘sishga yo‘l oladi.
            Bizning xavfsiz, samimiy va qo‘llab-quvvatlovchi maktab muhitimizda
            o‘quvchilar o‘z salohiyatini to‘liq namoyon eta oladilar. Fidoyi
            o‘qituvchilarimiz zamonaviy va samarali o‘qitish uslublaridan
            foydalanib, o‘quvchilarga mustahkam bilim asoslarini beradilar.
            Farzandingiz hayoti davomida asqotadigan bilim va ko‘nikmalarga ega
            bo‘ladi. Maktabimizda nafaqat fanlar chuqur o‘rgatiladi, balki har
            bir bola shaxs sifatida rivojlanadi, mustaqil fikrlaydi, jamoada
            ishlashni o‘rganadi va o‘z oldiga maqsad qo‘yib harakat qilishga
            ilhomlanadi.
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
    </div>
  );
};

export default About;
