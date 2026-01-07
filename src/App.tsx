import { useState } from 'react'
import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <Toolbar/>
        </header>
    </>
  )
};

export default App
