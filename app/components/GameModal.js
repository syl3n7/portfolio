// components/GameModal.js
import Image from 'next/image';

export default function GameModal({ game, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-blue-900/50 backdrop-blur-sm z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="h-[100vh] w-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div 
            className="relative bg-white/90 backdrop-blur-sm rounded-xl w-full max-w-6xl mx-auto shadow-2xl border border-blue-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg text-2xl transition-colors z-50"
            >
              &times;
            </button>

            <div className="p-8 lg:p-12 space-y-8">
              <h3 className="text-4xl font-bold text-blue-900">
                {game.name} | {game.platform || 'PC'}
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-blue-800 text-xl">{game.description}</p>
              </div>

              {game.contributions && (
                <div>
                  <h4 className="text-2xl font-semibold text-blue-800 mb-6">What I worked on:</h4>
                  <ul className="space-y-4 text-lg text-blue-800">
                    {game.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 text-blue-600">&bull;</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {game.projectInfo && (
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-2xl font-semibold text-blue-800 mb-6">Project Info</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {game.projectInfo.technologies && (
                      <div>
                        <p className="font-medium text-blue-900 text-lg">Technologies</p>
                        <p className="text-blue-800">{game.projectInfo.technologies.join(" | ")}</p>
                      </div>
                    )}
                    {game.projectInfo.languages && (
                      <div>
                        <p className="font-medium text-blue-900 text-lg">Languages</p>
                        <p className="text-blue-800">{game.projectInfo.languages.join(" | ")}</p>
                      </div>
                    )}
                    {game.projectInfo.communication && (
                      <div>
                        <p className="font-medium text-blue-900 text-lg">QA & Communication</p>
                        <p className="text-blue-800">{game.projectInfo.communication.join(" | ")}</p>
                      </div>
                    )}
                    {game.projectInfo.management && (
                      <div>
                        <p className="font-medium text-blue-900 text-lg">Project Management</p>
                        <p className="text-blue-800">{game.projectInfo.management}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {game.gallery && (
                <div>
                  <h4 className="text-2xl font-semibold text-blue-800 mb-6">Gallery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {game.gallery.map((image, index) => (
                      <div key={index} className="relative h-64">
                        <Image 
                          src={image}
                          alt={`${game.name} screenshot ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {game.links && (
                <div className="flex gap-4 text-lg">
                  <a href={game.links.store} className="text-blue-600 hover:text-blue-800">Store page</a>
                  <span className="text-blue-300">|</span>
                  <a href={game.links.website} className="text-blue-600 hover:text-blue-800">Website link</a>
                  <span className="text-blue-300">|</span>
                  <a href={game.links.twitter} className="text-blue-600 hover:text-blue-800">Twitter/X</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}