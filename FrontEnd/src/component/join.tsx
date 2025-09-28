import React, { useState } from 'react';

const GameCard = ({join}:{
    join:React.MouseEventHandler<HTMLButtonElement>
}) => {
  const [gameId, setGameId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Game ID:', gameId);
    localStorage.setItem("gameId", String(gameId))
  };

  return (
    <div className=' h-[100vh] flex justify-center items-center'>

    <div className="w-xl   bg-gray-700/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20  justify-center items-center">
   
      {/* Card Header */}
      <div className="px-6 pt-6 pb-2">
        <div className="text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            BoxBlush
          </p>
          <h2 className="text-xl font-bold text-white mb-2">
            Enter game Id
          </h2>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 pb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={gameId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
              placeholder="Type something here..."
            />
          </div>
          
          <button
            onClick={join}
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:cursor-pointer focus:ring-offset-gray-800 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default GameCard;
