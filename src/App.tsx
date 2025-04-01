//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form.tsx";

    function App() {
      //const [count, setCount] = useState(0)
            return (
                <>
                    <Title/>
                    <Intro name1 = "Amanda"
                           name2 = "Katherine"/>
                    <Hobby1 />
                    <List1 />
                    <Table1 />
                    <Form1 />
                </>
            );
    }

export default App
