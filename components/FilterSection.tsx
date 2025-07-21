

interface FilterSectionProps {
  title: string;
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterSection({ 
  title, 
  filters, 
  activeFilter, 
  onFilterChange 
}: FilterSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-emerald-500 text-white'
                : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}