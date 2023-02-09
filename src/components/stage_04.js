import "../style/stage_04.scss"
import { Check, Lightbulb } from "phosphor-react"
import { useState } from "react"
import TextModal from "./TextModal"
import ImgModal from "./ImgModal"

export default function Stage_04() {
  let [code, setCode] = useState()
  let [tip, setTip] = useState(0)

  return (
    <div className="stage-container">
      <div className="img-container">
        <img src="img/sample.jpg"></img>
      </div>

      <input value={code}></input>
      <button className="button"><Check /></button>

      <div className="tips-contianer">
        <button className="button tips-button" onClick={() => setTip(1)}><Lightbulb /></button>
        <button className="button tips-button" onClick={() => setTip(2)}><Lightbulb /></button>
        <button className="button tips-button" onClick={() => setTip(3)}><Lightbulb /></button>
      </div>

      {tip === 1 && <TextModal text={"This is a tip"} setTip={setTip} />}
      {tip === 2 && <ImgModal image={"img/sampleModal.jpg"} setTip={setTip} />}
      {tip === 3 && <TextModal text={"This is another tip"} setTip={setTip} />}
    </div>
  )
}