import Skeleton from "@/components/UI/Skeleton/Index";
import Input from "@/components/UI/Input/Index";

const MovieLoading = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Input />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-10">
        {[...Array(24)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    </div>
  );
};
export default MovieLoading;
