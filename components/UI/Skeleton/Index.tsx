import { FC } from "react";
import styles from "./Skeleton.module.scss";
const Skeleton: FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__reviews}></div>
      <div className={styles.skeleton__image}></div>
      <div className={styles.skeleton__text}></div>
      <div className={styles.skeleton__iconText}>
        <div className={styles.skeleton__icon}></div>
        <div className={styles.skeleton__text2}></div>
      </div>
    </div>
  );
};
export default Skeleton;
