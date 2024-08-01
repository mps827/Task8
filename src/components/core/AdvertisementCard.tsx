import classes from "./style/AdvertisementCard.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Lamp, Ruler } from "iconsax-react";

interface myComponentProps {
    image: string | StaticImageData;
    title: string;
    price?: string;
    address?: string;
    rooms?: string;
    surface?: string
}
const AdvertisementCard = (props: myComponentProps) => {
    return (
        <div className={classes.card + " bg-White dark:bg-Raisin-Black"}>
            <div className={classes.image}>
                <Image src={props.image} alt="advertisement image" />
            </div>
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.price}>
                <span className="text-Blue-Primary">{props.price}</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className={classes.location}>
                    <span>{props.address}</span>
                </div>
                <div className={classes.detail}>
                    <div className="flex flex-row gap-1">
                        <Lamp />
                        <span>{props.rooms}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                        <Ruler />
                        <span>{props.surface}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdvertisementCard;
