import classes from "./style/BaseSelectInput.module.scss";
import { useState, useRef, useEffect } from "react";
import { Option } from "../../types/sharedTypes";
import { ArrowDown2 } from "iconsax-react";

interface MyComponentProps {
  placeHolder?: string;
  options?: Option[];
  defaultValue?: Option;
  hasBlock?: boolean | false;
  handleselectedOption?: (selectedItem: Option) => void;
}

const BaseSelectInput = (props: MyComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Option>({
    value: "",
    title: "",
  });
  const changeShowOptionStatus = () => {
    setShowOptions(!showOptions);
  };
  const seletedItemHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Option
  ) => {
    setSelectedItem(item);
    props.handleselectedOption && props.handleselectedOption(item);
    changeShowOptionStatus();
  };
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };
  useEffect(() => {
    if (props.defaultValue) {
      setSelectedItem(props.defaultValue);
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, props.defaultValue]);
  return (
    <div
      className={classes.selectedInput}
      style={{ width: props.hasBlock ? "100%" : "" }}
      ref={ref}
    >
      <div
        className={" border-2 rounded-full " + classes.selectInput}
        onClick={(e) => changeShowOptionStatus()}
      >
        <div
          className={
            "text-Grey " +
            (selectedItem.value ? classes.selectedText : classes.textSection)
          }
        >
          {selectedItem.value ? selectedItem.title : props.placeHolder}
        </div>
        <ArrowDown2 className={"  text-Grey "} />
      </div>
      {showOptions && (
        <div className={classes.optionsBox}>
          {props.options?.map((item, index) => {
            return (
              <div
                onClick={(e) => seletedItemHandler(e, item)}
                key={index}
                className={`${classes.item}  ${
                  item.value === selectedItem.value ? classes.selectedItem : ""
                }`}
              >
                <span style={{ padding: "10px" }}>{item.title}</span>
                {/* {item.value === selectedItem.value && (
                          <div className={classes.checked}>
                            <img src={check} alt="check" />
                          </div>
                        )} */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default BaseSelectInput;
