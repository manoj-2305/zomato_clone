import React from 'react';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 12.99,
      quantity: 2,
      restaurant: 'Pizza Palace',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      price: 14.99,
      quantity: 1,
      restaurant: 'Pizza Palace',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-sm"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.restaurant}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border">
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full border">
                    +
                  </button>
                </div>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;