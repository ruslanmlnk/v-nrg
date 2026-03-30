import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ActionIconProps = {
    href: string;
    label: string;
    badge?: number;
    icon: StaticImageData;
}
const ActionIcon = ({ href, label, badge, icon }: ActionIconProps) => {
    return (
        <Link href={href} aria-label={label} className="relative inline-flex h-[18px] w-[18px] items-center justify-center">
            <Image src={icon} alt={label} />
            {typeof badge === "number" ? (
                <span className="absolute -right-[8px] -top-[8px] inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4FACF5] px-[4px] text-[8px] font-semibold leading-none text-white">
                    {badge}
                </span>
            ) : null}
        </Link>
    );
}

export default ActionIcon;