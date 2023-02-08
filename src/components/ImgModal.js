import "../style/ImgModal.scss"
import { X } from "phosphor-react"

export default function ImgModal(props) {
  let { image, setTip } = props

  return (
    <div className="modal-container">

      <div className="modal-image">
        <img src={image}></img>
      </div>
      <button onClick={() => setTip(0)}><X /></button>
    </div>
  )
}