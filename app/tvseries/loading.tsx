import Skeleton from "@/components/UI/Skeleton/Index";
import Input from "@/components/UI/Input/Index";
import Heading from "@/components/UI/Heading/Index";

const MovieLoading = () => {
  return (
    <section className="MovieList">
      <div className="max-w-screen-xl mx-auto">
        <Heading heading="TV-Series" />
        <div className="mt-8">
          <Input />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center mt-10">
          {[...Array(24)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MovieLoading;
