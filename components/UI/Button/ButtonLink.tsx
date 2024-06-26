import Link from "next/link";

interface ButtonLinkProps {
  buttontext: string;
}

const ButtonLink = ({ buttontext }: ButtonLinkProps) => {
  return (
    <div className="inline-block cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 border-2 border-purple-600 rounded-lg active:translate-y-2 active:shadow-md">
      <Link className="text-white" href="/">
        {buttontext}
      </Link>
    </div>
  );
};
export default ButtonLink;
