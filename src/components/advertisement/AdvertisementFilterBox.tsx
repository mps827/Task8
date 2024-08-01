import React from "react";
import classes from "./style/AdvertisementFilterBox.module.scss";
import NumericInput from "../core/CustomNumericInput";
import { FilterType, Range } from "@/types/sharedTypes";
import MultiRangeSlider from "../base/BaseMultiRangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { searchActions } from "@/store/search-slice";
interface AdvertisementFilterBoxProps {
  selectedFilters: Array<String>;
  filterOptions: Array<FilterType>;
  toggleSelectedFilter: (x: string) => void;
}

const AdvertisementFilterBox: React.FC<AdvertisementFilterBoxProps> = ({
  filterOptions,
  selectedFilters,
  toggleSelectedFilter,
}) => {
  const meterMin = 20;
  const meterMax = 300;
  const priceMin = 300000000; // ۳۰۰ میلیون تومان
  const priceMax = 12000000000; // ۱۲ میلیارد تومان

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleSetMeterRange = (meterRange: Range) => {
    dispatch(searchActions.setMeter(meterRange));
  };

  const handleSetPriceRange = (priceRange: Range) => {
    dispatch(searchActions.setPrice(priceRange));
  };

  const getInputValueBoxStyle: string =
    classes.inputValueBox +
    " border border-gray dark:bg-Nero/30 focus:border-Blue-Primary focus:outline-none farsiNum";

  return (
    <div
      className={classes.filtersContainer + " bg-white dark:bg-Raisin-Black"}
    >
      <div className={classes.filter}>
        <div className={classes.filterTypeTitle + " self-stretch text-xl"}>
          متراژ(متر)
        </div>
        <div className={classes.filterValuesWrapper}>
          <NumericInput
            inputClassNames={getInputValueBoxStyle}
            value={search.meterRange.min}
            onChange={(e) => {
              dispatch(
                searchActions.setMeter({
                  ...search.meterRange,
                  min: Number(e),
                })
              );
            }}
          />
          <div className={classes.filterRangeText + " text-2xl"}>تا</div>
          <NumericInput
            inputClassNames={getInputValueBoxStyle}
            value={search.meterRange.max}
            onChange={(e) => {
              dispatch(
                searchActions.setMeter({
                  ...search.meterRange,
                  max: Number(e),
                })
              );
            }}
          />
        </div>
        <MultiRangeSlider
          handleXRange={handleSetMeterRange}
          xMax={meterMax}
          xMin={meterMin}
          xRange={search.meterRange}
        />
      </div>
      <div className={classes.filter}>
        <div className={classes.filterTypeTitle + " self-stretch text-xl"}>
          قیمت(تومان)
        </div>
        <div className={classes.filterValuesWrapper}>
          <NumericInput
            inputClassNames={getInputValueBoxStyle}
            value={search.priceRange.min}
            onChange={(e) => {
              dispatch(
                searchActions.setPrice({
                  ...search.priceRange,
                  min: e,
                })
              );
            }}
            // setPriceRange((prevRange) => ({
            //   ...prevRange,
            //   min: e,
            // }))
          />
          <div className={classes.filterRangeText + " text-2xl"}>تا</div>
          <NumericInput
            inputClassNames={getInputValueBoxStyle}
            value={search.priceRange.max}
            onChange={(e) => {
              dispatch(
                searchActions.setPrice({
                  ...search.priceRange,
                  max: e,
                })
              );
            }}
          />
        </div>
        <MultiRangeSlider
          xRange={search.priceRange}
          handleXRange={handleSetPriceRange}
          xMin={priceMin}
          xMax={priceMax}
        />
      </div>

      <div className={classes.filter}>
        <div className={classes.filterTypeTitle + " self-stretch text-xl"}>
          امکانات
        </div>
        <div className={classes.filterOptionsWrapper}>
          {filterOptions.map((obj, index) => {
            return (
              <div
                key={obj.key}
                onClick={(e) => toggleSelectedFilter(obj.key)}
                className={
                  classes.filterBox +
                  (selectedFilters.includes(obj.key)
                    ? " bg-blue-100 text-Blue-Primary dark:bg-Blue-Primary hover:bg-blue-300/60 dark:hover:bg-Blue-500 "
                    : " hover:bg-blue-100/60 hover:text-Blue-Primary dark:hover:bg-Blue-Primary/30 ") +
                  "transition-colors dark:text-white"
                }
              >
                {obj.name}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          classes.submitFilters +
          " flex items-center justify-center gap-2.5 py-3 px-5 self-stretch rounded-2xl bg-Blue-Primary text-white cursor-pointer transition-shadow hover:shadow-lg"
        }
      >
        اعمال تغییرات
      </div>
    </div>
  );
};

export default AdvertisementFilterBox;
