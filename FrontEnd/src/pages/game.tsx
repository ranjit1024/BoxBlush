import { useNavigate } from "react-router-dom"
import { Gamepad2 } from "lucide-react";
import { useState } from "react";
export default function Game(){
    const navigate = useNavigate();
    const [cells,setCells] = useState<number[] | null>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
    return <div className="h-[100vh] bg-gray-900 text-white">
         
                      <div className="flex p-3 items-center gap-2">
                        
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <Gamepad2 size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-black bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                          BoxFill
                        </span>
                      </div>
                      <p className="p-3">Game id</p>
                        <span className="text-end p-3 text-[1.2rem]  ">{localStorage.getItem("gameId")}</span>
               
             
                    
        
       <div className="bg-gray-900 h-[100%] w-[100vw] p-2  grid grid-cols-3    justify-end items-end   ">

        {
            cells?.map(cell =>{
                return <div className="p-10 flex justify-center h-full rounded border-2 border-gray-500"></div>
              
            })
        }
       </div>
    </div>
}