"use client";
import { FC, useState } from "react";

type Item = {
  label: string;
};

const items: Item[] = [
  { label: "All" },
  { label: "Movies" },
  { label: "TV Shows" },
];

const Switch: FC = () => {
  const [active, setActive] = useState<number>(() => {
    const storedIndex: string | null = sessionStorage.getItem("activeIndex");
    return storedIndex !== null ? parseInt(storedIndex) : 0;
  });

  const activeIndex = (index: number): void => {
    setActive(index);
    sessionStorage.setItem("activeIndex", index.toString());
  };

  return (
    <div className='flex items-center justify-center w-80 h-14 bg-opacity-20 bg-black rounded-xl'>
      <ul className="flex text-white font-medium text-base leading-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${active === index ? 'bg-purple-600 rounded-lg ' : ""}cursor-pointer pl-7 pt-2 pr-7 pb-2`}
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
