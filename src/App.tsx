//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";

    function App() {
      //const [count, setCount] = useState(0)
            return (
                <>
                    <Title/>
                    <Intro name1 = "Amanda"
                           name2 = "Katherine"/>
                </>
            );
    }

export default App
