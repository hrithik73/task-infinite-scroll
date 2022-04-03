import { useState } from "react"
import axios from "axios"

type fetchDataProps = {
  url: string
}
const useFetch = () => {
  const [data, setData] = useState<any>([])
  const [noData, setNoData] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = async ({ url }: fetchDataProps) => {
    try {
      const response = await axios.get(url)
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchMoreData = (page: number) => {
    setLoading(true)
    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=10`
        )
        const newList = data.concat(res.data)
        setData(newList)
        if (res.data.length === 0) setNoData(true)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }, 1500)
  }

  return { data, loading, noData, fetchData, fetchMoreData }
}

export default useFetch
