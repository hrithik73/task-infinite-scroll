import { Link } from "react-router-dom"
import "./index.scss"

type CardProps = {
  id: string
  auther: string
  imgUrl: string
}
const Card = ({ id, auther, imgUrl }: CardProps) => {
  return (
    <div className="cardContainer">
      <Link to={`/info/${id}`} className="link">
        <img className="img" src={imgUrl} alt="" />
        <p className="auther">📸 {auther}</p>
      </Link>
    </div>
  )
}

export default Card
