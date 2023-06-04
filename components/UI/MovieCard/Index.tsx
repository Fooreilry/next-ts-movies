import { FC } from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";

const MovieCard: FC = () => {
  return (
    <div className={styles.movieCard}>
        <div className={styles.reviews}>
            <Image src='/image/star.svg' width={16} height={16} alt="star"/>
            <span>6.8</span>
        </div>
      <Image
        className="rounded-xl mt-2"
        src="/image/widow.jpg"
        width={266}
        height={400}
        alt="widow"
      />
      <p className="absolute text-white">Black Widow</p>
      <div className={styles.add}>
        <Image className="cursor-pointer" src='/image/add.svg' width={24} height={24} alt='plus'/>
        <p>Add to my list</p>
      </div>
    </div>
  );
};
export default MovieCard;
