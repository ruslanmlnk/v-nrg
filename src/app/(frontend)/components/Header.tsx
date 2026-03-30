import Link from "next/link";
import Image from "next/image"

import phone_icon from "@public/icon/header/phone.svg";
import lang_icon from "@public/icon/header/global.svg";
import card_icon from "@public/icon/header/card.svg";
import arrow_icon from "@public/icon/header/arrow.svg";

import NavBar from './NavBar';
const Header = () => {
    return (
        <header className="mx-auto mt-5 max-w-[1288px] px-6 text-white">
            <div className="flex items-center justify-between rounded-[20px] bg-[#22354A] px-6 py-[11.8px] leading-[26px]">
                <div className="flex items-center gap-[25px]">
                    <div className="flex items-center gap-[8px]">
                        <Image src={phone_icon} alt="Phone icon" width={16} height={16} />
                        <div className="font-medium">0-800-123-456</div>
                    </div>
                    <div className="uppercase">Безкоштовна доставка від 5000 грн</div>
                </div>

                <div className="flex items-center gap-[25px]">
                    <div className="flex cursor-pointer items-center">
                        <Image src={lang_icon} alt="Language icon" />
                        <div className="ml-[6px] mr-[8px]">UA</div>
                        <Image src={arrow_icon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
                    </div>

                    <div className="flex cursor-pointer items-center">
                        <Image src={card_icon} alt="Currency icon" />
                        <div className="ml-[6px] mr-[8px]">₴ UAH</div>
                        <Image src={arrow_icon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
                    </div>

                    <Link href="#" className="font-bold uppercase text-[#4FACF5]">
                        Стати дилером
                    </Link>
                </div>
            </div>

            <NavBar />

        </header>
    );
};

export default Header;