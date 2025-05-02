import { Search } from "lucide-react";

export default function SearchBarComponent({
  setFilter,
  searchQuery,
  setSearchQuery,
  isDarkTheme,
}) {
  return (
    <div className="my-5 w-full flex justify-center px-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
        {/* Search box */}
        <div
          className={`flex flex-row items-center w-full sm:w-3/4 p-2 ${
            isDarkTheme ? "bg-gray-900" : "bg-white"
          } hover:scale-105 duration-300 transition-all border-2 ${
            isDarkTheme ? "border-gray-700" : "border-gray-200"
          } rounded-lg`}
        >
          <Search className={isDarkTheme ? "text-white" : "text-gray-900"} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full h-10 ${
              isDarkTheme
                ? "bg-gray-900 text-white placeholder:text-gray-400"
                : "bg-white text-gray-900 placeholder:text-gray-500"
            } focus:outline-none px-2`}
            placeholder="Search for a task..."
          />
        </div>

        {/* Filter */}
        <div
          className={`flex flex-row items-center justify-between w-full sm:w-1/4 p-2 ${
            isDarkTheme ? "bg-gray-900" : "bg-white"
          } hover:scale-105 duration-300 transition-all border-2 ${
            isDarkTheme ? "border-gray-700" : "border-gray-200"
          } rounded-lg`}
        >
          <label
            htmlFor="filter"
            className={`${
              isDarkTheme ? "text-white" : "text-gray-900"
            } font-medium mr-2 whitespace-nowrap`}
          >
            Filter:
          </label>
          <select
            name="filter"
            id="filter"
            className={`w-full sm:w-auto ${
              isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            } p-2 rounded-md focus:outline-none`}
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="unCompleted">unCompleted</option>
            <option value="DateCreated">Date Created</option>
            <option value="Alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
}
