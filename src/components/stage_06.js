import "../style/stage_06.scss"
import { Check, Lightbulb } from "phosphor-react"
import { useState } from "react"
import TextModal from "./TextModal"
import ImgModal from "./ImgModal"
import EmojiModal from "./EmojiModal"

export default function Stage_06(props) {
  let [code, setCode] = useState("")
  let [tip, setTip] = useState(0)

  return (
    <div className="stage-container">
      <div className="img-container">
        <img src="img/Event_6.jpg"></img>
      </div>

      <input value={code} onChange={(e) => setCode(e.target.value)}></input>
      <button className="button"
        onClick={() => {
          props.verifyCode(code, props.correctCode)
        }}>
        <Check />
      </button>

      <div className="tips-contianer">
        <button className="button tips-button" onClick={() => setTip(1)}><Lightbulb /></button>
        <button className="button tips-button" onClick={() => setTip(2)}><Lightbulb /></button>
        <button className="button tips-button" onClick={() => setTip(3)}><Lightbulb /></button>
      </div>

      {tip === 1 && <TextModal text={"DARK"} setTip={setTip} />}
      {tip === 2 && <EmojiModal emoji={'🔦'} setTip={setTip} />}
      {tip === 3 && <TextModal text={"6 _ _ _"} setTip={setTip} />}
    </div> 
  )
}