import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import WorkHistory from '../pure/WorkHistory'

function KeyLogger(props: RouteComponentProps) {
  const initialKeys: Array<string> = []
  const [keys, setKeys] = useState(initialKeys)
  const [unlocked, setUnlocked] = useState(false)
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  function checkSecret(str: string) {
    return [
      'kapteyn',
      'nate',
      'misty',
      'jonathan',
      'jason',
      'tyler',
      'kolten',
      'jennifer'
    ].some(x => x === str)
  }

  function handleResize() {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  function handleKeyChange(event: KeyboardEvent) {
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
      unlocked={unlocked}
    />
  )
}

export default KeyLogger
