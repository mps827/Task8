import classes from './style/Footer.module.scss'
import { Facebook, Instagram, Send2, Youtube } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
const Footer = () => {
    const { t9n } = useTranslation();
    return (
        <div className='bg-Blue-Primary dark:bg-Raisin-Black py-6 flex flex-col items-center justify-center gap-6 fkex-col text-White'>
            <div className='flex flex-row-reverse gap-6 '>
                <div className='w-10 h-10'>
                    <Facebook className='w-10 h-10' />
                </div>
                <div className='w-10 h-10'>
                    <Instagram className='w-10 h-10' />
                </div>
                <div className='w-10 h-10'>
                    <Send2 className='w-10 h-10' />
                </div>
                <div className='w-10 h-10'>
                    <Youtube className='w-10 h-10' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-row-reverse gap-6'>
                    <div>{t9n.about_metaping}</div>
                    <div>{t9n.Support}</div>
                    <div>{t9n.faq}</div>
                </div>
                <div className='flex flex-row-reverse gap-6'>
                    <div >{t9n.Terms_and_Conditions}</div>
                    <div>{t9n.blog}</div>
                </div>
                <div className='flex flex-row-reverse gap-6 text-Blue-100'>
                    <span>{t9n.metaping_year}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer