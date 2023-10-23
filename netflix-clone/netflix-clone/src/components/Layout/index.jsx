/* eslint-disable react/prop-types */
import logo from "../../assets/netflix_logo.png";
import { searchInNetflix } from "../../services";
import { Outlet } from "react-router-dom";

export default function Layout({ searchText, setSearchText, setTitles }) {
  const handleKeyUp = async (e) => {
    if (e.key === "Enter" && searchText) {
      const results = await searchInNetflix(searchText);
      setTitles(results.titles);
    }
  };

  return (
    <div className="bg-black/90 text-netflix-color-dark py-3 px-5 md:px-20 overflow-hidden">
      <div className="flex justify-between items-center">
        <img className="w-28 md:w-44 -ml-2 md:-ml-4" src={logo} alt="" />
        <input
          type="text"
          placeholder="Buscar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyUp}
          className="py-1 px-2 outline-none bg-black/30 border"
        />
      </div>
      <Outlet />
    </div>
  );
}