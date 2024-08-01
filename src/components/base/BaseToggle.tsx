interface ToggleSwitchProps {
  id?: number;
  defaultChecked?: boolean;
  onChange: (checked: boolean) => void;
}
const BaseToggle = (props: ToggleSwitchProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        value=""
        type="checkbox"
        className="sr-only peer"
        defaultChecked={true}
        onChange={() => {
          props.onChange;
        }}
      />
      <div className=" relative w-14 h-7 bg-Grey peer-checked:after:bg-Blue-500 peer-focus:outline-primary peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-0.5 after:start-[28px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    </label>
  );
};
export default BaseToggle;
