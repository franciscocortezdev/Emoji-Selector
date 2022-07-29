import React, { useState } from 'react'
import EmojiData from '../Data'

type EmojiType = {
  symbol: string;
  name: string;
  keywords: string;
}[];

interface BoxemojiProps{
  BoxEmoji: boolean,
  inputRef: React.RefObject<HTMLInputElement>

}

export default function Boxemojis ({ BoxEmoji, inputRef }: BoxemojiProps) {
  const [ListEmoji, setListEmoji] = useState<EmojiType>(EmojiData)

  const handleSearch = (ev: React.FormEvent<HTMLInputElement>):void => {
    const query = ev.currentTarget.value.trim().toLowerCase()
    if (query !== undefined && query !== '') {
      const SearchResult = EmojiData.filter((emoji) => {
        return emoji.keywords.includes(query)
      })
      setListEmoji(SearchResult)
    } else {
      setListEmoji(EmojiData)
    }
  }
  const handleClicEmoji = (ev: React.FormEvent<HTMLSpanElement>):void => {
    const emoji = ev.currentTarget.innerText
    if (inputRef.current !== null) {
      const text = inputRef.current.value
      const cursorPosition = inputRef.current.selectionStart
      const prevText = text.substring(0, cursorPosition)
      const nextText = text.substring(cursorPosition)
      inputRef.current.value = prevText + emoji + nextText
      inputRef.current.selectionStart = cursorPosition + emoji.length
      inputRef.current.selectionEnd = cursorPosition + emoji.length
      inputRef.current.focus()
    }
  }

  return (
    <>
    {
      BoxEmoji && (
        <div className="emojiContainer">
        <input type="text" onChange={handleSearch} />
        {ListEmoji.map((emoji) => {
          return (
            <button onClick={handleClicEmoji} key={emoji.name}>
              {emoji.symbol}
            </button>
          )
        })}
      </div>
      )
    }
    </>
  )
}
