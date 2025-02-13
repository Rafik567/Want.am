import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Novelty from './components/Novelty/Novelty'
import Prize from './components/Prize/Prize'
import Discount from './components/Discounts/Discount'

function App() {

  return (
    <>
      <Header/>
      <Novelty/>
      <Prize/>
      <Discount/>
    </>
  )
}

export default App
