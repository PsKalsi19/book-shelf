import { Link } from "react-router-dom";
import Sections from "../../components/sections/Sections";

const Home = () => {
    return (
        <div className="mb-8 sm:my-28 ">
            <div className="flex items-center justify-between">
                <h1 className="pb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl">Book Shelf</h1>
                <Link className="px-4 py-2 text-lg font-bold text-gray-100 bg-orange-400 rounded-md" to="search">Search Items</Link>
            </div>
            <Sections />
        </div>
    );
};

export default Home;