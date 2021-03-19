import { useState } from 'react'

export default function useToggle(startValue) {
  const [boolean, setBoolean] = useState(startValue)

  function toggle() {
    setBoolean(!boolean)
  }

  return [boolean, toggle]
}

// Wo der Toogle genutzt wird:

// const [isActive, toggleActive] = useToggle(false)

// zB <button onClick={toggleActive}>{isActive ? "Ho" : "Hey"}</button>
