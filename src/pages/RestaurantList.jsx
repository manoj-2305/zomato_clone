import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RestaurantList() {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const restaurants = [
    {
      id: 1,
      name: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&h=300',
      rating: 4.5,
      cuisine: 'Italian',
      priceRange: '$$',
      deliveryTime: '30-40 min',
      minOrder: 15,
    },
    {
      id: 2,
      name: 'Burger Hub',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=500&h=300',
      rating: 4.3,
      cuisine: 'American',
      priceRange: '$',
      deliveryTime: '25-35 min',
      minOrder: 10,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="all">All Prices</option>
              <option value="$">$ (Under $10)</option>
              <option value="$$">$$ ($10-$25)</option>
              <option value="$$$">$$$ ($25-$45)</option>
            </select>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="rating">Rating</option>
              <option value="deliveryTime">Delivery Time</option>
              <option value="minOrder">Minimum Order</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Cuisines</h3>
            <div className="space-y-2">
              {['Italian', 'American', 'Chinese', 'Indian', 'Mexican'].map((cuisine) => (
                <label key={cuisine} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCuisines([...selectedCuisines, cuisine]);
                      } else {
                        setSelectedCuisines(selectedCuisines.filter(c => c !== cuisine));
                      }
                    }}
                    className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">{cuisine}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {restaurant.rating} ★
                    </span>
                  </div>
                  <p className="text-gray-600">{restaurant.cuisine}</p>
                  <p className="text-gray-500 text-sm">{restaurant.priceRange}</p>
                  <p className="text-gray-500 text-sm mt-2">{restaurant.deliveryTime}</p>
                  <p className="text-gray-500 text-sm">Min. order: ${restaurant.minOrder}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;