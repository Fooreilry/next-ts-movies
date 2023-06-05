"use client";
import { FC, useState } from "react";
import Image from "next/image";
import styles from "./Input.module.scss";

const Input: FC = () => {
  const [value, setValue] = useState<string>("");

  const searchHandke = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching for: ${value}`);
  };

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
        value={value}
        onChange={searchHandke}
      />
    </form>
  );
};
export default Input;
