interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <h1 className="font-semibold text-4xl leading-tight text-gray-300">
      {heading}
    </h1>
  );
};
export default Heading;
