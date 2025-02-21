import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('menu');

  const restaurant = {
    id: 1,
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&h=400',
    rating: 4.5,
    cuisine: 'Italian',
    priceRange: '$$',
    deliveryTime: '30-40 min',
    address: '123 Main St, City, Country',
    menu: [
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Fresh tomatoes, mozzarella, basil',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&h=200',
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Pepperoni, cheese, tomato sauce',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&h=200',
      },
    ],
    reviews: [
      {
        id: 1,
        user: 'John Doe',
        rating: 5,
        comment: 'Best pizza in town!',
        date: '2023-08-15',
      },
      {
        id: 2,
        user: 'Jane Smith',
        rating: 4,
        comment: 'Great food, slightly slow delivery',
        date: '2023-08-14',
      },
    ],
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-end px-4 sm:px-6 lg:px-8 pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-lg mb-2">{restaurant.cuisine}</p>
              <div className="flex items-center gap-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  {restaurant.rating} ★
                </span>
                <span>{restaurant.priceRange}</span>
                <span>{restaurant.deliveryTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('menu')}
              className={`${
                activeTab === 'menu'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Menu
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`${
                activeTab === 'reviews'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Reviews
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="py-8">
          {activeTab === 'menu' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurant.menu.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">${item.price}</span>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {restaurant.reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{review.user}</h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {review.rating} ★
                    </span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;