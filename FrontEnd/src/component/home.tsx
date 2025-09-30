import "../App.css"
import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Users, ArrowRight, Zap, Grid3X3 } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { id: 1, delay: '0s', duration: '20s', size: 'w-32 h-32', opacity: 'opacity-10' },
    { id: 2, delay: '5s', duration: '25s', size: 'w-24 h-24', opacity: 'opacity-15' },
    { id: 3, delay: '10s', duration: '30s', size: 'w-40 h-40', opacity: 'opacity-5' },
    { id: 4, delay: '15s', duration: '18s', size: 'w-28 h-28', opacity: 'opacity-12' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Ultra-Modern Grain Texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] filter blur-3xl"></div>
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.1"/%3E%3C/svg%3E')] mix-blend-soft-light`}></div>
      </div>

      {/* Dynamic Mouse Follower Glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(168,85,247,0.04) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating Geometric Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} ${element.opacity} rounded-3xl backdrop-blur-3xl border border-white/5`}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))',
            animation: `float ${element.duration} infinite linear`,
            animationDelay: element.delay,
            left: `${20 + (element.id * 15)}%`,
            top: `${10 + (element.id * 20)}%`,
          }}
        />
      ))}

      {/* Header - Glassmorphism */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-400/20 to-purple-600/20 rounded-xl backdrop-blur-xl border border-white/10">
              <Grid3X3 className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              BoxBlush
            </h1>
            <p className="text-xs text-zinc-500 tracking-wide">PUZZLE ARENA</p>
          </div>
        </div>
        
        <button className="group relative p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl hover:border-zinc-700/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Sparkles className="relative w-5 h-5 text-zinc-400 group-hover:text-orange-400 transition-colors duration-300" />
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-40 flex flex-col items-center justify-center min-h-[85vh] px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          
          {/* Hero Section with Brutal Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter">
                <span className="block bg-gradient-to-r from-orange-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent relative">
                  READY
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-3xl -z-10"></div>
                </span>
                <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative mt-[-2rem]">
                  TO PLAY?
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 to-indigo-500/20 blur-3xl -z-10"></div>
                </span>
              </h2>
            </div>

            {/* Glassmorphism Description Card */}
            <div className="max-w-2xl mx-auto p-8 bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/30 rounded-3xl">
              <p className="text-xl text-zinc-300 leading-relaxed font-light">
                Choose any color and try to fill the most boxes possible in this 
                <span className="text-orange-400 font-medium"> mind-bending </span>
                puzzle challenge
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Primary Button - Neumorphism + Glassmorphism Hybrid */}
            <button 
              className="group relative px-16 py-6 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl font-bold text-xl text-black shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-4">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>CREATE GAME</span>
                <ArrowRight className={`w-6 h-6 transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </div>
              
              {/* Animated Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            </button>

            {/* Secondary Actions - Ultra Modern Glassmorphism */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group flex items-center space-x-4 px-8 py-4 bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/40 rounded-2xl hover:border-zinc-700/60 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                  <Zap className="relative w-5 h-5 text-blue-400" />
                </div>
                <span className="text-zinc-200 font-medium">JOIN GAME</span>
              </button>
              
              <button className="group flex items-center space-x-4 px-8 py-4 bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/40 rounded-2xl hover:border-zinc-700/60 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                  <Users className="relative w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-zinc-200 font-medium">EXPLORE ALL</span>
              </button>
            </div>
          </div>

          {/* Stats Bar - Minimalist Dark */}
        
        </div>
      </main>

      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

     
    </div>
  );
};

export default Home;
