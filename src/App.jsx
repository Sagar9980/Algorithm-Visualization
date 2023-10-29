import MainRoute from './Routes/MainRoute'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
      <RouterProvider router={MainRoute}/>
  )
}

export default App
