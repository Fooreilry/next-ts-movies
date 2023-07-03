"use client";
import { FC } from "react";
import Image from "next/image";

interface InputProps {
  searchHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchValue: string;
}

const Input: FC<InputProps> = ({ searchHandle, handleSubmit, searchValue }) => {
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
        className='w-80 h-16 pl-14 border border-solid border-gray-600 rounded-xl text-gray-600 bg-black bg-opacity-10'
        type="text"
        placeholder="Search Movies or TV Shows"
        value={searchValue}
        onChange={searchHandle}
      />
    </form>
  );
};
export default Input;
