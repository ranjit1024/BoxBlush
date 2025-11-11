import React, { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import { Play, Users, Zap, TrendingUp, ArrowRight, Sparkles, Flame, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GameIdInput from '@/component/join';
interface Feature {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  desc: string;
  color: string;
  index: number;
}

interface HowToPlayStep {
  step: string;
  title: string;
  desc: string;
}

interface FooterSection {
  title: string;
  links: string[];
}

const GameLandingPage: FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const connection = useRef(null);
  const navigate = useNavigate()
  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () =>{
      console.log("Connected")
    }
    socket.onmessage = (event) =>{
      const data = JSON.parse(event.data);
      console.log(data)
      localStorage.setItem("clientId",data.clientId);
    }
  },[])
  const features: Feature[] = [
    {
      icon: Users,
      title: 'Real-Time Battles',
      desc: 'Up to 4 players, zero lag, instant actions',
      color: 'from-red-500 to-red-600',
      index: 0,
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: 'Sub-100ms response time for the ultimate edge',
      color: 'from-green-500 to-green-600',
      index: 1,
    },
    {
      icon: TrendingUp,
      title: 'Ranked System',
      desc: 'Climb the global leaderboard and earn rewards',
      color: 'from-blue-500 to-blue-600',
      index: 2,
    },
  ];

  const howToPlaySteps: HowToPlayStep[] = [
    { step: '1', title: 'Join the Arena', desc: 'Create or join a live game room' },
    { step: '2', title: 'Pick Your Color', desc: 'Choose Red, Green, or Blue' },
    { step: '3', title: 'Dominate', desc: 'Fill more boxes than your opponents' },
  ];

  const footerSections: FooterSection[] = [
    { title: 'Product', links: ['Play Now', 'Features', 'Pricing'] },
    { title: 'Community', links: ['Discord', 'Twitter', 'Twitch'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] },
  ];

  const gridColors: Array<{ bg: string; shadow: string }> = [
    { bg: 'bg-red-500', shadow: 'shadow-red-500/50' },
    { bg: 'bg-green-500', shadow: 'shadow-green-500/50' },
    { bg: 'bg-blue-500', shadow: 'shadow-blue-500/50' },
    { bg: 'bg-white/10', shadow: 'shadow-white/20' },
  ];

  const getRandomColor = (): { bg: string; shadow: string } => {
    return gridColors[Math.floor(Math.random() * gridColors.length)];
  };

  const stats: Array<{ value: string; label: string; gradient: string }> = [
    { value: '50B+', label: 'Active Players', gradient: 'from-red-400 to-red-500' },
    { value: '1000B+', label: 'Matches Played', gradient: 'from-green-400 to-green-500' },
    { value: '10^2★', label: 'App Rating', gradient: 'from-blue-400 to-blue-500' },
  ];
  const [gameId,setGameId] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
    <div className='absolute flex overflow-hidden justify-center items-center z-10 w-[100%]'>
      {gameId ?<GameIdInput close={()=>setGameId(status => !status)}/> :null}
        </div>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black" />
      </div>

      {/* Navbar */}
      <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Gamepad2 size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              BoxFill
            </span>
          </div>
   
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                New Season Starts Soon
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black leading-tight">
              Claim Your
              <br />
              <span className="bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Colors
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Real-time multiplayer chaos where strategy meets reflexes. Fill the grid faster than your opponents and dominate the leaderboard.
            </p>

            <div className="flex gap-4 pt-4">
              <button onClick={()=>{
                setGameId(true)
              }} className="group hover:cursor-pointer relative px-8 py-4 rounded-xl font-bold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 group-hover:scale-110 origin-center" />
                <div className="relative flex items-center gap-2 text-white">
                  <Play size={20} className="group-hover:translate-x-1 transition-transform" />
                  Join
                </div>
              </button>
              <button className="group hover:cursor-pointer relative px-8 py-4 rounded-xl font-bold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 border-gray-50 to-gray-900 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300 group-hover:scale-110 origin-center" />
                <div className="relative flex items-center gap-2 text-white">
                  <Gamepad2 size={20} className="group-hover:translate-x-1 transition-transform" />
                  Create Game
                </div>
              </button>
            </div>
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Game Preview Grid - Interactive */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden group-hover:border-white/40 transition-all duration-300">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 rounded-3xl" />

              <div className="relative grid grid-cols-5 gap-3">
                {[...Array(25)].map((_, i) => {
                  const randomColor = getRandomColor();
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-xl ${randomColor.bg} ${randomColor.shadow} shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/30`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Why Players <span className="bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">Love</span> BoxFill
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect balance of strategy, reflexes, and pure competitive fun
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color, index }) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/20 backdrop-blur-xl hover:border-white/40 transition-all duration-300 group-hover:translate-y-[-8px]">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>

                {/* Animated line */}
                <div className="h-1 w-0 bg-gradient-to-r from-transparent to-white/20 mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Play */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-red-600/20 via-green-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/20 backdrop-blur-xl">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <Flame size={32} className="text-red-400" />
              How to Play
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {howToPlaySteps.map(({ step, title, desc }, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-xl font-black group-hover:scale-110 transition-transform">
                      {step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-white/80 transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-green-600 to-blue-600 rounded-3xl opacity-50 group-hover:opacity-75 blur-2xl transition-opacity duration-500" />
          <div className="relative bg-gradient-to-br from-red-600/80 via-green-600/80 to-blue-600/80 backdrop-blur-xl rounded-3xl p-16 text-center border border-white/20 overflow-hidden group-hover:border-white/40 transition-all">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
            </div>

            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Ready to Dominate?
              </h2>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                Thousands of players are already competing. Join the chaos now and become a legend.
              </p>
              <button className="group/btn relative px-12 py-5 rounded-xl font-bold overflow-hidden inline-flex items-center gap-2 text-lg">
                <div className="absolute inset-0 bg-white group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="relative text-black flex items-center gap-2">
                  Play Now
                  <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32 py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {footerSections.map((section, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 BoxFill. Crafted with passion by gamers for gamers.</p>
          </div>
        </div>
      </footer>

     
    </div>
  );
};

export default GameLandingPage;
