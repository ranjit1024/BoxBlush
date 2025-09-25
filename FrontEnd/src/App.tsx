import { ColorPicker } from "react-aria-components";
import "./App.css";
import { useEffect, useRef, useState,  } from "react";
import ColorSelector from "./component/colorPicker";
function App() {
    const [isHovered, setIsHovered] = useState(false);
  const [color,setColor] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null)
  const colorRef  = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    
    function hide(event:MouseEvent){
          const target = event.target as Node;
      if( buttonRef.current && 
      !buttonRef.current.contains(target) &&
      colorRef.current && 
      !colorRef.current.contains(target) ){
        setColor(false);
      }
      
    }
    if(color){
      document.addEventListener('click',hide);
    }
    return()=> document.removeEventListener('click',hide)
  },[color])
  return (
    
    <div className="h-[90%] ">
       <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col">
      {
        color?<div ref={colorRef}   className="absolute w-full h-full flex justify-center items-center z-10">
          <div >
        <ColorSelector/>
            </div>
      </div>:null

      }
      {/* Header/Navigation */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo Icon - Modern colorful squares */}
          <div className="flex flex-wrap w-8 h-8 gap-1">
            <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
          </div>
          <h1 className="text-white text-2xl font-bold tracking-tight">
            BoxBlush
          </h1>
        </div>
        
        {/* Navigation Menu */}


        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h5v14z" />
            </svg>
          </button>
       
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-2xl">
          {/* Hero Text */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Ready to Play?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              Choose any color and try to fill the most boxes possible
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="relative">
            <button
            ref={buttonRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={()=>{
                setColor(prev => !prev)
              }}
              className="group relative hover:cursor-pointer px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative flex items-center space-x-2 hover:cursor-pointer">
                <span>Create a Game</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l8 8-8 8M4 12h16" />
                </svg>
              </span>
            </button>
            
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button onClick={()=>{
              setColor(true)
            }} className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Quick Match</span>
              </span>
            </button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Browse Games</span>
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Floating Particles/Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute animate-main top-1/2 left-1/4 w-5 h-5 p-10 bg-blue-200 rounded-2xl  opacity-20"></div>
        <div className="absolute animate-main top-1/3 left-1/6 w-5 h-5 p-10 bg-red-200 rounded-2xl  opacity-20"></div>
        <div className="absolute animate-main top-1/6 left-1/12 w-5 h-5 p-10 bg-green-200 rounded-2xl  opacity-20"></div>
        <div className="absolute animate-main top-1/2 right-1/4 w-5 h-5 p-10 bg-pink-200 rounded-2xl  opacity-20"></div>
        <div className="absolute animate-main top-1/3  right-1/6 w-5 h-5 p-10 bg-purple-200 rounded-2xl  opacity-20"></div>
        <div className="absolute animate-main top-1/6 right-1/12 w-5 h-5 p-10 bg-orange-200 rounded-2xl  opacity-20"></div>
       
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-100"></div>
      </div>
    </div>
    </div>
  );
}

export default App;
