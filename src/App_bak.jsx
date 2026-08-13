import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './component/Link'
import Home2 from './component/Link2'
import Router from './Router'


import Lifting from './component/lifting/Lifting'
import LiftingMenu from './component/lifting/LiftingMenu'


import InputBlock from './component/InputBlock'
import InputTest from './component/InputTest'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  const fnInput = (e) => {
    setInput(e.target.value)
    console.log(input)
  }

  const fn = () => {
    setCount((count) => count + 1)
  }


  const prevCountRef = useRef(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  return (
    <>
      <div>
        {/*  <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/component/lifting/lifting" element={<Lifting />} />
          </Routes>
          <Link to="/component/lifting/Lifting">버튼 유지 Lifting 페이지로 이동</Link>
        </BrowserRouter> */}

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/component/lifting/lifting" element={<Lifting />} />
          </Routes>
        </BrowserRouter> */}
        <img src={reactLogo} className="logo react" alt="React logo" />
        <BrowserRouter>
          <Router />
          <LiftingMenu />
        </BrowserRouter>


        <InputBlock placeholder="아이디" />
        {/* <InputBlock type="password" placeholder="비밀번호" /> */}
        {/* <InputBlock type="tel" placeholder="전화번호" /> */}

        <hr />
        <InputTest />
        <hr />
        {/* <div>
          <p>이전 값: {prevCountRef.current}</p>
          <p>현재 값: {count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div> */}


      </div>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={fn}>
        count is {count}
      </button>

      <input onChange={fnInput} /> {input} */}

    </>
  )
}

export default App
