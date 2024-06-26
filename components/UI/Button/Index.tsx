interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <div className="inline-block cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 border-2 border-purple-600 rounded-lg active:translate-y-2 active:shadow-md">
      <button className="text-white">{text}</button>
    </div>
  );
};

export default Button;
