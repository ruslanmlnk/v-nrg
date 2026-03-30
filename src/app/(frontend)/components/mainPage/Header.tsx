import Link from "next/link";
import Image from "next/image";

import phone_icon from "@public/phone.svg";
import lang_icon from "@public/global.svg";
import card_icon from "@public/card.svg";
import arrow_icon from "@public/arrow.svg";
import arrow_dark_icon from "@public/arrow_dark.svg";

import logo from "@public/logo.svg";


const Header = () => {
    return (
        <header className="max-w-[1288px] px-6 mt-5 mx-auto text-white font-base">
            <div className="px-6 bg-[#22354A]  leading-[26px] py-[11.8px] flex items-center justify-between rounded-[20px]">
                <div className="flex gap-[25px] items-center">
                    <div className="flex gap-[8px] items-center">
                        <Image src={phone_icon} alt="phone icon" width={16} height={16} />
                        <div className="font-medium">0-800-123-456</div>
                    </div>
                    <div className="uppercase">
                        Безкоштовна доставка від 5000 грн
                    </div>
                </div>

                <div className="flex gap-[25px] item-center">
                    <div className="flex items-center cursor-pointer">
                        <Image src={lang_icon} alt="lang icon" />
                        <div className="ml-[6px] mr-[8px]">UA</div>
                        <Image src={arrow_icon} alt="lang icon" className="w-[9.14px] h-[10px]" />
                    </div>

                    <div className="flex items-center cursor-pointer">
                        <Image src={card_icon} alt="lang icon" />
                        <div className="ml-[6px] mr-[8px]">₴ UAH</div>
                        <Image src={arrow_icon} alt="lang icon" className="w-[9.14px] h-[10px]" />
                    </div>

                    <Link href="#" className="text-[#4FACF5] uppercase font-bold">Стати дилером</Link>
                </div>
            </div>

            <nav className="bg-white flex items-center justify-between px-6 h-[90px] rounded-[20px] mt-2">
                <ul className="flex text-[#181818] uppercase gap-6">
                    <li className="flex items-center gap-2">Каталог <Image src={arrow_dark_icon} alt="dropdown" /></li>
                    <li>Про бренд</li>
                    <li>Навчання</li>
                    <li>Відгуки</li>
                    <li>Блог</li>
                </ul>
                <Image src={logo} alt="logo" />
                <div></div>
            </nav>
        </header>
    )
}

export default Header;