import { useEffect, useRef, useState } from "react";
import classes from "./style/BaseInput.module.scss";

interface MyComponentProps {
  title?: string;
  size?: "sm" | "lg";
  type?: string;
  placeholder?: string;
  id?: string | undefined;
  name: string;
  value?: string | number;
  underlineBorder?: boolean;
  maxLength?: number;
  onChange?: ((e: React.FormEvent<HTMLInputElement>) => void) | undefined;
  leftIcon?: JSX.Element | JSX.Element[];
  rightIcon?: JSX.Element | JSX.Element[];
  disable?: boolean;
  pattern?: string;
  error?: boolean;
  handleChange?:
    | ((e: React.ChangeEvent<HTMLInputElement>, id?: number) => void)
    | undefined;
  required?: boolean;
  readOnly?: boolean;
  onClick?: (() => void) | undefined;
  handleEnter?:
    | ((e: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
  defaultValue?: string | number;
  min?: number;
  max?: number;
  centerText?: boolean;
  isInvalid?: boolean;
  inValidmsg?: string;
  tail?: string;
  noColor?: boolean;
  colapsable?: boolean;
}
const BaseInput = (props: MyComponentProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [colaps, setColaps] = useState<boolean>(false);
  const handleClickOutside = (event: Event) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      if (props.colapsable) {
        setColaps(true);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [inputRef]);

  useEffect(() => {
    if (props.colapsable) {
      setColaps(true);
    }
  }, []);
  return (
    <>
      {colaps && props.rightIcon ? (
        <div>
          <div
            className=" flex items-center justify-center py-2 px-2 border-2 border-slate-300 dark:border-slate-50 text-slate-300 dark:text-slate-50 rounded-full cursor-pointer "
            onClick={() => {
              setColaps(false);
            }}
          >
            {props.rightIcon}
          </div>
        </div>
      ) : (
        <div className={classes.baseInput}>
          {props.title && (
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {props.title}
              {props.required === false && <span>*</span>}
            </label>
          )}
          <div
            className={
              (props.noColor ? " text-White " : " text-Semi-Black ") +
              (props.underlineBorder ? " border-b " : " ") +
              " bg-white rounded-3xl relative"
            }
            ref={inputRef}
          >
            {props.rightIcon && (
              <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  {props.rightIcon}
                </button>
              </span>
            )}
            <input
              className={
                (props.size === "lg" ? " px-8 py-4" : " px-4 py-2") +
                (props.rightIcon ? " pr-10 " : " ") +
                (props.noColor
                  ? "  text-White  placeholder-Pale-White "
                  : " text-gray-900 ") +
                (props.underlineBorder
                  ? "  border-none bg-White focus:ring-0  focus:border-none"
                  : " border border-gray-300   focus:ring-blue-500 focus:border-blue-500   dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500 ") +
                (props.noColor || props.underlineBorder
                  ? " bg-none-color dark:bg-none-color "
                  : " bg-gray-50 dark:bg-gray-700 ") +
                " rounded-full block w-full dark:placeholder-gray-400 dark:text-white "
              }
              defaultValue={props.defaultValue}
              type={props.type}
              readOnly={props.readOnly}
              placeholder={props.placeholder}
              id={props.id ? props.id : Math.random() + "input"}
              value={props.value}
              disabled={props.disable}
              onChange={props.handleChange}
              onClick={props.onClick}
              onKeyDown={props.handleEnter}
              required={props.required}
              min={props.min ? props.min : 0}
              max={props.max ? props.max : 100}
              pattern={props.pattern}
            />
          </div>
          {props.leftIcon && (
            <div
              className={props.size === "lg" ? classes.lgicon : classes.icon}
            >
              <span>{props.leftIcon}</span>
            </div>
          )}
          {props.tail && (
            <div>
              <span>{props.tail}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default BaseInput;
