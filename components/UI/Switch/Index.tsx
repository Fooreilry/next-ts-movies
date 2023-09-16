"use client";
import { useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const Switch = () => {
  const [active, setActive] = useState<number>(() => {
    const storedIndex: string | null = sessionStorage.getItem("activeIndex");
    return storedIndex !== null ? parseInt(storedIndex) : 0;
  });

  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string): string => {
      const params = new URLSearchParams("");
      params.set(name, value);

      return params.toString();
    },
    []
  );

  const activeIndex = (index: number): void => {
    setActive(index);
    sessionStorage.setItem("activeIndex", index.toString());

    if (items[index].type) {
      router.push(
        pathname + "?" + createQueryString("type", items[index].type)
      );
    } else {
      router.push(pathname + "?" + createQueryString("type", ""));
    }
  };

  const items: { label: string; type: string }[] = [
    { label: "Movies", type: "movie" },
    { label: "TV-Series", type: "tv-series" },
    { label: "Cartoons", type: "cartoon" },
  ];

  return (
    <div className="flex items-center justify-center w-80 h-14 bg-opacity-20 bg-black rounded-xl">
      <ul className="flex text-white font-medium text-base leading-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${
              active === index ? "bg-purple-600 rounded-lg " : ""
            }cursor-pointer pl-5 pt-2 pr-5 pb-2`}
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
