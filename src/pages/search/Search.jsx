import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import Cards from "../../components/cards/Cards";

const Search = () => {
    const { searchText, searchByText } = useContext(ProductContext)

    return (
        <div className="px-8 my-12 mb-8 sm:px-12 sm:my-28 ">
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl">Book Shelf</h1>
                <Link className="px-4 py-2 text-lg font-bold text-gray-100 bg-orange-400 rounded-md" to="/"><svg fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg></Link>
            </div>
            <div className="mt-4">
                <SearchBar />

                { 
           searchText!=='' &&
           <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {searchByText().map(product => <Cards key={product.id} book={product} />)}
            </div>
            }
           { 
           searchText==='' &&
           <h3 className="pb-1 mt-8 mb-8 text-3xl font-extrabold leading-none tracking-tight text-center text-gray-700 md:text-4xl ">Search By book name to see results.</h3>
            }
            </div>
            
        </div>
    );
};

export default Search;