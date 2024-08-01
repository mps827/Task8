import BaseToggle from "../base/BaseToggle";
import classes from "./style/FilterToggle.module.scss";
interface MyComponent {
  title: string;
  value: string;
  filterChangeHandler: (title: string, checked: boolean) => void;
}
const FilterToggle = (props: MyComponent) => {
  const toggleChangeHandler = (check: boolean) => {
    return props.filterChangeHandler(props.value, check);
  };
  return (
    <div className={" bg-Pale-White " + classes.filterBox}>
      <span className={classes.filterTitle}>{props.title}</span>
      <BaseToggle onChange={toggleChangeHandler} />
    </div>
  );
};
export default FilterToggle;
