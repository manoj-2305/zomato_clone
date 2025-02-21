import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { id: 1, name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&h=300' },
    { id: 2, name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&h=300' },
    { id: 3, name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&h=300' },
    { id: 4, name: 'Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=300&h=300' },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=500&h=300',
      rating: 4.5,
      cuisine: 'Italian',
      deliveryTime: '30-40 min',
    },
    {
      id: 2,
      name: 'Burger Hub',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=500&h=300',
      rating: 4.3,
      cuisine: 'American',
      deliveryTime: '25-35 min',
    },
    // Add more restaurants as needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&h=500')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
              Discover the best food & drinks
            </h1>
            <div className="w-full max-w-2xl">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for restaurants, cuisine or a dish"
                  className="w-full px-6 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-500 text-white px-8 py-4 rounded-r-lg hover:bg-red-600 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Restaurants Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <p className="text-gray-500 text-sm mt-2">{restaurant.deliveryTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;