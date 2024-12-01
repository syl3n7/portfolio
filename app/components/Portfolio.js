// components/Portfolio.js
import Image from 'next/image';

export default function Portfolio({ games, onGameSelect }) {
  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-xl border border-blue-100"
            onClick={() => onGameSelect(game)}
          >
            <div className="relative w-full h-48">
              <Image 
                src={game.image} 
                alt={game.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900">{game.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}