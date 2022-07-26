import { useState } from "react"
import EmojiData from '../Data'

export default function FormEmoji() {
  const [BoxEmoji, setBoxEmoji] = useState(false);
  const handleBtnEmoji = ()=>{
    setBoxEmoji(!BoxEmoji)
  }
  
  return (
    <div className="AppContainer">
      <h1 className="Title">Write Message</h1>
      <input type="text" className="txtInput"/>
      <div className="emojis">
        <button onClick={handleBtnEmoji} className="btnEmoji">🙂</button>
        {
          BoxEmoji && 
          <div className="emojiContainer">
          {EmojiData.map(emoji =>{
            return <span key={emoji.name}>{emoji.symbol}</span>
          })}
          </div>
        }

      </div>
      
    </div>
  )
}
