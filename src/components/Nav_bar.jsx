import React from 'react'
import Search_bar from './Search_bar'
import Account_menu from './account_menu'

export default function Nav_bar() {
  return (
    <nav className="w-full bg-[#0a0a0c] text-white border-b border-white/5 sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Left section: Logo + Navigation Links */}
        <div className="flex items-center gap-8 md:gap-10">
          <div>
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-9 w-auto object-contain cursor-pointer"
            />
          </div>

          <div>
            <ul className="flex items-center gap-6 md:gap-7 text-sm">
              <a
                id="discover"
                href="#discover"
                className="text-white font-medium cursor-pointer transition-colors"
              >
                Discover
              </a>
              <a
                id="movies"
                href="#movies"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                Movies
              </a>
              <a
                id="series"
                href="#series"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                Series
              </a>
              <a
                id="my-list"
                href="#my-list"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                My list
              </a>
            </ul>
          </div>
        </div>

        {/* Right section: Search bar + Account */}
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <Search_bar />
          </div>

          <div className="user account flex items-center">
            <Account_menu />
          </div>
        </div>
      </div>
    </nav>
  )
}
