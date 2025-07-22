import {useState} from 'react'

import viteLogo from '/vite.svg'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import './App.css'
import {increment} from "./store/counter/counterSlice.js";
import Chart from './components/TopHistoryWidget/Chart/index.jsx'

function App() {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)


  return (
      <>
        <header>Header</header>
        <main><Chart/>
        </main>
        <footer>Footer</footer>
      </>
)
}

export default App
