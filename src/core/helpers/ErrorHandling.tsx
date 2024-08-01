import classes from "./style/ErrorHandling.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { errorActions } from "../../store/error-slice";
import { useEffect, useState, useCallback } from "react";
import { authActions } from "../../store/auth-slice";
import { CloseCircle } from "iconsax-react";
const ErrorHandling = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.error.error);
  const [showNotif, setShowNotif] = useState<boolean>(false);

  useCallback(() => {
    if (!showNotif) {
      closeNotify();
    }
  }, [showNotif]);
  const closeNotify = () => {
    setShowNotif(false);
    dispatch(errorActions.setHasError(false));
    dispatch(
      errorActions.setError({
        message: "",
        statusCode: 0,
      })
    );
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setShowNotif(false);
      dispatch(errorActions.setHasError(false));
      dispatch(
        errorActions.setError({
          message: "",
          statusCode: 0,
        })
      );
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showNotif]);
  useEffect(() => {
    console.log(error);

    if (error && error.message) {
      setShowNotif(true);
    }
    if (error?.statusCode === 401) {
      dispatch(authActions.logOut());
    }
  }, [error]);
  return (
    <div className={classes.errorHandling}>
      {error && showNotif && (
        <div
          className={
            error?.statusCode === 200 ? classes.successNotif : classes.errNotif
          }
        >
          <div className={classes.content}>
            <span className={classes.message} dir="rtl">
              {error.statusCode === 500
                ? "خطایی از سمت سرور اتفاق افتاده است."
                : error.message}
            </span>
            <div className={classes.exitButton} onClick={(e) => closeNotify()}>
              <CloseCircle className={classes.closeIcon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ErrorHandling;
