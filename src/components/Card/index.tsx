import { Link } from "react-router-dom"
import "./index.scss"

type CardProps = {
  id: string
  auther: string
  imgUrl: string
  isChoosen?: boolean
}
const Card = ({ id, auther, imgUrl, isChoosen }: CardProps) => {
  return (
    <div className="cardContainer">
      <Link to={`/info/${id}`} className="link">
        <img className="img" src={imgUrl} alt="" />
        <p className="auther">📸 {auther}</p>
        {isChoosen && <h3>I am the Choosen One {id}</h3>}
      </Link>
    </div>
  )
}

export default Card
