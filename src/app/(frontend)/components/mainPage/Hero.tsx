import Image from "next/image";

import hero_bg from "@public/assets/hero.png";
import ArrowPillButton from "../ui/ArrowPillButton";

const Hero = () => {
  return (
    <section className="mx-auto md:mt-5 mt-[23px] max-w-[1288px] grid grid-cols-1 gap-5 px-6 md:grid-cols-2">
      <div className="flex flex-col rounded-[20px] bg-[#22354A] md:pl-8 md:pr-7 md:py-12 pl-6 pr-6 py-8">
        <div>
          <h1 className="text-[26px] text-center md:text-left md:text-[56px] font-semibold leading-[125%] text-white">
            Професійні апарати вакуумного масажу V-NRG
          </h1>
          <p className="mt-4 text-base md:text-[18px] text-center md:text-left font-medium leading-[165%] text-white">
            Допомагають працювати з болем, набряками та станом шкіри. Швидкий запуск у роботу,
            навчання та підтримка від виробника
          </p>
        </div>
        <ArrowPillButton className="mr-[50px] mt-6 shrink-0 self-center whitespace-nowrap px-5 md:mr-0 md:self-start md:mt-[164.5px] md:px-6">Отримати консультацію</ArrowPillButton>
      </div>
      <div className='rounded-[20px] relative overflow-hidden'>
        <Image src={hero_bg} alt="arrow" />
      </div>
    </section>
  );
};

export default Hero;
