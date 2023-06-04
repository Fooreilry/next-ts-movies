"use client";
import { FC, useState } from "react";
import Link from "next/link";
import styles from "./Switch.module.scss";

type Item = {
  label: string;
  path: string;
};

const Switch: FC = () => {
  const [active, setActive] = useState<number>(0);

  const items: Item[] = [
    { label: "All", path: "/" },
    { label: "Movies", path: "/" },
    { label: "TV Shows", path: "/" },
  ];

  const activeIndex = (index: number) => {
    setActive(index);
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
