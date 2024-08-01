interface MyComponent {
  id?: string;
  rows?: number | 4;
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const BaseTextarea = (props: MyComponent) => {
  return (
    <textarea
      id="message"
      rows={props.rows}
      className={
        " flex resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-0  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      }
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.handleChange}
    />
  );
};
export default BaseTextarea;
