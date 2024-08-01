// components/SuggestedAdvertisements.tsx
import React from "react";
import AdvertisementCard from "@/components/core/AdvertisementCard";
import AdvertisementImg from "@/assets/images/advertisement.png";
import classes from "@/components/HomePage/style/SuggestedAds.module.scss";
import Link from "next/link";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

const SuggestedAdvertisements: React.FC = () => {
  const scrollRef = useHorizontalScroll();
  const adsData = [
    {
      image: AdvertisementImg,
      title: "Beautiful House 1",
      price: "$500,000",
      address: "123 Main St, Anytown, USA",
      rooms: "3",
      surface: "150 sqm",
    },
    {
      image: AdvertisementImg,
      title: "Beautiful House 2",
      price: "$600,000",
      address: "456 Elm St, Anytown, USA",
      rooms: "4",
      surface: "200 sqm",
    },
    {
      image: AdvertisementImg,
      title: "Beautiful House 2",
      price: "$600,000",
      address: "456 Elm St, Anytown, USA",
      rooms: "4",
      surface: "200 sqm",
    },
    {
      image: AdvertisementImg,
      title: "Beautiful House 2",
      price: "$600,000",
      address: "456 Elm St, Anytown, USA",
      rooms: "4",
      surface: "200 sqm",
    },
    {
      image: AdvertisementImg,
      title: "Beautiful House 3",
      price: "$700,000",
      address: "789 Oak St, Anytown, USA",
      rooms: "5",
      surface: "250 sqm",
    },
    {
      image: AdvertisementImg,
      title: "Beautiful House 3",
      price: "$700,000",
      address: "789 Oak St, Anytown, USA",
      rooms: "5",
      surface: "250 sqm",
    },
  ];
  return (
    <div className={classes.suggestedAdvertisements}>
      <div className={classes.header}>
        <span className={`text-base text-black ${classes.suggestedAdsText}`}>
          آگهی های پیشنهادی
        </span>
        <Link
          href="/all-ads"
          className={`text-base text-black-60 ${classes.viewAll}`}
        >
          مشاهده همه
        </Link>
      </div>
      <div ref={scrollRef} className={classes.suggestedAdsCard}>
        {adsData.map((ad, index) => {
          return (
            <div key={index} className={classes.card}>
              <AdvertisementCard
                title={ad.title}
                image={ad.image}
                price={ad.price}
                address={ad.address}
                rooms={ad.rooms}
                surface={ad.surface}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SuggestedAdvertisements;
