"use client";

import Marquee from "react-fast-marquee";

const brandsRow1 = [
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F008_3f80fb05-9f54-45b5-b218-585bed7664a7.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F002_98de2cc0-7345-41dc-90c8-ae10ce46623f.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F009_1ecf43b6-ae68-44b0-a262-92e5d5a202de.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F010_f5ca60f7-0a10-4500-a9a2-e10fd57a5aac.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F012_f9e83684-a672-4e14-abaa-9e0085c87c9e.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F003_41e04877-978c-4da3-b7b8-15903d15cfd7.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F004_2db30ded-e2e2-490c-953c-036d1352a6b2.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F005_619f82ee-a4ef-40b9-a844-dc337680d263.jpg&w=1200&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F007_57e07a37-00de-43b8-ac6a-e0fd5afadd6c.jpg&w=1200&q=75",
  },
];

const Carousel = () => {
  return (
    <section className="bg-background py-20">
      <div className="w-full px-4">
        <Marquee gradient={false} speed={50}>
          <div className="flex items-center">
            {brandsRow1
              .filter((brand) => !!brand.logo)
              .map((brand, index) => (
                <img
                  key={index}
                  src={brand.logo}
                  alt={`Brand ${index}`}
                  className="w-[350px] h-[350px] object-cover object-center mx-4 rounded-md shadow-md"
                />
              ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Carousel;
