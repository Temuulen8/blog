import { SearchContext } from "@/provider/provider";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <header className="container m-auto flex justify-between items-center p-5 font-sans text-[#3B3C4A]">
        <div className="flex items-center text-xl">
          <img className="w-[158px] h-[38px]" src="./images/Logo.png" alt="" />
        </div>
        <div className="flex gap-10">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="bg-[#F4F4F5] flex items-center p-2 rounded-md">
          <input
            placeholder="Search"
            className="bg-[#F4F4F5] focus:outline-none"
            type="text "
            onChange={handleChange}
          />
          <FaSearch />
        </div>
      </header>
    </>
  );
};
export default Header;
