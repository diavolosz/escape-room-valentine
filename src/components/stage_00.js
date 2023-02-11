import "../style/stage_00.scss"
import { Check, Lightbulb, ArrowRight } from "phosphor-react"
import { useState } from "react"
import TextModal from "./TextModal"
import ImgModal from "./ImgModal"
import EmojiModal from "./EmojiModal"

export default function Stage_00(props) {
  let [story, setStory] = useState(1)

  const nextStory = () => {
    if (story === 8) {
      setStory(1)
    } else {
      setStory(story + 1)
    }
  }



  return (
    <div className="stage-container">

      <div className="img-container">
        {story === 1 && <img src="img/C1.jpg"></img>}
        {story === 2 && <img src="img/C2.jpg"></img>}
        {story === 3 && <img src="img/C3.jpg"></img>}
        {story === 4 && <img src="img/C4.jpg"></img>}
        {story === 5 && <img src="img/C5.jpg"></img>}
        {story === 6 && <img src="img/C6.jpg"></img>}
        {story === 7 && <img src="img/C7.jpg"></img>}
        {story === 8 && <img src="img/C8.jpg"></img>}

      </div>

      <div className="button-container">
        <button className="button-long" onClick={() => props.startGame()}>
          START GAME
        </button>
        <button className="button" onClick={() => nextStory()}>
          <ArrowRight />
        </button>
      </div>
    </div>
  )

}