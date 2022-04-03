import { useEffect, useState } from "react"

import Loading from "../../components/Loading"
import useFetch from "../../hooks/useFetch"

import "./index.scss"
import Card from "../../components/Card"

const Home = () => {
  const [page, setPage] = useState(1)
  const { data, loading, noData, fetchMoreData } = useFetch()

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        fetchMoreData(page)
        setPage(page + 1)
      }
    }
  }

  useEffect(() => {
    fetchMoreData(page)
    setPage(page + 1)
  }, [])

  return (
    <div className="home_container">
      <h1>Infinite Scrolling</h1>
      {data.map((item: any) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.download_url}
            auther={item.author}
          />
        )
      })}
      {loading && <Loading />}
      {noData && <h1>No more data</h1>}
    </div>
  )
}
export default Home
