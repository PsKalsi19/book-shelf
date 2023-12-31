import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const SearchBar = () => {
    const {  setSearchText } = useContext(ProductContext)

    
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={(e)=>setSearchText(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg bg-gray-50 focus:border-blue-500" placeholder="Search by book name" />
            </div>

          
        </div>

    );
};

export default SearchBar;