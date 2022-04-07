import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Card from "../../components/Card"
import Loading from "../../components/Loading"
import useFetch from "../../hooks/useFetch"
import "./style.scss"

const DetailsPage = () => {
  const { data, loading, fetchData } = useFetch()
  const { id } = useParams()

  useEffect(() => {
    fetchData({ url: `https://picsum.photos/id/${id}/info` })
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="detailContainer">
      <button className="backButton" onClick={() => window.history.back()}>
        👈 Back
      </button>
      <Card imgUrl={data.download_url} id={data.id} auther={data.author} />
    </div>
  )
}

export default DetailsPage
