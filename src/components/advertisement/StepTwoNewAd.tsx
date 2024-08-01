import classes from "./style/StepTwoNewAd.module.scss";
import { Category } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import FilterToggle from "./FilterToggle";
import React, { useState } from "react";
import { Option } from "@/types/sharedTypes";
import BaseSelectInput from "../base/BaseSelectInput";
import { advertisementActions } from "@/store/advertisement-slice";
import BaseButton from "../base/BaseButton";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { loadingActions } from "@/store/loading-slice";
const StepTwoNewAdd = () => {
  const dispatch = useDispatch();
  const { t9n, updateLocale } = useTranslation();
  const selectedCategory = useSelector(
    (state: RootState) => state.advertisement.propertyType
  );
  const [elevator, setElevator] = useState<boolean>(false);
  const [parking, setParking] = useState<boolean>(false);
  const [warehouse, setWarehouse] = useState<boolean>(false);
  const [propertyArea, setPropertyArea] = useState<Option>();
  const [space, setSpace] = useState<Option>();
  const [room, setRoom] = useState<Option>();
  const [floor, setFloor] = useState<Option>();
  const [errors, setErrors] = useState({
    propertyArea: false,
    room: false,
    floor: false,
  });
  const filterHandler = (value: string, check: boolean) => {
    switch (value) {
      case "elevator":
        setElevator(check);
      case "parking":
        setParking(check);
      case "warehouse":
        setWarehouse(check);
      default:
        break;
    }
  };
  const [featureList, setFeatureList] = useState([
    { title: t9n.property_area, value: "propertyArea" },
    { title: t9n.space, value: "space" },
    { title: t9n.rooms, value: "rooms" },
    { title: t9n.floor, value: "floor" },
    { title: t9n.production_date, value: "productionDate" },
  ]);
  const [filterList, setFilterList] = useState([
    { title: t9n.elevator, value: "elevator" },
    { title: t9n.parking, value: "parking" },
    { title: t9n.depot, value: "warehouse" },
  ]);
  const inputOnChangeHandler = (field: string, e: any) => {
    switch (field) {
      case "propertyArea":
        setPropertyArea(e.target.value);
        break;
      case "room":
        setRoom(e.target.value);
        break;
      case "floor":
        setFloor(e.target.value);
        break;
      default:
        break;
    }

    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {
      propertyArea: propertyArea === null,
      room: room === null,
      floor: floor === null,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const resetInfo = () => {
    setErrors({
      propertyArea: false,
      room: false,
      floor: false,
    });
  };

  const formDataFiller = () => {
    if (!validateForm()) {
      return;
    } else {
      let body = {
        propertyArea: propertyArea,
        room: room,
        floor: floor,
        parking: parking,
        elevator: elevator,
        warehouse: warehouse,
      };
      dispatch(loadingActions.setHasLoading(true));
      dispatch(advertisementActions.setStepTwoData(body));
      setTimeout(() => {
        dispatch(loadingActions.setHasLoading(false));
        dispatch(advertisementActions.setNewAdStep(3));
      }, 500);
    }
  };

  return (
    <div className={" flex flex-col items-center gap-6 p-6 "}>
      <div className={" flex flex-row items-center gap-3 "}>
        <Category className={classes.icon} />
        <span className={classes.headerTitle}>{t9n.apartment_features}</span>
      </div>

      <div className={"flex flex-row items-start gap-32 "}>
        <div className={" bg-white " + classes.features}>
          {/* propertyArea */}
          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.property_area}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseSelectInput
                onChange={(e) => inputOnChangeHandler("propertyArea", e)}
                options={[
                  { title: "تجریش", value: "1" },
                  { title: "تهرانپارس", value: "2" },
                  { title: "بهارستان", value: "3" },
                ]}
              />
            </div>
          </div>

          {/* space */}

          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.space}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseSelectInput
                onChange={(e) => inputOnChangeHandler("space", e)}
                options={[
                  { title: "زیر 50", value: "1" },
                  { title: "50-70", value: "2" },
                  { title: "70-90", value: "3" },
                  { title: "120-90", value: "4" },
                  { title: "بالای 120", value: "5" },
                ]}
              />
            </div>
          </div>
          {/* room */}

          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.rooms}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseSelectInput
                onChange={(e) => inputOnChangeHandler("room", e)}
                options={[
                  { title: "1", value: "1" },
                  { title: "2", value: "2" },
                  { title: "3", value: "3" },
                  { title: "4", value: "4" },
                ]}
              />
            </div>
          </div>
          {/* floor */}

          <div className={" bg-Pale-White " + classes.featureCard}>
            <div className={" flex items-start w-1/3 "}>
              <span className={classes.featureTitle}>{t9n.floor}</span>
            </div>
            <div className={" flex items-start w-2/3 "}>
              <BaseSelectInput
                onChange={(e) => inputOnChangeHandler("floor", e)}
                options={[
                  { title: "اول", value: "1" },
                  { title: "دوم", value: "2" },
                  { title: "سوم", value: "3" },
                  { title: "چهارم", value: "4" },
                  { title: "پنجم", value: "5" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className={" bg-white " + classes.optionBox}>
          {filterList.map((filter, index) => {
            return (
              <FilterToggle
                key={index}
                title={filter.title}
                value={filter.value}
                filterChangeHandler={filterHandler}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.footer}>
        <BaseButton
          size="lg"
          square={true}
          title={t9n.back}
          color="outline"
          hasBlock={true}
          onClickHandler={() => dispatch(advertisementActions.setNewAdStep(1))}
        />
        <BaseButton
          size="lg"
          square={true}
          title={t9n.continue}
          color="primary"
          hasBlock={true}
          onClickHandler={() => {
            formDataFiller();
          }}
        />
      </div>
    </div>
  );
};
export default StepTwoNewAdd;
