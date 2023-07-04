import { FC } from "react";

type HeadingProps = {
  heading: string;
};

const Heading: FC<HeadingProps> = ({ heading }) => {
  return <h1 className='font-semibold text-4xl leading-tight text-gray-300'>{heading}</h1>;
};
export default Heading;