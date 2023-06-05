import { FC } from "react";
import styles from "./Heading.module.scss";

type IHeading = {
  heading: string;
};

const Heading: FC<IHeading> = ({ heading }) => {
  return <h1 className={styles.heading}>{heading}</h1>;
};
export default Heading;