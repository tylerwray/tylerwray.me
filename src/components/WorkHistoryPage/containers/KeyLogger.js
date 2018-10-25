import React, { useState, useEffect } from 'react'

import WorkHistory from '../pure/WorkHistory'

function KeyLogger() {
  const [keys, setKeys] = useState([])
  const [unlocked, setUnlocked] = useState(false)
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  function checkSecret(str) {
    return [
      'kapteyn',
      'nate',
      'misty',
      'jonathan',
      'jason',
      'tyler',
      'kolten',
      'jennifer'
    ].includes(str)
  }

  function handleResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  function handleKeyChange(event) {
    if (
      !unlocked &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey
    ) {
      const newKeys = [...keys, event.key]

      if (checkSecret(newKeys.join(''))) {
        setUnlocked(true)
      } else {
        setKeys(newKeys)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.document.addEventListener('keydown', handleKeyChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.document.removeEventListener('keydown', handleKeyChange)
    }
  })

  return (
    <WorkHistory
      confettiSize={size}
      onKeyPress={handleKeyChange}
      unlocked={unlocked}
    />
  )
}

export default KeyLogger
