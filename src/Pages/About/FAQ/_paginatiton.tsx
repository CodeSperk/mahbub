import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 bg-button hover:bg-button-hover rounded-md disabled:opacity-20"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`w-10 px-4 py-2 rounded-md ${
            currentPage === idx + 1
              ? "bg-button"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-button hover:bg-button rounded-md disabled:opacity-20"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
