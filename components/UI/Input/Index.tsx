import { FC } from "react";
import Image from "next/image";
import styles from './Input.module.scss';


const Input:FC = () => {
  return (
    <form className="relative ">
      <Image className="absolute top-5 left-4" src='/image/search.svg' width={24} height={24} alt='search'/>
      <input className={styles.input} type="text" placeholder="Search Movies or TV Shows"/>
    </form>
  )
};
export default Input;
