import { FC } from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/components/Rewievs/Reviews";

//TODO: переделать компонент на клиентский!!!

interface MovieCardProps {
  id: number;
  name: string;
  poster: string;
  type: string;
  rating: number;
}

const MovieCard: FC<MovieCardProps> = ({ name, poster, type, id, rating }) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.rating}>
        <Reviews rating={rating} />
      </div>
      <Link href={`/${type}/${id}`}>
      <Image
        className="rounded-xl mt-2"
        src={poster}
        width={266}
        height={400}
        alt="widow"
      />
        <p className="absolute text-white">{name}</p>
      </Link>
      <div className={styles.add}>
        <Image
          className="cursor-pointer"
          src="/image/add.svg"
          width={24}
          height={24}
          alt="plus"
        />
        <p>Add to my list</p>
      </div>
    </div>
  );
};
export default MovieCard;
