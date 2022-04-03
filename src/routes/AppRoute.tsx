import { Routes, Route } from "react-router-dom"

import DetailsPage from "../pages/DetailsPage"
import Home from "../pages/Home"

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info/:id" element={<DetailsPage />} />
    </Routes>
  )
}
export default AppRoute
