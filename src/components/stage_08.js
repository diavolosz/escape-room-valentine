import "../style/stage_08.scss"
import { Check, Lightbulb } from "phosphor-react"
import { useState } from "react"
import TextModal from "./TextModal"
import ImgModal from "./ImgModal"
import EmojiModal from "./EmojiModal"
import Confetti from 'react-confetti';
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

export default function Stage_08(props) {
  let [code, setCode] = useState("")
  let [tip, setTip] = useState(0)
  const { width, height } = useWindowSize()

  return (
    <div className="stage-container">
      <div className="img-container">
        <img src="img/ducknbunny.jpeg"></img>
      </div>
      <Confetti
        width={width}
        height={height}
      />
      <div className="end">💖💖 Will You Be My Valentine ? 💖💖</div>
    </div>
  )
}