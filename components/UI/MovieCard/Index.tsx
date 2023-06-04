import { FC } from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";

const MovieCard: FC = () => {
  return (
    <div className={styles.movieCard}>
      <Image
        className="rounded-xl mt-2"
        src="/image/widow.jpg"
        width={266}
        height={400}
        alt="widow"
      />
      <p className="absolute text-white">Black Widow</p>
    </div>
  );
};
export default MovieCard;
