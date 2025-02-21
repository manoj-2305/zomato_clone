import React, { useState } from 'react';

function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: 1,
      restaurant: 'Pizza Palace',
      date: '2023-08-15',
      total: 40.97,
      status: 'Delivered',
      items: ['Margherita Pizza x2', 'Pepperoni Pizza x1'],
    },
    {
      id: 2,
      restaurant: 'Burger Hub',
      date: '2023-08-14',
      total: 25.98,
      status: 'Delivered',
      items: ['Classic Burger x2', 'Fries x1'],
    },
  ];

  const savedRestaurants = [
    {
      id: 1,
      name: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=300&h=200',
      cuisine: 'Italian',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Burger Hub',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=300&h=200',
      cuisine: 'American',
      rating: 4.3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
              <h2 className="text-xl font-semibold mb-1">John Doe</h2>
              <p className="text-gray-500 text-sm">john.doe@example.com</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full px-6 py-3 text-left ${
                activeTab === 'orders'
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`w-full px-6 py-3 text-left ${
                activeTab === 'saved'
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Saved Restaurants
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full px-6 py-3 text-left ${
                activeTab === 'settings'
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Settings
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{order.restaurant}</h3>
                        <p className="text-gray-500 text-sm">{order.date}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        {order.status}
                      </span>
                    </div>
                    <ul className="text-gray-600 text-sm mb-4">
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total: ${order.total}</span>
                      <button className="text-red-500 hover:text-red-600">
                        Reorder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Saved Restaurants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{restaurant.name}</h3>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {restaurant.rating} ★
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 890"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;