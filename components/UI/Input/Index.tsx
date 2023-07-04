"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Input: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [name, setName] = useState<string>('')

  const router = useRouter()

  const updateSearchQueryParams = (name: string): void => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search)

    if(name) {
      searchParams.set('name', name)
    } else {
      searchParams.delete('name')
    }
    searchParams.delete('page');

    const newPathName: string = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

  const searchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setName(searchValue); 
    updateSearchQueryParams(searchValue.toLowerCase());
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
