import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Download, 
  Star, 
  Gamepad2, 
  LayoutGrid, 
  User, 
  ChevronRight, 
  Smartphone,
  Trophy,
  Flame,
  ArrowLeft
} from 'lucide-react';

// Mock Data para os jogos baseados na ideia de GitHub/Open Source
const GAMES_DATA = [
  {
    id: 1,
    title: "Cyber Rush",
    developer: "IndieDev_01",
    rating: 4.8,
    category: "Ação",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop",
    github: "dev/cyber-rush",
    size: "12MB"
  },
  {
    id: 2,
    title: "Pixel Quest",
    developer: "RetroMaster",
    rating: 4.5,
    category: "RPG",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=250&fit=crop",
    github: "pixel/quest-game",
    size: "8MB"
  },
  {
    id: 3,
    title: "Zen Garden",
    developer: "PeacefulGames",
    rating: 4.9,
    category: "Puzzle",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    github: "zen/garden-web",
    size: "5MB"
  },
  {
    id: 4,
    title: "Neon Drift",
    developer: "SpeedCode",
    rating: 4.2,
    category: "Corrida",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    github: "drift/neon-drive",
    size: "15MB"
  }
];

const CATEGORIES = ["Jogos", "Apps", "Destaques", "Populares", "Novidades"];

const App = () => {
  const [activeTab, setActiveTab] = useState('jogos');
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Simular a navegação nativa
  const handleBack = () => setSelectedGame(null);

  // Componente de Cartão de Jogo (Lista)
  const GameCard = ({ game }) => (
    <div 
      onClick={() => setSelectedGame(game)}
      className="flex items-center p-4 active:bg-gray-100 transition-colors cursor-pointer border-b border-gray-50"
    >
      <img 
        src={game.image} 
        alt={game.title} 
        className="w-16 h-16 rounded-2xl object-cover shadow-sm"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-gray-900 font-medium text-base truncate">{game.title}</h3>
        <p className="text-gray-500 text-sm">{game.developer}</p>
        <div className="flex items-center mt-1">
          <span className="text-gray-600 text-xs font-medium mr-1">{game.rating}</span>
          <Star size={12} className="text-gray-600 fill-current" />
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-gray-500 text-xs">{game.size}</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full active:scale-95 transition-transform">
        OBTER
      </button>
    </div>
  );

  // Ecrã de Detalhes do Jogo
  if (selectedGame) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header Detalhes */}
        <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-10">
          <button onClick={handleBack} className="p-2 -ml-2 rounded-full active:bg-gray-100">
            <ArrowLeft size={24} className="text-blue-600" />
          </button>
          <Search size={22} className="text-gray-600" />
        </div>

        <div className="flex-1 overflow-y-auto pb-20">
          <div className="p-4 flex gap-4">
            <img 
              src={selectedGame.image} 
              className="w-28 h-28 rounded-3xl object-cover shadow-lg"
              alt={selectedGame.title}
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">{selectedGame.title}</h1>
              <p className="text-blue-600 font-medium">{selectedGame.developer}</p>
              <p className="text-gray-400 text-sm mt-1">Contém Compras In-App</p>
            </div>
          </div>

          <div className="flex px-4 py-6 border-b border-gray-100 items-center justify-around text-center">
            <div>
              <div className="flex items-center justify-center font-bold text-gray-900">
                {selectedGame.rating} <Star size={14} className="ml-1 fill-black" />
              </div>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Avaliações</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div>
              <div className="font-bold text-gray-900">4+</div>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Idade</p>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div>
              <div className="font-bold text-gray-900">#{Math.floor(Math.random() * 10) + 1}</div>
              <p className="text-[10px] text-gray-400 uppercase font-bold mt-1">Acção</p>
            </div>
          </div>

          <div className="p-4">
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md active:bg-blue-700 active:scale-[0.98] transition-all">
              INSTALAR
            </button>
          </div>

          <div className="px-4 mt-4">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Sobre este jogo</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Um jogo experimental fantástico vindo diretamente do GitHub. 
              Optimizado para navegadores mobile com suporte total a toque.
              <br/><br/>
              Repositorio: <span className="text-blue-600 italic">github.com/{selectedGame.github}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col font-sans select-none overflow-hidden">
      {/* Barra de Pesquisa */}
      <div className="p-4 pt-6">
        <div className="bg-gray-100 rounded-2xl p-3 flex items-center shadow-sm border border-gray-200">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Pesquisar jogos e apps" 
            className="bg-transparent border-none outline-none text-gray-700 w-full text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <User size={20} className="text-blue-600 ml-2" />
        </div>
      </div>

      {/* Categorias */}
      <div className="flex overflow-x-auto px-4 gap-6 no-scrollbar border-b border-gray-100 shrink-0">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`pb-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
              activeTab === cat.toLowerCase() ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(cat.toLowerCase())}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
        {/* Banner de Destaque */}
        <div className="p-4">
          <div className="relative w-full h-48 rounded-3xl overflow-hidden shadow-lg group active:scale-[0.99] transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&h=400&fit=crop" 
              className="w-full h-full object-cover"
              alt="Destaque"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Novo Lançamento</span>
              <h2 className="text-white text-xl font-bold">Space Explorer Web</h2>
              <p className="text-gray-300 text-xs">Jogue agora sem instalar</p>
            </div>
          </div>
        </div>

        {/* Secção: Recomendados para Si */}
        <div className="px-4 mb-2 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Recomendados para si</h2>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        
        <div className="flex flex-col">
          {GAMES_DATA.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Secção: Jogos em Alta */}
        <div className="p-4 mt-4 bg-blue-50/50">
          <div className="flex items-center mb-4">
            <Flame size={20} className="text-orange-500 mr-2" />
            <h2 className="text-lg font-bold text-gray-900">Em Alta no GitHub</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            {GAMES_DATA.slice().reverse().map(game => (
              <div 
                key={`hot-${game.id}`} 
                onClick={() => setSelectedGame(game)}
                className="min-w-[140px] flex flex-col"
              >
                <img src={game.image} className="w-full h-32 rounded-2xl object-cover shadow-sm mb-2" />
                <p className="text-sm font-medium text-gray-900 truncate">{game.title}</p>
                <p className="text-xs text-gray-500">{game.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] max-w-md mx-auto">
        <button className="flex flex-col items-center gap-1 text-blue-600">
          <Gamepad2 size={24} />
          <span className="text-[10px] font-bold">Jogos</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <LayoutGrid size={24} />
          <span className="text-[10px] font-medium">Apps</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Trophy size={24} />
          <span className="text-[10px] font-medium">Eventos</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Search size={24} />
          <span className="text-[10px] font-medium">Pesquisa</span>
        </button>
      </div>

      {/* Estilo para esconder scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
