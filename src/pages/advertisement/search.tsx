import classes from "./style/Search.module.scss";
import DefaultLayout from "@/view/layout/DefaultLayout";
import AdvertisementCard from "@/components/core/AdvertisementCard";
import AdvertisementImage from "../../assets/images/advertisement.png";
import AdvertisementFilterBox from "@/components/advertisement/AdvertisementFilterBox";
import { useEffect, useState } from "react";
import { FilterType } from "@/types/sharedTypes";
import AdvertisementSortBox from "@/components/advertisement/AdvertisementSortBox";
import { StaticImageData } from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { searchActions } from "@/store/search-slice";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const [adsList, setAdsList] = useState<Array<tempAdType>>([]);

  interface tempAdType {
    image: string | StaticImageData;
    title: string;
    price?: string;
    address?: string;
    rooms?: string;
    surface?: string;
  }

  const filterOptions: Array<FilterType> = [
    {
      key: "elev",
      name: "آسانسور",
    },
    {
      key: "strg",
      name: "انباری",
    },
    {
      key: "balc",
      name: "بالکن",
    },
    {
      key: "prkn",
      name: "پارکینگ",
    },
    {
      key: "pool",
      name: "استخر",
    },
    {
      key: "gym",
      name: "باشگاه",
    },
  ];

  const toggleSelectedFilter: (key: string) => void = (key) => {
    dispatch(
      searchActions.setSelectedFilters(
        search.selectedFilters.includes(key)
          ? search.selectedFilters.filter((filter) => filter !== key)
          : [...search.selectedFilters, key]
      )
    );
  };

  useEffect(() => {
    setAdsList([
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
    ]);
  }, []);

  return (
    <DefaultLayout>
      <div
        className={
          "container mx-auto flex flex-row gap-5 " + classes.advertisements
        }
      >
        <AdvertisementFilterBox
          filterOptions={filterOptions}
          selectedFilters={search.selectedFilters}
          toggleSelectedFilter={toggleSelectedFilter}
        />
        <div className={"flex flex-col " + classes.result}>
          <AdvertisementSortBox
            filterOptions={filterOptions}
            selectedFilters={search.selectedFilters}
            toggleSelectedFilter={toggleSelectedFilter}
          />
          <div
            className={
              "flex justify-center items-center gap-4 " +
              (search.selectedFilters.length == 0 ? "mb-2" : "my-2")
            }
          >
            {adsList.map((ad, index) => {
              return (
                <AdvertisementCard
                  key={index}
                  image={ad.image}
                  rooms={ad.rooms}
                  title={ad.title}
                  address={ad.address}
                  price={ad.price}
                  surface={ad.surface}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Search;
