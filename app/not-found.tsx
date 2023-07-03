import Image from "next/image";
import ButtonLink from "@/components/UI/Button/ButtonLink";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center pt-6">
        <Image src="/image/error.svg" width={400} height={400} alt="error" />
      </div>
      <h1 className="flex items-center justify-center text-white pt-6 font-medium text-3xl leading-14">
        Lost your way?
      </h1>
      <p className="flex items-center justify-center pt-6 font-normal text-base leading-6 text-gray-600">
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
