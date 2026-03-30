import Image from 'next/image';

import hero_bg from '@public/assets/hero.png';
import arrow_side from '@public/icon/arrow_side.svg';

const Hero = () => {
    return (
        <div className="max-w-[1288px] px-6 flex gap-5 mx-auto mt-5">
            <div className='bg-[#22354A] rounded-[20px] py-12 px-8 flex-1 min-w-0'>
                <div>
                    <h1 className='text-white text-[56px] font-semibold leading-[125%]'>Професійні апарати вакуумного масажу V-NRG</h1>
                    <p className='text-white text-[18px] leading-[165%] mt-4'>Допомагають працювати з болем, набряками та станом шкіри.Швидкий запуск у роботу, навчання та підтримка від виробника</p>
                </div>
                <button className='relative mt-[164px] bg-white text-[#22354A] px-6 py-3 rounded-[40px] flex items-center h-[54px]'>
                    <div className='text-[18px] text-medium leading-[125%]'>Отримати консультацію</div>
                    <div className='absolute right-0 translate-x-[100%] w-[54px] h-[54px] bg-[#4FACF5] rounded-full flex items-center justify-center'>
                        <Image src={arrow_side} alt="arrow" />
                    </div>
                </button>
            </div>
            <div className='rounded-[20px] relative overflow-hidden flex-1 min-w-0'>
                <Image src={hero_bg} alt="arrow" fill />
            </div>
        </div>
    );
}

export default Hero;