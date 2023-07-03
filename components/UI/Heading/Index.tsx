import { FC } from "react";

type IHeading = {
  heading: string;
};

const Heading: FC<IHeading> = ({ heading }) => {
  return <h1 className='font-semibold text-4xl leading-tight text-gray-300'>{heading}</h1>;
};
export default Heading;