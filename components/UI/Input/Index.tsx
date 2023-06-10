"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

interface IInput {
  searchHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchValue: string;
}

const Input: FC<IInput> = ({ searchHandle, handleSubmit, searchValue }) => {
  return (
    <form onSubmit={handleSubmit} className="relative ">
      <Image
        className="absolute top-5 left-4"
        src="/image/search.svg"
        width={24}
        height={24}
        alt="search"
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Search Movies or TV Shows"
        value={searchValue}
        onChange={searchHandle}
      />
    </form>
  );
};
export default Input;
