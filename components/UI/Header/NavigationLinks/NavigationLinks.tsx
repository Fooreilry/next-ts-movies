import { FC } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { mainNavigation } from "@/utils/navigationLinks";

const NavigationLinks:FC = () => {
  return (
    <ul className="flex p-0 items-center">
      {mainNavigation.map((route, id) => (
        <li key={id}>
          <Link
            className="px-4 py-3 text-stone-300 text-base font-semibold"
            href={route.path}
          >
            {route.name}
          </Link>
        </li>
      ))}
      <li>
        <Link
          className="px-8 py-3 text-stone-300 text-base font-semibold flex gap-2 items-center"
          href={"/suggest"}
        >
          Suggest me
          <Image
            src="/image/arrow-right.svg"
            alt="suggest arrow"
            width={16}
            height={16}
          />
        </Link>
      </li>
    </ul>
  );
}

export default NavigationLinks