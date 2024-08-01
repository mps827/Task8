import { useEffect, useLayoutEffect } from "react";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "../store/error-slice";
import { authActions } from "../store/auth-slice";
import { AxiosError, AxiosResponse } from "axios";
import { RepoFactory } from "../baseRepository/Factory";
const authRepository = () => RepoFactory.get("auth");
export function UrlChangeListener() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthanticated =
    typeof window !== "undefined"
      ? window.localStorage.getItem("access_token")
        ? true
        : false
      : false;
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  useEffect(() => {
    // if (!isAuthanticated) {
    //   let routerPathname = router.pathname;
    //   if (!routerPathname.startsWith("/aut")) {
    //     void router.push("/auth/login");
    //   }
    // }
  }, [isAuthanticated]);
  const getProfileSetting = () => {
    dispatch(errorActions.setHasError(false));
    dispatch(errorActions.setError(null));
    dispatch(loadingActions.setHasLoading(true));
    authRepository()
      .getProfileSetting()
      .then((res: AxiosResponse<any>) => {
        dispatch(authActions.setProfileInfo(res.data.merchant));
      })
      .catch((error: unknown) => {
        if (error instanceof AxiosError) {
          dispatch(errorActions.setHasError(true));
          dispatch(errorActions.setError(error.response?.data));
        }
      })
      .finally(() => {
        dispatch(loadingActions.setHasLoading(false));
      });
  };
  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     getProfileSetting();
  //     dispatch(authActions.setUserInfo(localStorage.getItem("access_token")));
  //     dispatch(authActions.setIsAuthenticated(true));
  //   }
  // }, [dispatch]);
  // useLayoutEffect(() => {
  //   let isNotExpaired = false;
  //   if (userInfo && userInfo.exp > 0 && localStorage.getItem("access_token")) {
  //     let nowDate: number = 0;
  //     if (localStorage.getItem("login_time") != null) {
  //       nowDate = Number(localStorage.getItem("login_time"));
  //     } else {
  //       nowDate = Math.floor(new Date().getTime() / 1000);
  //     }
  //     let expyDate = nowDate + userInfo.exp_duration;
  //     if (nowDate < expyDate) {
  //       isNotExpaired = true;
  //     } else {
  //       isNotExpaired = false;
  //       dispatch(authActions.logOut());
  //     }
  //   }
  //   dispatch(
  //     authActions.setIsAuthenticated(
  //       isAuthanticated ? isNotExpaired : isAuthanticated
  //     )
  //   );
  // }, [isAuthanticated, dispatch, userInfo]);
  return <></>;
}
