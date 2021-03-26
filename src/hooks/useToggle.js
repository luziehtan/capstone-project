import { useState } from 'react'

export default function useToggle(startValue) {
  const [boolean, setBoolean] = useState(startValue)

  function toggle() {
    setBoolean(!boolean)
  }

  return [boolean, toggle]
}

// Usage:
// const [isActive, toggleActive] = useToggle(false)
// e.g. <button onClick={toggleActive}>{isActive ? "Ho" : "Hey"}</button>
