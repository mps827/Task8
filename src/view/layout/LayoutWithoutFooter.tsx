import classes from "./style/LayoutWithoutFooter.module.scss";
import Header from "@/components/core/Header";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactPortal,
} from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};
type PropsWithChildren<P> = P & { children?: ReactNode };

const LayoutWithoutFooter = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <>
      <div className={classes.header}>
        <Header />
      </div>

      <div className={classes.content + " bg-Pale-White dark:bg-Nero"}>
        {children}
      </div>
    </>
  );
};
export default LayoutWithoutFooter;
