import { useState } from "react"
import EmojiData from '../Data'

export default function FormEmoji() {
  const [BoxEmoji, setBoxEmoji] = useState(false);
  const handleBtnEmoji = ()=>{
    setBoxEmoji(!BoxEmoji)
  }
  
  return (
    <>
      <h1>Write Message</h1>
      <input type="text" />
      <button onClick={handleBtnEmoji}>🙂</button>
      <div>
        {EmojiData.map(emoji =>{
          return <span key={emoji.name}>{emoji.symbol}</span>
        })}
      </div>
    </>
  )
}
