import { FC } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type TButtonLink = {
  buttontext: string;
};

const ButtonLink: FC<TButtonLink> = ({ buttontext }) => {
  return (
    <div className={styles.button}>
      <Link className="text-white" href={"/"}>
        {buttontext}
      </Link>
    </div>
  );
};
export default ButtonLink;
