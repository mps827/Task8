import classes from "./style/Login.module.scss";
import AuthLayout from "@/view/layout/AuthLayout";
import { useTranslation } from "@/providers/locale-provider";
import dynamic from "next/dynamic";
const LoginForm = dynamic(import("@/components/auth/LoginForm"), {
  ssr: false,
});
const Login = () => {
  const { t9n } = useTranslation();
  return (
    <AuthLayout>
      <div className={classes.login}>
        <div className={classes.loginForm}>
          <LoginForm />
        </div>
        <div className={classes.titleSection}>
          <h1 className="text-7xl text-White font-bold">{t9n.meta_ping}</h1>
          <h3 className="text-Dark-Grey font-2xl mt-8">{t9n.brand}</h3>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
