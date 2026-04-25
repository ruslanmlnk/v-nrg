import icon1 from '@public/icon/icon1.svg'
import icon2 from '@public/icon/icon2.svg'
import icon3 from '@public/icon/icon3.svg'

import Image from 'next/image'

const HowItWorks = () => {
    return (
        <div className="max-w-[1288px] px-6 mx-auto py-12 md:py-[100px]">
            <p className="text-[#4FACF5] uppercase text-center text-base font-bold leading-[165%]">Принцип дії</p>
            <h2 className="mt-4 text-[#22354A] font-medium text-[48px] leading-[125%] text-center">Як працює технологія<br />V-NRG</h2>

            <div className="grid grid-cols-3 gap-5 mt-12">
                <div className="bg-white p-8 rounded-[20px]">
                    <Image src={icon1} alt="" />
                    <div className="font-medium text-[24px] leading-[35px] mt-6">Стимуляція кровообігу</div>
                    <p className="font-medium text-[18px] leading-[30px] mt-4">Активує мікроциркуляцію, покращує живлення тканин та прискорює природне відновлення</p>
                </div>
                <div className="bg-white p-8 rounded-[20px]">
                    <Image src={icon2} alt="" />
                    <div className="font-medium text-[24px] leading-[35px] mt-6">Розслаблення м’язів</div>
                    <p className="font-medium text-[18px] leading-[30px] mt-4">Знімає напруження і спазми, зменшує дискомфорт під час руху та після навантажень</p>
                </div>
                <div className="bg-white p-8 rounded-[20px]">
                    <Image src={icon3} alt="" />
                    <div className="font-medium text-[24px] leading-[35px] mt-6">Лімфодренаж</div>
                    <p className="font-medium text-[18px] leading-[30px] mt-4">Покращує відтік рідини, допомагає зменшити набряки та застійні явища у тканинах</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;