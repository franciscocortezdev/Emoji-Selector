import React, { useState, useRef } from 'react'
import Boxemojis from './Boxemojis'

export default function FormEmoji () {
  const [BoxEmoji, setBoxEmoji] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleBtnEmoji = () => {
    setBoxEmoji(!BoxEmoji)
    inputRef.current?.focus()
  }

  return (
    <div className="AppContainer">
      <h1 className="Title">Write Message</h1>
      <input ref={inputRef} type="text" className="txtInput" />
      <div className="emojis">
        <button onClick={handleBtnEmoji} className="btnEmoji">
          🙂
        </button>´

        <Boxemojis BoxEmoji={BoxEmoji} inputRef={inputRef} />
      </div>
    </div>
  )
}
