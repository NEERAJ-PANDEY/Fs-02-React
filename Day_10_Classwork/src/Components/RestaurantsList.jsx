import "../App.css";
import React, { useState } from "react";
import ResCard from "./ResCard";

const RestaurantsList = ({ restaurants }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxRating, setMaxRating] = useState(5);
  const itemsPerPage = 15; // Update to 15 restaurants per page

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      restaurant.rating <= maxRating
  );

  const indexOfLastRestaurant = currentPage * itemsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - itemsPerPage;
  const currentRestaurants = filteredRestaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  const handleMaxRatingChange = (event) => {
    setMaxRating(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when the rating filter changes
  };

  return (
    <div className="container restaurant">
      <h1 className="text-2xl font-bold">Restaurants List</h1>

      <div className="flex justify-between items-center mt-4 mb-4">
        <input
          type="text"
          placeholder="Search by restaurant"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border-3 rounded py-1"
        />

        <div>
          <label className="font-bold ">Rating: </label>
          <input
            type="number"
            min="0"
            max="5"
            value={maxRating}
            onChange={handleMaxRatingChange}
            className="border-3 rounded py-1"
          />
        </div>
      </div>

      <div className="restaurants-list">
        {currentRestaurants.map((restaurant) => (
          <div key={restaurant._id.$oid} className="restaurant-item">
            <ResCard
              name={restaurant.name}
              url={restaurant.URL}
              address={restaurant.address}
              id={restaurant._id.$oid}
              addressLine={restaurant["address line 2"]}
              outcode={restaurant.outcode}
              postcode={restaurant.postcode}
              rating={restaurant.rating}
              typeOfFood={restaurant.type_of_food}
            />
          </div>
        ))}
      </div>

      <div className="text-center m-2 p-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="m-2 bg-green-600 hover:bg-red-700 text-white font-bold py-
          2 px-4 border border-gray-400 rounded"
        >
          ⬅
        </button>

        <span>{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="m-2 bg-green-600 hover:bg-red-700 text-white font-bold py-
          2 px-4 border border-gray-400 rounded"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default RestaurantsList;
