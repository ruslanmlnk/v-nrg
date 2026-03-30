import ActionIcon from '../ui/ActionIcon';
import Image from 'next/image';
import Link from 'next/link';
import arrow_dark_icon from "@public/icon/header/arrow_dark.svg";
import logo from "@public/logo.svg";

import profile_icon from '@public/icon/header/profile.svg';
import compare_icon from '@public/icon/header/compare.svg';
import cart_icon from '@public/icon/header/cart.svg';

import { navLinks } from '../data/header';

const NavBar = () => {
    return (
        <nav className="mt-2 rounded-[20px] bg-white px-5 py-4 text-[#22354A] md:px-6 lg:py-0">
            <div className="flex flex-col gap-4 lg:grid lg:min-h-[90px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
                <Link href="/" className="order-1 mx-auto block shrink-0 lg:order-2 lg:justify-self-center" aria-label="V-NRG Pro">
                    <Image src={logo} alt="V-NRG Pro" priority className="h-auto w-[108px]" />
                </Link>

                <ul className="order-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-medium uppercase leading-[165%] lg:order-1 lg:justify-self-start">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href} className="flex items-center gap-2 whitespace-nowrap">
                                <span>{link.label}</span>
                                {link.hasArrow ? (
                                    <Image src={arrow_dark_icon} alt="" aria-hidden="true" className="h-[10px] w-[9.14px]" />
                                ) : null}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="order-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[16px] font-medium uppercase leading-[165%] lg:justify-self-end">
                    <div className="flex items-center gap-6">
                        <ActionIcon href="#" label="Профіль" icon={profile_icon} />
                        <ActionIcon href="#" label="Порівняння" badge={0} icon={compare_icon} />
                        <ActionIcon href="#" label="Кошик" badge={0} icon={cart_icon} />
                    </div>
                    <Link href="#" className="whitespace-nowrap">
                        Контакти
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;