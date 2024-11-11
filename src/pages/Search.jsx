import { BsSearch } from "react-icons/bs";
import Articles from "../routes/Articles";
import SearchPagination from "../components/SearchPagination";

const Search = () => {
  return (
    <section className="p-4 text-neutral-900">
      <div className="max-w-[1000px] mx-auto">
        <div className="md:flex md:flex-row md:gap-4 md:items-center">
          <h1 className="text-3xl font-semibold md:text-2xl">Search</h1>
          <div className="mt-5 relative md:mt-0 md:w-full">
            <input
              className="border-2 border-[#2423233B] w-full block rounded-md text-xl placeholder:text-neutral-500 py-3 pl-4 pr-8 md:text-base"
              type="search"
              placeholder="What are you looking for?"
            />
            <BsSearch size={20} className="absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <SearchPagination articles={Articles} />
      </div>
    </section>
  );
};

export default Search;
