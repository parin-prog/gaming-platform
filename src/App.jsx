import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Front from './pages/Front'
import Purchase from './pages/Purchase'

function App() {


  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} ></Route>
          <Route path='/purchase' element={<Purchase />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
