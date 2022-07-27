import React, { useState, useRef } from "react"

import EmojiData from '../Data'

export default function FormEmoji() {
  const [BoxEmoji, setBoxEmoji] = useState(false);
  const [ListEmoji, setListEmoji] = useState<EmojiData>(EmojiData)
  //const [Search, setSearch] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)
  type EmojiData = {
    symbol: string,
    name: string,
    keywords: string
}[]
  const handleBtnEmoji = ()=>{
   
    setBoxEmoji(!BoxEmoji)
   inputRef.current?.focus()
  }
  const handleSearch = (ev:React.FormEvent<HTMLInputElement>) =>{
    
    const query = ev.currentTarget.value.trim().toLowerCase()

    console.log(query)

    if(query !== undefined && query !== ""){
      const SearchResult = EmojiData.filter(emoji =>{
        return emoji.keywords.includes(query)
      })
      setListEmoji(SearchResult)
    }else{ 
      setListEmoji(EmojiData)
    }
    
  }
  
  return (
    <div className="AppContainer">
      <h1 className="Title">Write Message</h1>
      <input ref={inputRef} type="text" className="txtInput"/>
      <div className="emojis">
        <button onClick={handleBtnEmoji} className="btnEmoji">🙂</button>
        {
          BoxEmoji && 
          <div className="emojiContainer">
            <input type="text" onChange={handleSearch}/>
          {ListEmoji.map(emoji =>{
            return <span key={emoji.name}>{emoji.symbol}</span>
          })}
          </div>
        }

      </div>
      
    </div>
  )
}
