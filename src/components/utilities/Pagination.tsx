import { Page } from "@/app/interface";

const Pagination = ({ page, lastPage, setPage }: Page) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    // if(page > 1) {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
    // }
  };

  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  const handleFirstPage = () => {
    setPage(1);
    scrollTop();
  };
  return (
    <div className="flex justify-center  items-center py-4 px-2 gap-4 text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handleFirstPage}
          className="transition-all hover:text-color-accent"
        >
          FirstPage
        </button>
      )}
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent"
        >
          Prev
        </button>
      )}
      <p>
        {" "}
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent"
        >
          Next
        </button>
      )}

      {page >= lastPage ? null : (
        <button
          onClick={handleLastPage}
          className="transition-all hover:text-color-accent"
        >
          lastPage
        </button>
      )}
    </div>
  );
};

export default Pagination;
