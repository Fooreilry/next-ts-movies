"use client";
import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Input = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback((name: string, value: string): string => {
    const params = new URLSearchParams("");
    params.set(name, value);

    return params.toString();
  }, []);

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearchValue(searchValue);
    router.push(pathname + "?" + createQueryString("name", searchValue));
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
        className="w-80 h-16 pl-14 border border-solid border-gray-600 rounded-xl text-gray-600 bg-black bg-opacity-10"
        type="text"
        placeholder="Search Movies or TV Shows"
        value={searchValue}
        onChange={searchHandle}
      />
    </form>
  );
};
export default Input;
