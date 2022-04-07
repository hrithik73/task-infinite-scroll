import { useEffect, useState } from "react"

import Card from "../../components/Card"
import Loading from "../../components/Loading"
import useFetch from "../../hooks/useFetch"
import "./style.scss"

const Home = () => {
  let isScrolling: any = null
  const [page, setPage] = useState(1)
  const [stopped, setStopped] = useState(false)
  const { data, loading, noData, fetchMoreData } = useFetch()

  const onScrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        console.log("fetching more data")
        fetchMoreData(page)
        setPage(page + 1)
      }
    }
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling)
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // Run the callback
      console.log("Stopped scrolling")
      setStopped(true)
    }, 5000)
  }
  // For Desktop
  window.onscroll = onScrollHandler

  useEffect(() => {
    fetchMoreData(page)
    setPage(page + 1)
  }, [])

  return (
    <div className="home_container">
      <h1>Infinite Scrolling</h1>
      {data.map((item: any, idx: any) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            imgUrl={item.download_url}
            auther={item.author}
            isChoosen={
              stopped && (idx === data.length - 1 || idx === data.length - 2)
            }
          />
        )
      })}
      {loading && <Loading />}
      {noData && <h1>No more data</h1>}
    </div>
  )
}
export default Home
