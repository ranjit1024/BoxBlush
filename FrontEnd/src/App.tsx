import "./App.css";
import Logo from "./component/logo";
import { SelectColor } from "./component/colorPicker";
function App() {
  
  return (
    <div className="h-[90%] ">
      <SelectColor/>
      <div className="text-white flex items-center p-3 ">
       <Logo/>
      </div>
      <div className="flex justify-center items-center h-full"> 
      <button className="bg-yellow-400 text-gray-900 text-[1.4rem]  font-medium px-10 py-5 rounded-2xl hover:cursor-pointer  transition-all animate-bounce hover:animate-bounce hover:scale-105">
        Create a Game
      </button>
      </div>
    </div>
  );
}

export default App;
