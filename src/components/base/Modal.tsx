import classes from "./style/Modal.module.scss";
interface MyComponent {
  body: React.ReactNode;
  exitAction?: (status: boolean) => void;
}
const Modal = (props: MyComponent) => {
  const exitHandler = () => {
    if (props.exitAction) return props.exitAction(false);
  };
  return (
    <div className={classes.backgroundModal}>
      <div className={classes.modalContent}>{props.body}</div>
    </div>
  );
};
export default Modal;
