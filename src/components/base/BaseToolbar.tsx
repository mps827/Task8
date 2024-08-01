interface MyComponent {
  stepCount: number;
  currentStep: number;
}
const BaseToolbar = (props: MyComponent) => {
  const stepCalc = () => {
    let step = 100 / props.stepCount;
    return String(props.currentStep * step) + "%";
  };
  return (
    <div
      className={
        "flex flex-row w-full items-start h-5 border border-Kingly-Cloud "
      }
    >
      <div
        className={" flex h-5 bg-Blue-Primary"}
        style={{ width: stepCalc() }}
      >
        {""}
      </div>
    </div>
  );
};
export default BaseToolbar;
