import "../style/Modal.scss"
import { X } from "phosphor-react"

export default function TextModal(props) {
  let { text, setTip } = props

  return (
    <div className="modal-container">

      <div className="modal-text">
        {text}
      </div>

      <button onClick={() => setTip(0)}><X /></button>
    </div>
  )
}