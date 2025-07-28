"use client";

import Marquee from "react-fast-marquee";
const brandsRow1 = [
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Ffpi.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2F605agency.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FAgrobank.png&w=384&q=75",
  },
  { logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FHumo-dark.png&w=384&q=75" },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fdizpro.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Flogo.png&w=384&q=75",
  },
  { logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FOKS.png&w=384&q=75" },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FitechArt.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fislom-uz.png&w=384&q=75",
  },
];
const brandsRow2 = [
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FMacBro.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fnovalab.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fjafton.png&w=384&q=75",
  },
  { logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FKorzinka.png&w=384&q=75" },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FMars.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fishonch.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FMED-PHARM-PLUS.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FIIV.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Flets-animate.png&w=384&q=75",
  },
];
const brandsRow3 = [
  { logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FUniversalbank.png&w=384&q=75" },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FSAG.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FQurilish-vazirligi.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Friada.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FTrastBank.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fyoshlar-ishlari.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fpdp.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FSmart-Soft-Development.png&w=384&q=75",
  },
  {
    logo: "https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FMehrigiyo.png&w=384&q=75",
  },
];

const GraduatesJobs = () => {
  return (
    <section className="bg-background py-20">
      <div className="w-full px-4">
        <h2 className="text-4xl max-w-6xl mx-auto font-bold  mb-12 dark:text-white">
           Bitiruvchilarimiz Ish Joylari
        </h2>

        {/* Row 1 */}
        <Marquee gradient={false} speed={50} >
          <div className="flex gap-10">
            {brandsRow1
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-50 h-20 "
                />
              ))}
          </div>
        </Marquee>

        {/* Row 2 */}
        <Marquee
          gradient={false}
          speed={50}
          
          direction="right"
          className="mt-8"
        >
          <div className="flex gap-10">
            {brandsRow2
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-50 h-20 "
                />
              ))}
          </div>
        </Marquee>

        {/* Row 3 */}
        <Marquee gradient={false} speed={50}  className="mt-8">
          <div className="flex gap-10">
            {brandsRow3
              .filter((brand) => !!brand.logo)
              .map((brand) => (
                <img
                  src={brand.logo}
                  alt=""
                  className="object-contain w-50 h-20 "
                />
              ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default GraduatesJobs;
