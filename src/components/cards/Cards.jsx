/* eslint-disable react/prop-types */

import StatusMenu from "../status-menu/StatusMenu";

const Cards = ({ book }) => {
    const { title, imgUrl } = book
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow w-60">
            <img className="rounded-t-lg w-60 h-80" src={imgUrl} alt={title} />
            <div className="relative p-5">
                <h5 className="mb-2 text-lg font-bold text-white">{title}</h5>
                <div className="absolute -top-5 right-2">
                    <StatusMenu product={book} />
                </div>
            </div>
        </div>

    );
};

export default Cards;