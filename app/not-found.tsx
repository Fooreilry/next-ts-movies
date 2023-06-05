import Button from "@/components/UI/Button/Index";
import { NextPage } from "next";
import Image from "next/image";

const NotFound:NextPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <Image src="/image/error.svg" width={400} height={400} alt="error" />
      </div>
      <h1 className="flex items-center justify-center text-white">Lost your way?</h1>
      <p className="flex items-center justify-center text-gray-300">
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </p>
      <div className="flex items-center justify-center">
      <Button text='Go Home' />
      </div>
    </div>
  );
};

export default NotFound;
