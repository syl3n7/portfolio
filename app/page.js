// app/page.js
'use client'

import { useState } from 'react';
import { Mail } from 'lucide-react';

const games = [
  {
    id: 1,
    name: "MyLittleExploree",
    image: "/api/placeholder/400/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    name: "CatchMeIfYouCan",
    image: "/api/placeholder/400/300",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    name: "CloudShooter",
    image: "/api/placeholder/400/300",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    name: "MistSolitude",
    image: "/api/placeholder/400/300",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Cláudio Pinheiro</h1>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#portfolio" className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#resume" className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors">Résumé</a>
              <a href="mailto:claudiosilva@pm.me" className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors">
                <Mail className="w-5 h-5 mr-1" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="hero" className="text-center py-20">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Hi, my name is Cláudio</h2>
            <p className="text-xl text-blue-800">I'm a generalist game programmer with a passion for tech</p>
            <p className="text-lg text-blue-700 mt-2">Currently studying game development at IPMAIA</p>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {games.map((game) => (
              <div 
                key={game.id} 
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-xl border border-blue-100"
                onClick={() => setSelectedGame(game)}
              >
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-900">{game.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Résumé</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-blue-100">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Skills</h3>
              <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
                <li>Adobe Creative Suite</li>
                <li>Microsoft Office Suite</li>
                <li>Unity Engine for creating tools and games</li>
                <li>Problem solving</li>
                <li>Programming in C#, .Net, Java, C++</li>
                <li>Installation and configuration of networks</li>
                <li>Installation and configuration of operating systems</li>
                <li>Maintenance and configuration of servers and desktops</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Work Experience</h3>
              <div className="space-y-4 bg-indigo-50 rounded-lg p-6">
                <div>
                  <h4 className="font-semibold text-blue-900">APPC of Porto - Computer Technical Assistant</h4>
                  <p className="text-blue-800">6-month internship</p>
                  <ul className="list-disc ml-6 mt-2 text-blue-800">
                    <li>Installation and configuration of operating systems</li>
                    <li>Network installation and configuration</li>
                    <li>Internal network management and access point configuration</li>
                    <li>Hardware and software maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">PT/MEO Contact Center</h4>
                  <p className="text-blue-800">2-month "on-job" training period</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">ManPowerGroup - Technical Support for Altice Portugal</h4>
                  <p className="text-blue-800">Part-time | April 2018 – May 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Intelcia - Technical Support for Altice Portugal</h4>
                  <p className="text-blue-800">Part-time | May 2020 – Present</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Academic Qualifications</h3>
              <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
                <li>Regular education up to the 12th grade</li>
                <li>Technical-professional course of Programming and Management of Computer Systems
                  <ul className="ml-6 mt-1 text-blue-800">
                    <li>Level 4 in the European qualifications framework</li>
                    <li>Average performance: 15</li>
                    <li>P.A.P.: 18</li>
                    <li>T.W.C.: 15</li>
                  </ul>
                </li>
                <li>Professional photography course [entry level] at ShawAcademy</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Other Qualifications</h3>
              <ul className="space-y-2 text-blue-900 bg-indigo-50 rounded-lg p-6">
                <li>8 years of experience with Windows operating systems</li>
                <li>6 years of experience in Linux-based operating systems</li>
                <li>2 years of experience in MacOS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">References</h3>
              <ul className="space-y-2 text-blue-900 bg-blue-50 rounded-lg p-6">
                <li>APPC Porto – Pedro Silva – Internship monitor (2016)</li>
                <li>Gondomar Secondary School – Carla Cruz – Accompanying teacher during P.A.P.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {selectedGame && (
        <div className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg max-w-2xl w-full p-6 shadow-2xl border border-blue-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-900">{selectedGame.name}</h3>
              <button 
                onClick={() => setSelectedGame(null)}
                className="text-blue-500 hover:text-blue-700 text-2xl transition-colors"
              >
                ×
              </button>
            </div>
            <img src={selectedGame.image} alt={selectedGame.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-blue-800">{selectedGame.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}