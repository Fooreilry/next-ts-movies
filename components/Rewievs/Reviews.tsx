import { FC } from 'react'
import styles from './Reviews.module.scss'
import Image from 'next/image';

type ReviewsProps = {
  rating: number;
}
// TODO: возможно стоит реализовать функционал оценивания через этот компонент
const Reviews: FC<ReviewsProps> = ({rating}) => {
  return (
      <div className={styles.reviews}>
        <Image src="/image/star.svg" width={16} height={16} alt="star" />
        <span>{rating.toFixed(1)}</span>
      </div>
  );
}

export default Reviews