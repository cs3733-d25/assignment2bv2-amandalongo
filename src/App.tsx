//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import Hobby2 from "./hobby2.tsx";
import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

    function App() {
      //const [count, setCount] = useState(0)
            return (
                <>
                    <Title/>
                    <Intro name1 = "Amanda"
                           name2 = "Katherine"/>

                    <Hobby2/>
                    <List2/>
                    <Table2/>
                    <Form2/>
                </>
            );
    }

export default App
