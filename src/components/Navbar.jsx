import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MapPinIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState('New York');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-zomato-400">zomato</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          <div className="flex items-center gap-2 text-gray-500 hover:text-zomato-400 cursor-pointer">
            <MapPinIcon className="h-5 w-5" />
            <span>{location}</span>
          </div>
          <div className="relative flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zomato-100 focus:border-zomato-400 transition-all"
            />
            <svg
              className="absolute left-4 top-3 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {isLoggedIn ? (
            <>
              <Link to="/cart" className="flex items-center gap-1 nav-link">
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Cart</span>
              </Link>
              <Link to="/profile" className="flex items-center gap-1 nav-link">
                <UserIcon className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="btn-outline"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="btn-outline"
              >
                Log in
              </button>
              <button className="btn-primary">
                Sign up
              </button>
            </>
          )}
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-zomato-400">zomato</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{location}</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-zomato-100 focus:border-zomato-400"
                  />
                  <svg
                    className="absolute left-4 top-3 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="py-6">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/cart"
                      className="flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <ShoppingBagIcon className="h-5 w-5" />
                      Cart
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <UserIcon className="h-5 w-5" />
                      Profile
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full mt-4 btn-outline"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsLoggedIn(true)}
                      className="w-full mb-3 btn-outline"
                    >
                      Log in
                    </button>
                    <button className="w-full btn-primary">
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;