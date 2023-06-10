import React, { FC } from 'react'
import styles from './Reviews.module.scss'
import Image from 'next/image';
// TODO: возможно стоит реализовать функционал оценивания черзе этот компонент
const Reviews: FC = ({rating}: number) => {
  return (
      <div className={styles.reviews}>
        <Image src="/image/star.svg" width={16} height={16} alt="star" />
        <span>{rating.toFixed(1)}</span>
      </div>
  );
}

export default Reviews