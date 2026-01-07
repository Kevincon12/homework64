import { useState } from 'react'
import './App.css'
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import Add from "./containers/Add/Add.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <Toolbar/>
        </header>

        <main className='container mt-5'>
            <Routes>
                {/*<Route path='/' element={(<Home/>)}/>*/}
                <Route path='/new-post' element={(<Add/>)}/>
                <Route path='/about' element={(<About/>)}/>
                <Route path='/contacts' element={(<Contacts/>)}/>
            </Routes>
        </main>
    </>
  )
};

export default App
