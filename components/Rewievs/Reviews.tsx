import { FC } from 'react'
import Image from 'next/image';

type ReviewsProps = {
  rating: number;
}
// TODO: возможно стоит реализовать функционал оценивания через этот компонент
const Reviews: FC<ReviewsProps> = ({rating}) => {
  return (
      <div className='w-16 h-10 bg-black bg-opacity-60 rounded-lg backdrop-filter backdrop-blur-4 flex justify-center items-center'>
        <Image src="/image/star.svg" width={16} height={16} alt="star" />
        <span className='ml-1 text-orange-300 font-normal text-base leading-6'>{rating.toFixed(1)}</span>
      </div>
  );
}

export default Reviews