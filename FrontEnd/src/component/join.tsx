import React, { useEffect, useState } from 'react';

function GameIdInput ({close}:{close:() => void}){
  const [gameId, setGameId] = useState('');
  
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return ()=>{
        document.body.style.overflow = "visible"
    }
  },[])
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 z-50">
      <div className="w-full max-w-md mx-4 p-8 bg-gray-900 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Enter Game ID
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Join your game session
        </p>
        
        <div className="space-y-4">
          <input
            type="text"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            placeholder="Enter game ID"
            className="w-full px-4 py-3.5 text-white bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-500 backdrop-blur-sm"
          />
          
          <button
            onClick={() => console.log('Game ID:', gameId)}
            className="w-full px-4 py-3.5 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Join Game
          </button>
          <button
            onClick={close}
            className="w-full px-2 py-2 text-white font-semibold bg-gradient-to-r from-red-600 to-red-600 rounded-xl hover:from-red-700 hover:to-red-700 focus:ring-4 focus:ring-red-500/50 transition-all shadow-lg hover:shadow-red-500/50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameIdInput;
