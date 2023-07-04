"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

const Switch: FC = () => {

  const [active, setActive] = useState<number>(() => {
    const storedIndex: string | null = sessionStorage.getItem("activeIndex");
    return storedIndex !== null ? parseInt(storedIndex) : 0;
  });

  const router = useRouter()

  const activeIndex = (index: number): void => {
    setActive(index);
    sessionStorage.setItem("activeIndex", index.toString());

    if (items[index].type) {
      updateSearchSortParams("type", items[index].type);
    } else {
      updateSearchSortParams("type", "");
    }  
  };

  const items: { label: string; type: string }[] = [
    { label: "Movie", type: "movie" },
    { label: "TV-Series", type: "tv-series" },
    { label: "Cartoon", type: "cartoon" }, 
  ];

const updateSearchSortParams = (param: string, value: string): void => {
  const searchParams: URLSearchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(param, value);
  } else {
    searchParams.delete(param);
  }
  searchParams.delete("page");
  searchParams.delete("name");

  const newPathName: string = `${window.location.pathname}?${searchParams.toString()}`;

  router.push(newPathName);
};

  return (
    <div className='flex items-center justify-center w-80 h-14 bg-opacity-20 bg-black rounded-xl'>
      <ul className="flex text-white font-medium text-base leading-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${active === index ? 'bg-purple-600 rounded-lg ' : ""}cursor-pointer pl-5 pt-2 pr-5 pb-2`}
            onClick={() => activeIndex(index)}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Switch;
