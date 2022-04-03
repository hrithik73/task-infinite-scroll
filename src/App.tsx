import { BrowserRouter } from "react-router-dom"

import AppRoute from "./routes/AppRoute"
import AppLayout from "./layout/AppLayout"

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
