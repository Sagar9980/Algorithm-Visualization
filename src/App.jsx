import MainRoute from './Routes/MainRoute'
import './App.css'
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from 'react-router-dom'

function App() {

  return (
      <RouterProvider router={MainRoute}/>
  )
}

export default App
