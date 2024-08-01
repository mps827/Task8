/*
 <BaseButton
    size="sm"
    title="Learn More"
    color='secondary'
    hasRightIcon={true}
    hasLeftIcon={false}
    hasBlock={true}
    icon={icon()}
  ></BaseButton>
*/
interface MyComponentProps {
  size?: String;
  color?: String;
  hasBlock?: Boolean;
  title: String;
  square?: boolean | false;
  onClickHandler?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  RightIcon?: JSX.Element | JSX.Element[];
  LeftIcon?: JSX.Element | JSX.Element[];
  disable?: Boolean;
}
const BaseButton = (props: MyComponentProps) => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!props.disable && props.onClickHandler) {
      props.onClickHandler(e);
    }
  };
  return (
    <button
      className={
        (props.color === "primary"
          ? "bg-Blue-500 hover:bg-Blue-600 text-white "
          : props.color === "outline"
          ? " none-color "
          : props.color === "white"
          ? " bg-white "
          : "bg-Pale-White hover:bg-Grey text-Semi-Black ") +
        (props.hasBlock ? " w-full " : "") +
        (props.square ? " rounded-xl " : " rounded-full ") +
        (props.color === "outline" && " border border-Grey text-Grey ") +
        (props.color === "white" && " border border-Grey text-black ") +
        (props.size === "lg"
          ? " py-2 px-10  gap-2 text-2xl "
          : props.size === "sm"
          ? " py-2 px-4 flex gap-2 text-sm text-nowrap "
          : " py-2 px-6 flex gap-2 ") +
        " flex  flex-row h-15 justify-center items-center "
      }
      onClick={(event: React.MouseEvent<HTMLElement>) =>
        onClickHandler(event.target as any)
      }
    >
      {props.RightIcon ? props.RightIcon : ""}
      {props.title}
      {props.LeftIcon ? props.LeftIcon : ""}
    </button>
  );
};
export default BaseButton;
