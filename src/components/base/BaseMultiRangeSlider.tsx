import React from "react";
import ReactSlider from "react-slider";
import { Range } from "@/types/sharedTypes";
import { useDispatch } from "react-redux";

interface MultiRangeSliderProps {
  xRange: Range;
  xMin: number;
  xMax: number;
  handleXRange: (xRange: Range) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  xRange,
  xMin,
  xMax,
  handleXRange: handleXRange,
}) => {
  const valueToSlider = (value: number) => {
    return Math.round(((value - xMin) / (xMax - xMin)) * 100);
  };
  const sliderToValue = (value: number) => {
    return Math.round((value / 100) * (xMax - xMin) + xMin);
  };

  const dispatch = useDispatch();

  return (
    <ReactSlider
      onChange={(e) => {
        handleXRange({
          min: sliderToValue(e[0]),
          max: sliderToValue(e[1]),
        });
      }}
      className={"horizontal-slider self-stretch flex items-center my-2 -z-1"}
      thumbClassName={
        "rounded-full border border-Blue-Primary w-6 h-6 bg-White transition-shadow dark:bg-Nero -z-0"
      }
      value={[valueToSlider(xRange.min), valueToSlider(xRange.max)]}
      invert={true}
      thumbActiveClassName={" focus:outline-none shadow-2xl"}
      minDistance={10}
      pearling={true}
      renderTrack={(props, state) => {
        return (
          <div
            {...props}
            className={
              `${state.index === 1 ? "bg-Blue-Primary" : "bg-Blue-100/20"}` +
              " p-1 rounded-full"
            }
          ></div>
        );
      }}
    />
  );
};

export default MultiRangeSlider;
