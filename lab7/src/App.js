import React from "react";
import Header from "./components/Header"
import {Content} from "./components/Content"
import Image from "./components/Image"
import GoodsCard from "./components/GoodsCard"


function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Image/>

        <GoodsCard/>
    </div>
  );
}

export default App;
