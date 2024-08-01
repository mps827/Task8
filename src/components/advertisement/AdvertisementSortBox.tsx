import { FilterType, Option, SortTypes } from "@/types/sharedTypes";
import React from "react";
import classes from "./style/AdvertisementSortBox.module.scss";
import BaseSelectInput from "../base/BaseSelectInput";
import { CloseCircle } from "iconsax-react";
import { searchActions } from "@/store/search-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
interface SortBoxProps {
  selectedFilters: Array<string>;
  filterOptions: Array<FilterType>;
  toggleSelectedFilter: (x: string) => void;
}
const AdvertisementSortBox: React.FC<SortBoxProps> = ({
  selectedFilters,
  filterOptions,
  toggleSelectedFilter,
}) => {
  const findOptionNameByKey = (key: string) => {
    return filterOptions.find((filter) => filter.key == key)?.name;
  };

  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleSortSelection = (selectedItem: Option) => {
    dispatch(searchActions.setSortType(selectedItem));
  };

  return (
    <div
      className={
        classes.sort +
        " flex flex-col justify-center items-end gap-6 self-stretch flex-grow flex-shrink basis-0"
      }
    >
      <div className={classes.searchTitle + " text-2xl font-bold self-stretch"}>
        آپارتمان مسکونی
      </div>
      <div
        className={
          classes.sortConnainer +
          " flex justify-start items-center gap-7 self-stretch"
        }
      >
        <div
          className={
            classes.titleWrapper + " flex justify-center items-center gap-2"
          }
        >
          <div className="totalAdCount farsiNum text-xl">۲۲۶</div>
          <div className="adTitle text-Dove-Gray text-xl">آپارتمان مسکونی</div>
        </div>
        <div
          className={
            classes.sortByWrapper + " flex items-center justify-center gap-4"
          }
        >
          <div className="sortByTitle text-Dove-Gray text-xl">
            مرتب سازی بر اساس
          </div>
          <BaseSelectInput
            options={SortTypes}
            defaultValue={search.sortType}
            handleselectedOption={(selectedItem) => {
              handleSortSelection(selectedItem);
            }}
          />
        </div>
      </div>
      <div
        className={
          classes.selectedOptions + " flex justify-start self-stretch gap-7"
        }
      >
        {selectedFilters.map((selectedFilter) => {
          return (
            <div
              key={selectedFilter}
              className={
                "flex justify-center items-center gap-3 py-2 px-3 bg-blue-100 dark:bg-Blue-Primary dark:text-white hover:bg-blue-300/60 dark:hover:bg-Blue-500 transition-colors rounded-full"
              }
            >
              <div className="text-2xl text-Blue-Primary dark:text-White">
                {findOptionNameByKey(selectedFilter)}
              </div>
              <CloseCircle
                className="w-6 h-6 text-Blue-Primary cursor-pointer dark:text-white"
                onClick={(e) => toggleSelectedFilter(selectedFilter)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvertisementSortBox;
