import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [setColor, setSetcolor] = useState(false)
  const colors = [
    { name: 'Blue', color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600', shadowColor: 'shadow-blue-500/25' },
    { name: 'Red', color: 'bg-red-500', hoverColor: 'hover:bg-red-600', shadowColor: 'shadow-red-500/25' },
    { name: 'Green', color: 'bg-emerald-500', hoverColor: 'hover:bg-emerald-600', shadowColor: 'shadow-emerald-500/25' },
    { name: 'Orange', color: 'bg-orange-500', hoverColor: 'hover:bg-orange-600', shadowColor: 'shadow-orange-500/25' },
    { name: 'Purple', color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600', shadowColor: 'shadow-purple-500/25' },
    { name: 'Pink', color: 'bg-pink-500', hoverColor: 'hover:bg-pink-600', shadowColor: 'shadow-pink-500/25' },
  ];

  const handleColorSelect = (color:any) => {
    setSelectedColor(color.name);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="  bg-gradient-to-br   flex items-center justify-center p-4 rounded-2xl ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 md:w-full lg:w-2xl h-full"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Select Color
          </h1>
          <p className="text-white/70 text-lg">Choose your preferred color to continue</p>
          {selectedColor && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white/90 mt-2 font-medium"
            >
              Selected: {selectedColor}
            </motion.p>
          )}
        </motion.div>

        {/* Color Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {colors.map((colorItem, index) => (
            <motion.button
              key={colorItem.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleColorSelect(colorItem)}
              className={`
                relative overflow-hidden rounded-2xl p-6 h-24 flex items-center justify-center
                ${colorItem.color} ${colorItem.hoverColor}
                transform transition-all duration-300 ease-out
                shadow-lg ${colorItem.shadowColor}
                ${selectedColor === colorItem.name ? 'ring-4 ring-white/50 ring-offset-2 ring-offset-transparent' : ''}
                group cursor-pointer
              `}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <span className="relative z-10 text-white font-semibold text-lg drop-shadow-lg">
                {colorItem.name}
              </span>

              {/* Selection indicator */}
              {selectedColor === colorItem.name && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  
                  className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
        <motion.button
        initial={{ opacity: 0, }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 , duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
             
        className={`${setColor?'border-2 border-amber-700 ':null} text-md px-6 py-2 rounded-md  font-bold bg-gradient-to-r from-yellow-400 to-orange-500  mb-2 hover:cursor-pointer `}>OK</motion.button>
        {/* Action Buttons */}
        
      </motion.div>
    </div>
  );
};

export default ColorSelector;