import Header from "./components/Header";
import Search from "./components/Search";
import Options from "./components/Options";
import Images from "./components/Images";
import Context from "./Context";
import Subheading from "./components/Subheading";
import { useState } from "react";

function App() {
  const [getInput, getUserInput] = useState("");
  const handleInput=(data)=>{
    getUserInput(data)
  }
  return <div>
    <Context>
    <Header/>
    <Search onSearch={handleInput}/>
    <Subheading data={getInput}/>
    <Options onSearch={handleInput}/>
    <Images/>
    </Context>
  </div>;
}

export default App;

