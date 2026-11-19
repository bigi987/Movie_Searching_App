import React, { useState } from 'react'
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'

export default function Account_menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null);

  const defaultAvatar = <FaUserCircle className="w-8 h-8 rounded-full object-cover" />

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleMenu}
        className="flex items-center gap-2 cursor-pointer p-0.5 rounded-full hover:opacity-90 transition-opacity"
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
            <FaUserCircle/>
        )}
        
        <FaChevronDown className={`text-gray-400 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute right-0 top-11 bg-[#1a1c23] border border-neutral-800 text-white rounded-lg shadow-xl w-48 overflow-hidden z-50 text-sm">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer border-b border-neutral-800 transition-colors">
              Смотреть профиль
            </li>
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
              Избранное
            </li>
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors">
              Настройки
            </li>
            <li className="px-4 py-2 hover:bg-white/10 cursor-pointer text-red-400 transition-colors">
              Выйти
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
