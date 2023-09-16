import { useRouter } from "next/navigation";
import { updateSearchParams } from "../../../utils/searchParams";
import { filtersProps } from "@/services/movies.services";

interface MoviesProps {
  searchParams: filtersProps;
}

const Pagination = ({ searchParams }: MoviesProps) => {
  const router = useRouter();

  const totalPages: number = 100;
  const currentPage: number = parseInt(searchParams.page || "1");

  const renderPageNumbers = () => {
    const maxDisplayedPages: number = 5;

    let startPage: number = currentPage - Math.floor(maxDisplayedPages / 2);
    if (startPage < 1) {
      startPage = 1;
    }

    let endPage: number = startPage + maxDisplayedPages - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxDisplayedPages + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    const pageNumbers: number[] = Array.from(
      Array(endPage - startPage + 1),
      (_, index: number) => index + startPage
    );

    return pageNumbers.map((pageNumber: number) => (
      <button
        key={pageNumber}
        className={
          pageNumber === currentPage
            ? "mx-1 w-10 h-10 rounded bg-purple-500 hover:bg-purple-600 text-white"
            : "mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
        }
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  const handlePageChange = (pageNumber: number): void => {
    if (pageNumber === currentPage) {
      return;
    }

    const newPathnamePage: string = updateSearchParams("page", `${pageNumber}`);
    router.push(newPathnamePage);
  };

  const handleFirstPageClick = (): void => {
    handlePageChange(1);
  };

  const handlePreviousPageClick = (): void => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = (): void => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleLastPageClick = (): void => {
    handlePageChange(totalPages);
  };

  return (
    <div className="flex justify-center mt-8 mb-8">
      {currentPage > 2 && (
        <button
          onClick={handleFirstPageClick}
          disabled={currentPage === 1}
          className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
        >
          {"<<"}
        </button>
      )}
      {currentPage > 1 && (
        <button
          onClick={handlePreviousPageClick}
          disabled={currentPage === 1}
          className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
        >
          {"<"}
        </button>
      )}
      {renderPageNumbers()}
      {currentPage > 1 && (
        <button
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
          className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
        >
          {">"}
        </button>
      )}
      {currentPage > 2 && (
        <button
          onClick={handleLastPageClick}
          disabled={currentPage === totalPages}
          className="mx-1 w-10 h-10 rounded bg-gray-200 hover:bg-gray-300 text-black"
        >
          {">>"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
