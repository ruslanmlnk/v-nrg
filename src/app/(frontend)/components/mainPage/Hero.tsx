import Image from "next/image";

import hero_bg from "@public/assets/hero.png";
import arrow_side from "@public/icon/arrow_side.svg";

const Hero = () => {
  return (
    <section className="mx-auto mt-5 max-w-[1288px] grid grid-cols-1 gap-5 px-6 md:grid-cols-2">
      <div className="rounded-[20px] bg-[#22354A] pl-8 pr-7 py-12">
        <div>
          <h1 className="text-[56px] font-semibold leading-[125%] text-white">
            Професійні апарати вакуумного масажу V-NRG
          </h1>
          <p className="mt-4 text-[18px] font-medium leading-[165%] text-white">
            Допомагають працювати з болем, набряками та станом шкіри. Швидкий запуск у роботу,
            навчання та підтримка від виробника
          </p>
        </div>
        <button className='group relative mt-[164.5px] flex h-[54px] items-center rounded-[40px] bg-white px-6 text-[#22354A] transition-colors duration-300 hover:text-white'>
          <div className='relative z-10 text-[18px] font-medium leading-[165%]'>Отримати консультацію</div>
          <div className='pointer-events-none absolute inset-y-0 right-[-54px] w-[54px] rounded-full bg-[#4FACF5] transition-[width,border-radius] duration-300 ease-out group-hover:w-[calc(100%+54px)] group-hover:rounded-[40px]'></div>
          <div className='pointer-events-none absolute right-[-54px] top-0 z-10 flex h-[54px] w-[54px] items-center justify-center'>
            <Image src={arrow_side} alt="arrow" />
          </div>
        </button>
      </div>
      <div className='rounded-[20px] relative overflow-hidden'>
        <Image src={hero_bg} alt="arrow" />
      </div>
    </section>
  );
};

export default Hero;
