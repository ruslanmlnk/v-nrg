import icon1 from '@public/icon/icon1.svg'
import icon2 from '@public/icon/icon2.svg'
import icon3 from '@public/icon/icon3.svg'

import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className="max-w-[1288px] px-6 mx-auto py-12 md:py-[100px]">
            <p className="text-[#4FACF5] uppercase text-center text-base font-bold leading-[165%]">Принцип дії</p>
            <h2 className="mt-4 text-[#22354A] font-medium text-[48px] leading-[125%] text-center">Як працює технологія<br />V-NRG</h2>

            <div className="grid grid-cols-3 gap-5">
                <div className="bg-white p-8 rounded-[20px]">
                    <Image src={icon1} alt="" />
                    <div>Стимуляція кровообігу</div>
                    <p>Активує мікроциркуляцію, покращує живлення тканин та прискорює природне відновлення</p>
                </div>
                <div className="bg-white p-8 rounded-[20px]">
                    <img src="" alt="" />
                    <div>Розслаблення м’язів</div>
                    <p>Знімає напруження і спазми, зменшує дискомфорт під час руху та після навантажень</p>
                </div>
                <div className="bg-white p-8 rounded-[20px]">
                    <img src="" alt="" />
                    <div>Лімфодренаж</div>
                    <p>Покращує відтік рідини, допомагає зменшити набряки та застійні явища у тканинах</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;