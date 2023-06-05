import { NextPage } from "next";
import Image from "next/image";
import ButtonLink from "@/components/UI/Button/buttonLink";

const NotFound: NextPage = () => {
  return (
    <div className="notFound">
      <div className="flex items-center justify-center pt-6">
        <Image src="/image/error.svg" width={400} height={400} alt="error" />
      </div>
      <h1 className="flex items-center justify-center text-white pt-6">
        Lost your way?
      </h1>
      <p className="flex items-center justify-center text-gray-300 pt-6">
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </p>
      <div className="flex items-center justify-center pt-6">
        <ButtonLink buttontext="Go Home" />
      </div>
    </div>
  );
};

export default NotFound;
