import { useState, useEffect } from 'react'
import loadFromLocalStorage from '../lib/loadFromLocalStorage'
import saveToLocalStorage from '../lib/saveToLocalStorage'

export default function useLocalStorage(key, initialData) {
  const [data, setData] = useState(loadFromLocalStorage(key) ?? initialData)

  useEffect(() => {
    saveToLocalStorage(key, data)
  }, [data, key])

  return [data, setData]
}

// In App.js:

// const [movies, setMovies] = useLocalStorage('movies', [])
