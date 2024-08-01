import dynamic from "next/dynamic";
import classes from './style/index.module.scss'
import ChoseCitySection from "@/components/HomePage/ChoseCitySection";
import { useTranslation } from "@/providers/locale-provider";
import { Building4, Buildings2, Map, House2, CalendarEdit, Convertshape, UsdCoin, RulerPen } from "iconsax-react";
import CategoryCard from "@/components/HomePage/CategoryCard";
import MobileApp from "@/components/HomePage/MobileApp";
import SuggestedAds from "@/components/HomePage/SuggestedAds"
const DefaultLayout = dynamic(import("../view/layout/DefaultLayout"), {
  ssr: false,
});
const Index = () => {
  const { t9n } = useTranslation();
  const categoryList = [
    {
      title: t9n.residential,
      icon: <Building4 />,
    },
    {
      title: t9n.Commercial_and_administrative,
      icon: <Buildings2 />,
    },
    {
      title: t9n.land,
      icon: <Map />,
    },
    {
      title: t9n.villa,
      icon: <House2 />,
    },
    {
      title: t9n.Presell,
      icon: <CalendarEdit />,
    },
    {
      title: t9n.Participation,
      icon: <Convertshape />,
    },
    {
      title: t9n.investment,
      icon: <UsdCoin />,
    },
    {
      title: t9n.Selling,
      icon: <RulerPen />,
    },
  ];
  return (
    <DefaultLayout>
      <ChoseCitySection />
      <div className={" mx-auto flex gap-5 py-20 flex-wrap " + classes.categoryCard}>
        {
          categoryList.map((cat, index) => {
            return <CategoryCard key={index} title={cat.title} icon={cat.icon} />
          })
        }
      </div>
      <SuggestedAds/>
      <MobileApp />
    </DefaultLayout>
  );
};
export default Index;
