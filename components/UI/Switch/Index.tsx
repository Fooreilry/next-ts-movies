"use client";
import { FC, useState } from "react";
import Link from "next/link";
import styles from "./Switch.module.scss";

type Item = {
  label: string;
  path: string;
};

const Switch: FC = () => {
  const [active, setActive] = useState<number>(() => {
    const storedIndex = sessionStorage.getItem("activeIndex");
    return storedIndex !== null ? parseInt(storedIndex) : 0;
  });

  const items: Item[] = [
    { label: "All", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "TV Shows", path: "/tvshows" },
  ];

  const activeIndex = (index: number) => {
    setActive(index);
    sessionStorage.setItem("activeIndex", index.toString());
  };

  return (
    <div className={styles.switch}>
      <ul className="flex text-white">
        {items.map((item, index) => (
          <li
            key={index}
            className={active === index ? styles.active : ""}
            onClick={() => activeIndex(index)}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Switch;
