

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center space-x-2">
        <button
        
          className={`p-2 rounded-full ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-emerald-600 hover:bg-emerald-100'
          }`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        {pages.map(page => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
              currentPage === page
                ? 'bg-emerald-500 text-white'
                : 'text-gray-600 hover:bg-emerald-100'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        
        <button
          className={`p-2 rounded-full ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-emerald-600 hover:bg-emerald-100'
          }`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}