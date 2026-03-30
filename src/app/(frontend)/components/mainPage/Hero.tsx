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
                    <p className="mt-4 text-[18px] leading-[165%] text-white font-medium">
                        Допомагають працювати з болем, набряками та станом шкіри. Швидкий запуск у роботу,
                        навчання та підтримка від виробника
                    </p>
                </div>
                <button className='relative mt-[164px] bg-white text-[#22354A] px-6 py-3 rounded-[40px] flex items-center h-[54px]'>
                    <div className='text-[18px] text-medium leading-[125%]'>Отримати консультацію</div>
                    <div className='absolute right-0 translate-x-[100%] w-[54px] h-[54px] bg-[#4FACF5] rounded-full flex items-center justify-center'>
                        <Image src={arrow_side} alt="arrow" />
                    </div>
                </button>
            </div>
            <div className='rounded-[20px] relative overflow-hidden'>
                <Image src={hero_bg} alt="arrow" fill />
            </div>
        </section>
    );
};

export default Hero;
