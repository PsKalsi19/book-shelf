/* eslint-disable react/prop-types */

import StatusMenu from "../status-menu/StatusMenu";

const Cards = ({ book }) => {
    const { title, imgUrl } = book
    return (
        <div className="w-40 bg-gray-800 border border-gray-700 rounded-lg shadow sm:w-60">
            <img className="w-40 rounded-t-lg sm:w-60 h-52 sm:h-80" src={imgUrl} alt={title} />
            <div className="relative p-5">
                <h5 className="mb-2 font-semibold text-white sm:text-lg text-md sm:font-bold">{title}</h5>
                <div className="absolute -top-5 right-2">
                    <StatusMenu product={book} />
                </div>
            </div>
        </div>

    );
};

export default Cards;