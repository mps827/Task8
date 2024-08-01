import {
  numberWithCommas,
  removeCommas,
} from "@/core/helpers/StringOperations";
import React, { useState, ChangeEvent, useEffect } from "react";

interface NumericInputProps {
  value: number;
  onChange: (value: number) => void;
  inputClassNames?: string;
  placeHolder?: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
  inputClassNames,
  placeHolder,
}) => {
  const [displayValue, setDisplayValue] = useState<string>(
    numberWithCommas(value)
  );
  useEffect(() => {
    setDisplayValue(numberWithCommas(value));
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = removeCommas(e.target.value);
    if (!isNaN(Number(rawValue))) {
      setDisplayValue(numberWithCommas(rawValue));
      onChange(Number(rawValue));
    }
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      className={inputClassNames}
      placeholder={placeHolder}
    />
  );
};

export default NumericInput;
