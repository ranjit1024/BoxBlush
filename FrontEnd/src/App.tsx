import "./App.css";
import Logo from "./component/logo";
import { SelectColor } from "./component/colorPicker";
import { useState } from "react";
function App() {
  const [color,setColor] = useState<boolean>(false);
  return (
    
    <div className="h-[90%] ">
    {
      color?<div className="absolute w-[100%] flex justify-center items-center h-[100%] z-10 ">
      <SelectColor/>
      </div>:null
    }
    
      <div className="text-white flex items-center p-3 ">
       <Logo/>
      </div>
      <div className="flex justify-center items-center h-full"> 
      <button onClick={()=>{
        setColor(true)
      }} className="bg-yellow-400 text-gray-900 text-[1.4rem]  font-medium px-10 py-5 rounded-2xl hover:cursor-pointer  transition-all animate-bounce hover:animate-bounce hover:scale-105">
        Create a Game
      </button>
      </div>
    </div>
  );
}

export default App;
