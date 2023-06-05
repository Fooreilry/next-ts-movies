import { FC } from "react";
import styles from "./Button.module.scss";

type TButton = {
  text: string;
};

const Button: FC<TButton> = ({ text }) => {
  return (
    <div className={styles.button}>
      <button className="text-white">{text}</button>
    </div>
  );
};

export default Button;
