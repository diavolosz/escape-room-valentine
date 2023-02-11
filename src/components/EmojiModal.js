import "../style/Modal.scss"
import { X } from "phosphor-react"

export default function EmojiModal(props) {
  let { emoji, setTip } = props

  return (
    <div className="modal-container">

      <div className="modal-emoji">
        <span>{emoji}</span>
      </div>
      <button onClick={() => setTip(0)}><X /></button>
    </div>
  )
}