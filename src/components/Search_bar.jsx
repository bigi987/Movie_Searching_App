import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search_bar() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const API_KEY = '7f3e5acbedd0d6e1a2b0f1a1a3732483'

  useEffect(() => {
    if (search.trim() === '') {
      setMovies([])
      setMessage('')
      return
    }

    const timer = setTimeout(async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}&language=en-US`
        )
        const data = await response.json()

        if (data.results && data.results.length > 0) {
          setMovies(data.results)
          setMessage('')
        } else {
          setMovies([])
          setMessage('No results found')
        }
      } catch (error) {
        console.error('Error while searching for movies:', error)
        setMovies([])
        setMessage('Check your internet connection')
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [search])

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-[#121318] border border-white/10 rounded-md px-2.5 py-1.5 focus-within:border-white/30 focus-within:bg-[#181920] transition-all">
        <FaSearch className="text-gray-400 text-xs shrink-0" />
        <span className="text-[10px] text-gray-500 font-mono select-none tracking-tight">⌘ K</span>
        <input
          type="text"
          placeholder="Titles, people, moods"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border-none outline-none text-xs text-white placeholder:text-gray-500 w-32 sm:w-44 focus:w-52 transition-all"
        />
        {loading && (
          <div className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin shrink-0" />
        )}
      </div>

      {movies.length > 0 && (
        <div className="absolute right-0 mt-2 w-72 max-h-80 overflow-y-auto bg-[#18181b] border border-neutral-800 rounded-xl shadow-2xl p-2 z-50 text-white text-sm">
          {movies.slice(0, 8).map((movie) => (
            <div
              key={movie.id}
              className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer flex items-center gap-3 transition-colors"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  className="w-8 h-10 object-cover rounded"
                />
              ) : (
                <div className="w-8 h-10 bg-neutral-800 rounded flex items-center justify-center text-[10px] text-gray-400">
                  No img
                </div>
              )}
              <div className="flex-1 min-w-0 text-left">
                <p className="font-medium text-xs truncate">{movie.title}</p>
                <p className="text-[10px] text-gray-400">
                  {movie.release_date ? movie.release_date.slice(0, 4) : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {message && search && (
        <div className="absolute right-0 mt-2 w-56 bg-[#18181b] border border-neutral-800 rounded-xl shadow-2xl p-3 z-50 text-xs text-gray-400 text-left">
          {message}
        </div>
      )}
    </div>
  )
}
