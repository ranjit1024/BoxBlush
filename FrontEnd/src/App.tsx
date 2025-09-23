import "./App.css";
import Logo from "./component/logo";
import { SelectColor } from "./component/colorPicker";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
function App() {
  const [color,setColor] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(()=>{
    
    function hide(event:MouseEvent){
      if(buttonRef.current && !buttonRef.current.contains(event.target as Node) ){
        setColor(false);
      }
      console.log("fsdf")
    }
    if(color){
      document.addEventListener('click',hide);
    }
    return()=> document.removeEventListener('click',hide)
  },[color])
  return (
    
    <div className="h-[90%] ">
    {
      <div  className={`absolute   w-[100%] flex justify-center items-center h-[100%] z-10 ${color
        ?'scale-100 opacity-100':'scale-0 opacity-0'
      } transition-all duration-500`}>
      <SelectColor/>
      </div>
    }
    
      <div className="text-white flex items-center p-3 ">
       <Logo/>
      </div>
      <div className="flex justify-center items-center h-full"> 
      <button ref={buttonRef} onClick={()=>{
        setColor(true)
      }} className="bg-yellow-400 text-gray-900 text-[1.4rem]  font-medium px-10 py-5 rounded-2xl hover:cursor-pointer  transition-all animate-bounce hover:animate-bounce hover:scale-110">
        Create a Game
      </button>
      </div>
    </div>
  );
}

export default App;
