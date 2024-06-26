import Image from 'next/image';
import icon from '@/public/next.svg';
import { title } from "process";

type HeaderProps = {
    title: string;
    subtitle: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <header className="flex flex-col items-center mb-20 md:mb-20">
            <Image 
                src={icon}
                alt="The website's logo"
                width={120}
            />
            <h1 className='text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100'>
                {props.title}
            </h1>
            <p>
                {props.subtitle}
            </p>
        </header>
    );
}