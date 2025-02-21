import React, { useState } from 'react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('menu');

  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 12.99,
      category: 'Pizza',
      status: 'active',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      price: 14.99,
      category: 'Pizza',
      status: 'active',
    },
  ];

  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      items: ['Margherita Pizza x2', 'Pepperoni Pizza x1'],
      total: 40.97,
      status: 'preparing',
      time: '10 mins ago',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      items: ['Pepperoni Pizza x2'],
      total: 29.98,
      status: 'delivered',
      time: '30 mins ago',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setActiveTab('menu')}
              className={`w-full px-6 py-3 text-left ${
                activeTab === 'menu'
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Menu Management
            </button>
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
              onClick={() => setActiveTab('analytics')}
              className={`w-full px-6 py-3 text-left ${
                activeTab === 'analytics'
                  ? 'bg-red-50 text-red-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'menu' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Menu Items</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Add New Item
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {menuItems.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Active Orders</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-gray-500 text-sm">{order.customer}</p>
                        <p className="text-gray-500 text-sm">{order.time}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          order.status === 'preparing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg -green-100 text-green-800'
                        }`}
                      >
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
                      <div className="space-x-2">
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                          Complete
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-gray-500 text-sm mb-2">Total Orders</h3>
                  <p className="text-3xl font-semibold">156</p>
                  <p className="text-green-600 text-sm">+12% from last week</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-gray-500 text-sm mb-2">Revenue</h3>
                  <p className="text-3xl font-semibold">$3,240</p>
                  <p className="text-green-600 text-sm">+8% from last week</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-gray-500 text-sm mb-2">Average Order Value</h3>
                  <p className="text-3xl font-semibold">$20.76</p>
                  <p className="text-red-600 text-sm">-2% from last week</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">Popular Items</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Margherita Pizza</span>
                    <span>324 orders</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pepperoni Pizza</span>
                    <span>256 orders</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;