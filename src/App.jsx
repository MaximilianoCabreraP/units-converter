import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CardContainer from './components/CardContainer/CardContainer'
import Card from './components/Card/Card'


import Distance from './utils/Distance'
import Area from './utils/Area'

function App() {

  return (
    //  grid items-start pt-20 p-10 text-center
    <main className="text-white">
      <div className='firstDiv'>
        <h1>Units Converter</h1>
        <Router>
          <Routes>
            <Route path='/' exact element={<CardContainer />} />
            <Route path='/distance' element={<Card units={Distance} />} />
            <Route path='/area' element={<Card units={Area} />} />
          </Routes>
        </Router>
      </div>
    </main >
  )
}

export default App
